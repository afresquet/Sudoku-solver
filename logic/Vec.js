/** Vector to hold row, column, and box of a cell. */
export default class Vec {
	/**
	 * @param {number} x Cell's column
	 * @param {number} y Cell's row
	 */
	constructor(x, y) {
		this.row = y;
		this.column = x;
		this.box = Vec.calculateBox(x, y);
	}

	/**
	 * Calculate in which of the 9 boxes the Cell is located.
	 * @param {number} x Cell's column position.
	 * @param {number} y Cell's row position.
	 */
	static calculateBox(x, y) {
		const row = Math.floor(y / 3);
		const column = Math.floor(x / 3) * 3;

		return row + column;
	}
}
