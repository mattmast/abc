
const diamond = require('./diamond');

const exampleDiamond = diamond.buildDiamond('C').join('\n');
const argv = require('yargs')
  .usage(`Usage: node $0 -c [character]\n\nFor example \'node $0 -c C\' displays\n${exampleDiamond}`)
  .default('c', 'C')
  .alias('c', 'character')
  .nargs('c', 1)
  .describe('c', 'Character for diamond')
  .argv;

console.log(diamond.buildDiamond(argv.character).join('\n'));
