import { map } from 'lodash';
import { Array2D } from '../data/';
import { convertArray2DToArray1D } from '../utils';

function transpose(
  matrix: Array2D,
) {
  const newMatrix: Array<Array<number>> = map(matrix.matrix[0], (col, i) => (
    map(matrix.matrix, (row) => (
      row[i]
    ))
  ));

  const row = matrix.shape[0];
  const col = matrix.shape[1];

  const values = convertArray2DToArray1D([col, row], newMatrix);

  return new Array2D([col, row], values);
}

export default transpose;
