export default class Bar {
  constructor(x, y, width, height, board) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.board = board;
    this.board.bars.push(this);
    this.kind = 'rectangle';
    this.speed = 10;
  }

  up() {
    this.y -= this.speed;
  }

  down() {
    this.y += this.speed;
  }
}
