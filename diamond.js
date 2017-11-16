const curry = require('lodash/curry');

const charCode = c => c.charCodeAt(0);
const CHAR_CODE_A = charCode('A');
const CHAR_CODE_LIMIT = charCode('z');

/**
 * A generator that yields characters from [A, 'char'] then ('char', A].
 *
 * @param char - The ending character for range.
 */
function* charRangeForDiamond(char) {
  for (let idx = CHAR_CODE_A, end = charCode(char); idx <= end; ++idx) {
    yield String.fromCharCode(idx);
  }

  for(let idx = charCode(char) - 1, start = CHAR_CODE_A; idx >= start; --idx) {
    yield String.fromCharCode(idx);
  }
}

/**
 * Build a particular line for a diamond given by 'diamondChar'.  The function
 * splits the problem into finding the first number of spaces *before* the first character
 * output. Then it computes the spaces *after* the first character output.
 *
 * @param diamondChar - The type of diamond that the line is being constructed for.
 * @param lineChar - The character for line to be computed.
 */
const lineForDiamond = curry((diamondChar, lineChar) => {
  const largestPoint = charCode(diamondChar) - CHAR_CODE_A;
  const pointFromZero = charCode(lineChar) - CHAR_CODE_A;

  const leftSide = ' '.repeat(largestPoint - pointFromZero).concat(lineChar);
  if (pointFromZero === 0) {
    return leftSide;
  }
  const rightSide = ' '.repeat(2 * pointFromZero - 1).concat(lineChar);
  return leftSide.concat(rightSide);
});

/**
 * Build a diamond out of characters starting with 'A" and ending with
 * the provider character.
 *
 * @param diamondChar - The character that the diamond will be built for.
 * @returns {*} - A list of strings for each line of the diamond.
 */
const buildDiamond = (diamondChar) => {
  if (typeof diamondChar !== 'string') {
    return [];
  }
  const char = diamondChar.charAt(0);
  if (charCode(char) > CHAR_CODE_LIMIT) {
    return [];
  }
  const charLine = lineForDiamond(char);
  return Array.from(charRangeForDiamond(char)).map(charLine);
};

module.exports = {
  buildDiamond,
  lineForDiamond
};
