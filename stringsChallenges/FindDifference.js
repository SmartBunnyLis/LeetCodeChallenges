// Given two strings s and t which consist of only lowercase letters.
// String t is generated by random shuffling string s and then add one more letter at a random position.
// Find the letter that was added in t.
Input:
// s = "abcd"
// t = "abcde"
//
// Output:
// e
//
// Explanation:
// 'e' is the letter that was added
// sudo:
// 1. sort both strings
// 2. iterate trought both strings
// 3. if an el1 != el2
//     return el2



function findDiff(a, b) {
  a = a.split("").sort().join("")
  b = b.split("").sort().join("")
  for (var i = 0; i < b.length; i++) {
    if(b[i] != a[i]){
      return b[i];
    }
  }
}

s = "abcd"
t = "abcde"

console.log(findDiff(s,t));
console.log(findDiff("asc","acds"));


//Second Aproach
const hash = Array(256).fill(0)
for (let i = 0; i < s.length; i++) {
    hash[s[i].charCodeAt(0)]++
}

for (let i = 0; i < t.length; i++) {
    const code = t[i].charCodeAt(0)
    hash[code]--
    if (hash[code] === -1) {
        return t[i]
    }
}
return null
};
