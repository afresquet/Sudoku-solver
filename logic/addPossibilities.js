module.exports = (cell, permanentValues) => {
  // If the cell has no possibilities (i.e. has never been checked)
  if (cell.possibilities.length == 0) {
    // Check missing numbers from 1-9
    for (let n = 1; n < 10; n++)
      // If it's missing, add it to the cell as a possibility
      if (!permanentValues.includes(n))
        cell.possibilities.push(n);
  }
  else
    // Loop through every possibility
    for (let possibility of cell.possibilities)
      // If that possibility is a permanent cell in the box/axis already, filter it out
      if (permanentValues.includes(possibility))
        cell.possibilities = cell.possibilities.filter(value => value != possibility);
}