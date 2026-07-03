import readline from 'node:readline/promises';
// Map stdin to 'input' and stdout to 'output' using object renaming
import { stdin as input, stdout as output } from 'node:process';
async function startgame({level}){
    if(level===1){
      var chances=10;
      console.log('Great! You have selected the Easy difficulty level.')
    }
    else if(level===2){
      var chances=5;
      console.log('Great! You have selected the Medium difficulty level.')
    }
    else if(level===3)
    {
     var chances=3;
      console.log('Great! You have selected the Hard difficulty level.')
    }
    else {
        console.log('you have selected invalid level')
        process.exit(1);
    }
    console.log(`Let's start the game!`)
    let c=chances;
    while(chances--)
    { 
      let random=Math.ceil(Math.random()*100);
      let guess=await rl.question(`Enter your guess:`);
      guess=Number(guess)
      if(guess===random)
      {
        console.log(`Congratulations! You guessed the correct number in ${c-chances} attempts.`)
        process.exit(1);
      }
      else{

        guess>random?console.log(`Incorrect! The number is less than ${guess}.`):console.log(`Incorrect! The number is greater than ${guess}.`)
        console.log(random,guess);
      }
    }
    console.log(`You lost the game!`)
    process.exit(1);
}
console.log(`Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 5 chances to guess the correct number.
`);

console.log(`Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)
as 1,2,3
`);


const rl = readline.createInterface({ input, output });

let level = await rl.question('Enter your choice:');
await startgame({level:Number(level)});
console.log(name)


// Always close the interface or the CLI process will hang open
rl.close(); 
