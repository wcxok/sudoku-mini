/**
 * 检查书读的解决方案
 */

function checkArray(array) {
  const length = array.length
  const masks = new Array(length)

  masks.fill(true)
  for (let i = 0; i < 9; i++) {
    if (!masks[i]) {
      continue
    }
    const v = array[i]
    // 检查是否有效 0 无效 1-9有效
    if (!v) {
      masks[i] = false
      continue
    }
    // 检查是否重复 i+1 ~ 9， 是否有和i重复的数据
    for (let j = i + 1; j < length; j++) {
      if (v === array[j]) {
        masks[i] = masks[j] = false
      }
    }
  }
  return masks
}

const Toolkit = require('./tooltik')
// 输入: matrix,用户完成的数独数据 9*9
// 处理：对matrix 行，列， 宫进行检查，并填写masks
// 输出：检查是否成功， masks
module.exports = class Checker {
  constructor(matrix) {
    this._matrix = matrix
    this._matrixMasks = Toolkit.matrix.makeMatrix(true)
  }

  get matrixMarks() {
    return this._matrixMasks
  }

  get isSuccess() {
    return this._success
  }

  check() {
    this.checkRows()
    this.checkCols()
    this.checkBoxes()

    // 检查是否成功
    this._success = this._matrixMasks.every(row => row.every(mark => mark))
    return this._success
  }

  checkRows() {
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
      const row = this._matrix[rowIndex]
      const marks = checkArray(row)
      
      for (let colIndex = 0; colIndex < marks.length; colIndex++) {
        if (!marks[colIndex]) {
          this._matrixMasks[rowIndex][colIndex] = false
        }
      }
    }
  }

  checkCols() {
    for (let colIndex = 0; colIndex < 9; colIndex++) {
      const cols = []
      for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
        cols[rowIndex] = this._matrix[rowIndex][colIndex]
      }
      const marks = checkArray(cols)
      for (let rowIndex = 0; rowIndex < marks.length; rowIndex++) {
        if (!marks[rowIndex]) {
          this._matrixMasks[rowIndex][colIndex] = false
        }
      }
    }
  }

  checkBoxes() {
    for (let boxIndex = 0; boxIndex < 9; boxIndex++) {
      const boxes = Toolkit.box.getBoxCells(this._matrix, boxIndex)
      const marks = checkArray(boxes)
      for (let cellIndex = 0; cellIndex < 9; cellIndex++) {
        if (!marks[cellIndex]) {
          const box = Toolkit.box.convertFromBoxIndex(boxIndex, cellIndex)
          this._matrixMasks[box.boxIndex][box.celIndex] = false
        }
      }
    }
  }
}
