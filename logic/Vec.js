export default class Vec {
  constructor(row, column) {
    this.row = row;
    this.column = column;
    this.box = this.calculateBox();
  }

  calculateBox() {
    const row = ((this.row / 3) | 0) * 3;
    const column = (this.column / 3) | 0;

    return row + column;
  }
}
