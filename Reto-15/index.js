/**
  * @param {Array<Object>} data - The data to draw the table
  * @param {string} sortBy - The field to sort the table
  * @returns {string}
  */
function drawTable(data, sortBy) {
  const keys = Object.keys(data[0]);
  const qtyColumns = keys.length;
  let sortedArr;
  
  if (typeof (data[0][sortBy]) === 'number') {
    sortedArr = [...data].sort((a, b) => a[sortBy] - b[sortBy]);
  } else {
    sortedArr = [...data].sort((a, b) => a[sortBy].toLowerCase().localeCompare(b[sortBy].toLowerCase()));
  }

  const maxLengthsArray = keys.map(
    key => Math.max(...data.map(obj => String(obj[key]).length))
  );

  const getColumnNames = (qty) => {
    return Array.from({ length: qty }, (_, i) => String.fromCharCode(65 + i));
  }

  const getHorizontalLine = (columnNames, maxLengthsArray) => {
    return columnNames.map((_, index) => '+' + '-'.repeat(maxLengthsArray[index] + 2)).join('') + '+';
  }

  const getHeader = (maxLengthsArray, columnNames, horizontalLine) => {
    const header = columnNames.map((cn, index) => '| ' + cn + ' '.repeat(maxLengthsArray[index])).join('') + '|';

    return horizontalLine + '\n' + header + '\n' + horizontalLine + '\n';
  }

  const draw = (data, qtyColumns, maxLengthsArray) => {
    const columnNames = getColumnNames(qtyColumns);
    const horizontalLine = getHorizontalLine(columnNames, maxLengthsArray);

    const rows = data.map((obj) => {
      const values = Object.values(obj);
      const cell = values.map((d, index) => '| ' + d + ' '.repeat(maxLengthsArray[index] - String(d).length + 1));
      return cell.join('') + '|\n';
    }).join('');

    return (
      getHeader(maxLengthsArray, columnNames, horizontalLine) +
      rows +
      horizontalLine
    );
  }

  return draw(sortedArr, qtyColumns, maxLengthsArray);
}

// Ejemplos:

console.log(drawTable(
  [
    { name: 'Charlie', city: 'New York' },
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' }
  ],
  'name'
));
// +---------+----------+
// | A       | B        |
// +---------+----------+
// | Alice   | London   |
// | Bob     | Paris    |
// | Charlie | New York |
// +---------+----------+

console.log(drawTable(
  [
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 },
    { gift: 'Doll', quantity: 10 }
  ],
  'quantity'
));
// +----------+----+
// | A        | B  |
// +----------+----+
// | Music CD | 1  |
// | Book     | 5  |
// | Doll     | 10 |
// +----------+----+

console.log(drawTable(
  [
    { gift: 'Book', quantity: 5, price: 12.7 },
    { gift: 'Music CD', quantity: 1, price: 7 },
    { gift: 'Doll', quantity: 10, price: 24.7 }
  ],
  'quantity'
));

console.log(drawTable(
  [
    { gift: 'Book', quantity: 5, price: 12.7 },
    { gift: 'Music CD', quantity: 1, price: 7 },
    { gift: 'Doll', quantity: 10, price: 24.7 }
  ],
  'price'
));
