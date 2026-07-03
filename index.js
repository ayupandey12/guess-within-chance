import readline from 'node:readline/promises';
// Map stdin to 'input' and stdout to 'output' using object renaming
import { stdin as input, stdout as output } from 'node:process';

console.log(`Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 5 chances to guess the correct number.
`);

console.log(`Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)
`);


const rl = readline.createInterface({ input, output });

let name = await rl.question('What is your name? ');
console.log(name)


// Always close the interface or the CLI process will hang open
rl.close(); 
