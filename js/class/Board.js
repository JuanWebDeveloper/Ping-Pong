export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.playing = false;
    this.bars = [];
    this.ball = null;
  }

  get elements() {
    let elements = this.bars.map((bar) => bar);
    elements.push(this.ball);
    return elements;
  }
}
