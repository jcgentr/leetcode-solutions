/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const startColor = image[sr][sc];
  if (startColor === newColor) return image;
  fillNeighbor(image, sr, sc, newColor, startColor);
  return image;
};

function fillNeighbor(image, r, c, newColor, startColor) {
  if (
    r < 0 ||
    r > image.length - 1 ||
    c < 0 ||
    c > image[0].length - 1 ||
    image[r][c] !== startColor
  )
    return;
  image[r][c] = newColor;
  fillNeighbor(image, r - 1, c, newColor, startColor);
  fillNeighbor(image, r + 1, c, newColor, startColor);
  fillNeighbor(image, r, c - 1, newColor, startColor);
  fillNeighbor(image, r, c + 1, newColor, startColor);
}
