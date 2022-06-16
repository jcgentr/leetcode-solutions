/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let [l, r] = [0, str.length - 1];
  while (l <= r) {
    if (str[l] !== str[r]) return false;
    l += 1;
    r -= 1;
  }
  return true;
};
