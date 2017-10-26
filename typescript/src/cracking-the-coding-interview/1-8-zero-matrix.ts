/**
 * Problem:
 *   Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
 *
 * Solution:
 *   complexity: O(n * m)
 *   additional space: O(n + m)
 */

// tslint:disable:prefer-for-of
export function zeroMatrix(matrix: number[][]): void {
  const zeroRows = new Set();
  const zeroColumns = new Set();

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    const row = matrix[rowIndex];
    for (let cellIndex = 0; cellIndex < row.length; cellIndex++) {
      if (row[cellIndex] === 0) {
        zeroRows.add(rowIndex);
        zeroColumns.add(cellIndex);
      }
    }
  }

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    const row = matrix[rowIndex];
    for (let cellIndex = 0; cellIndex < row.length; cellIndex++) {
      if (zeroRows.has(rowIndex) || zeroColumns.has(cellIndex)) {
        matrix[rowIndex][cellIndex] = 0;
      }
    }
  }
}
