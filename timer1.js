// const input = process.argv.slice(2)

// const simpleTimer = (input) => {
//   input 
//   .map(n => parseInt(n))
//   .filter(n => Number.isInteger(n) && n >= 0)
//   .forEach(n => {
//     setTimeout(() => process.stdout.write('\x07'), n);
//   });
// };

// simpleTimer(input);


const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  process.stdout.write('.');
});

console.log('after callback');