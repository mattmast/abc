
```
$> node abc.js --help
Usage: node abc.js -c [character]

For example 'node abc.js -c C' displays
  A
 B B
C   C
 B B
  A

Options:
  --help           Show help                                           [boolean]
  --version        Show version number                                 [boolean]
  -c, --character  Character for diamond                          [default: "C"]
```

### Setup
1. Install and setup NodeJS ```v8.9.1``` or newer
2. ```git clone https://github.com/mattmast/abc```
3. ```cd abc```
4. ```npm install```

### Tests

```
$> npm test -- --coverage

> abc@1.0.0 test C:\Users\matt1mast\src\abc
> jest "--coverage"

 PASS  .\diamond.test.js
  test "C" diamond
    √ line for A (2ms)
    √ line for B (1ms)
    √ line for C
    √ diamond height is 5
  test various diamonds
    √ test "a" diamond (1ms)
    √ test boundary of diamond (1ms)
    √ test multi-letter string takes first
    √ test integer diamond returns empty
    √ test unicode character diamond returns empty
    √ test special character returns empty
    √ test number as string returns empty (1ms)
    √ test empty string returns empty
    √ test whitespace string returns empty
    √ test object returns empty
    √ test list returns empty

Test Suites: 1 passed, 1 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        1.116s
Ran all test suites.
------------|----------|----------|----------|----------|----------------|
File        |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
------------|----------|----------|----------|----------|----------------|
All files   |      100 |      100 |      100 |      100 |                |
 diamond.js |      100 |      100 |      100 |      100 |                |
------------|----------|----------|----------|----------|----------------|
```
