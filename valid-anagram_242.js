/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const charMap = {};
  for (const c of s) {
    if (charMap[c]) charMap[c] += 1;
    else charMap[c] = 1;
  }
  for (const c of t) {
    if (!charMap[c] || charMap[c] < 1) return false;
    if (charMap[c]) charMap[c] -= 1;
  }
  return true;
};
