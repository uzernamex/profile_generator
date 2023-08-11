const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? (Nicknames are also acceptable'), (answer1) => {
  rl.question('What\'s an activity you enjoy doing? '), (answer2) => {
    console.log(Thank you for ${answer1} your valuable feedback: ${answer2});
  }
    /*
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
*/
  
rl.close();

});