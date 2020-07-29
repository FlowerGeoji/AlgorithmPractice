import cutPipe from '../../src/algorithms/dynamic_programming/cutPipe'

describe('Dynamic Programming TEST', ()=>{
  test('cutPipe', ()=>{
    const TEST_CASE = [
      [[0, 1, 5, 6, 9, 10, 17, 17, 20, 24, 30], 4]
    ]
    const ANSWER = [
      10
    ]

    for(let i=0; i<TEST_CASE.length; i++) {
      const testCase = TEST_CASE[i]
      expect(cutPipe.apply(undefined, testCase)).toBe(ANSWER[i])
    }
  })
})