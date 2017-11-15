
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

==== Setup ====

* clone 
* cd abc
* npm install

=== Tests ===

```
$> npm test -- --coverage

> abc@1.0.0 test
> jest "--coverage"

 PASS  .\diamond.test.js
  test "C" diamond
    √ line for A (3ms)
    √ line for B
    √ line for C
    √ diamond height is 5 (1ms)
  test various diamonds
    √ test "a" diamond
    √ test multi-letter string takes first
    √ test integer diamond returns empty
    √ test unicode character diamond returns empty
    √ test special character returns empty
    √ test number as string returns empty
    √ test empty string returns empty
    √ test whitespace string returns empty (1ms)
    √ test object returns empty
    √ test list returns empty

Test Suites: 1 passed, 1 total
Tests:       14 passed, 14 total
Snapshots:   0 total
Time:        0.759s, estimated 1s
Ran all test suites.
------------|----------|----------|----------|----------|----------------|
File        |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
------------|----------|----------|----------|----------|----------------|
All files   |      100 |      100 |      100 |      100 |                |
 diamond.js |      100 |      100 |      100 |      100 |                |
------------|----------|----------|----------|----------|----------------|
```
