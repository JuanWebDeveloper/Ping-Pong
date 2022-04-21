export default class BoardView {
  constructor(canva, board) {
    this.canva = canva;
    this.canva.width = board.width;
    this.canva.height = board.height;
    this.board = board;
    this.ctx = canva.getContext('2d');
  }

  clean() {
    this.ctx.clearRect(0, 0, this.board.width, this.board.height);
  }

  draw() {
    for (let i = this.board.elements.length - 1; i >= 0; i--) {
      let element = this.board.elements[i];
      this.figure(this.ctx, element);
    }
  }

  checkCollisions() {
    for (let i = this.board.bars.length - 1; i >= 0; i--) {
      let bar = this.board.bars[i];
      if (this.hit(bar, this.board.ball)) {
        this.board.ball.collision(bar);
      }
    }
  }

  play() {
    if (this.board.playing) {
      this.clean();
      this.draw();
      this.checkCollisions();
      this.board.ball.move();
    }
  }

  hit(a, b) {
    let hit = false;

    if (b.x + b.width >= a.x && b.x < a.x + a.width) {
      if (b.y + b.height >= a.y && b.y < a.y + a.height) {
        hit = true;
      }
    }

    if (b.x <= a.x && b.x + b.width >= a.x + a.width) {
      if (b.y <= a.y && b.y + b.height >= a.y + a.height) {
        hit = true;
      }
    }

    if (a.x <= b.x && a.x + a.width >= b.x + b.width) {
      if (a.y <= b.y && a.y + a.height >= b.y + b.height) {
        hit = true;
      }
    }

    return hit;
  }

  figure(ctx, element) {
    switch (element.kind) {
      case 'rectangle':
        ctx.fillRect(element.x, element.y, element.width, element.height);
        break;
      case 'circle':
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.radius, 0, 7);
        ctx.fill();
        ctx.closePath();
        break;
    }
  }
}
