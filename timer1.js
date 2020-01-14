const input = process.argv.slice(2)

const simpleTimer = (input) => {
  input 
  .map(n => parseInt(n))
  .filter(n => Number.isInteger(n) && n >= 0)
  .forEach(n => {
    setTimeout(() => process.stdout.write('\x07'), n);
  });
};

simpleTimer(input);


