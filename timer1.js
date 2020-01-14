const input = process.argv.slice(2)

const simpleTimer = (input) => {
  input.forEach(n => {
    setTimeout(() => process.stdout.write('\x07'), n);
  });
};

simpleTimer(input);



