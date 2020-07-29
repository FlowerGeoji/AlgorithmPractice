
/**
 * 막대기 자르기
 * 
 * 하나의 긴 막대기가 있는데 막대기 조각마다 가격이 다르다.
 * 막대기를 적절하게 잘라서 가장 가격이 높게 만들어야 한다.
 * 
 * @param {number[]} p 막대기 길이 별 가치
 * @param {number} n 목표 막대기 길이
 * 
 * @returns {number} 최대 가치
 */

function solution(p, n) {
  const memo = [0]
  new Array()
  
  for(let i=1; i<=n; i++) {
    let maxValue = -1
    for(let j=1; j<=i; j++) {
      maxValue = Math.max(maxValue, p[j]+memo[i-j])
    }
    memo[i] = maxValue
  }

  return memo[n]
}

export default solution
