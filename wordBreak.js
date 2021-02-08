/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
let wordBreak = function (s, wordDict) {
  let n = s.length
  if (!n) return true

  let wordSet = new Set(wordDict)
  let dp = []
  dp[0] = true

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      let word = s.substr(j, i - j)
      console.log('test', word, j, i - j)
      if (wordSet.has(word) && dp[j]) {
        dp[i] = true
        break
      }
    }
  }
  // for (let i = 1; i <= n; i++) {
  //   for (let j = i-1; j >= 0; j--) {
  //     let word = s.slice(j, i)
  //     console.log('test', word, j, i)
  //     if (wordSet.has(word) && dp[j]) {
  //       dp[i] = true
  //       break
  //     }
  //   }
  // }

  return !!dp[n]
}

console.log(wordBreak('abc', ['a', 'b']))

