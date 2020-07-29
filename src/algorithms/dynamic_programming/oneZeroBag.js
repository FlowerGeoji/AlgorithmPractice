const { default: solution } = require("./cutPipe");

const ITEMS = [[60, 10], [100, 20], [120, 30]]
const CAP = 50

const getValue = item => item[0]
const getWeight = item => item[1]

function solution(items, cap) {
  const memo = {}
  for(const item of items) {
    memo[1][getWeight(item)] = getValue(item)
  }
  console.log({memo})
}

solution(ITEMS, CAP)