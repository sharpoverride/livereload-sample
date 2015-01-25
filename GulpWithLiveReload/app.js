var readlineLib = require('readline');
var readline = readlineLib.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Hello world');

readline.question("End the program (yes)?", function(response) {
    readline.close();
});

