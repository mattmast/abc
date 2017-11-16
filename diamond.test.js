
const diamond = require('./diamond');

describe('test "C" diamond', () => {
  const testChar = 'C';
  const lineForChar = diamond.lineForDiamond(testChar);

  test('line for A', () => {
    expect(lineForChar('A')).toBe('  A');
  });

  test('line for B', () => {
    expect(lineForChar('B')).toBe(' B B');
  });

  test('line for C', () => {
    expect(lineForChar('C')).toBe('C   C');
  });

  test('diamond height is 5', () => {
    expect(diamond.buildDiamond(testChar).length).toBe(5);
  });
});

describe('test various diamonds', () => {
  test('test "a" diamond', () => {
    expect(diamond.buildDiamond('a').length).toBe(65);
  });

  test('test boundary of diamond', () => {
    expect(diamond.buildDiamond('z').length).toBe(115);
    expect(diamond.buildDiamond('{').length).toBe(0);
  });

  test('test multi-letter string takes first', () => {
    expect(diamond.buildDiamond('CBA').length).toBe(5);
  });

  test('test integer diamond returns empty', () => {
    expect(diamond.buildDiamond(122).length).toBe(0);
  });

  test('test unicode character diamond returns empty', () => {
    expect(diamond.buildDiamond('\u{20BB7}').length).toBe(0);
  });

  test('test special character returns empty', () => {
    expect(diamond.buildDiamond('$').length).toBe(0);
  });

  test('test number as string returns empty', () => {
    expect(diamond.buildDiamond('1234').length).toBe(0);
  });

  test('test empty string returns empty', () => {
    expect(diamond.buildDiamond('').length).toBe(0);
  });

  test('test whitespace string returns empty', () => {
    expect(diamond.buildDiamond('   ').length).toBe(0);
  });

  test('test object returns empty', () => {
    expect(diamond.buildDiamond({hi: 'there'}).length).toBe(0);
  });

  test('test list returns empty', () => {
    expect(diamond.buildDiamond(['hi', 'there']).length).toBe(0);
  });
});
