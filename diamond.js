const curry = require('lodash/curry');

const charCode = c => c.charCodeAt(0);

const CHAR_CODE_A = charCode('A');

const CHAR_CODE_LIMIT = charCode('z');

function* charRangeForDiamond(char) {
  for (let idx = CHAR_CODE_A, end = charCode(char); idx <= end; ++idx) {
    yield String.fromCharCode(idx);
  }

  for(let idx = charCode(char) - 1, start = CHAR_CODE_A; idx >= start; --idx) {
    yield String.fromCharCode(idx);
  }
}

const lineForDiamond = curry((diamondChar, lineChar) => {
  const origin = CHAR_CODE_A;
  const center = charCode(diamondChar) - origin;
  const distFromOrigin = charCode(lineChar) - origin;

  const leftSide = ' '.repeat(center - distFromOrigin).concat(lineChar);
  if (distFromOrigin === 0) {
    return leftSide;
  }
  const rightSide = ' '.repeat(2 * distFromOrigin - 1).concat(lineChar);
  return leftSide.concat(rightSide);
});

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
