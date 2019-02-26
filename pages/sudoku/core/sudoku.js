/**
 * 生成数独游戏
 * 1. 生成完成的解决方案：Generator
 * 2. 随机去除部分数据：按比例
 */

const Generator = require('./generator')

module.exports = class Sudoku {
  constructor() {
    // 生成完成的解决方案
    const generator = new Generator()
    generator.generate()
    this.soluteMatrix = generator.matrix
  }

  make(level = 5) {
    // 生成迷盘
    this.puzzleMatrix = this.soluteMatrix.map(row => row.map(cell => {
      return Math.random() * 9 < level ? 0 : cell
    }))
  }
}