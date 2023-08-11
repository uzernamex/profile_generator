const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? (Nicknames are also acceptable)', (answer1) => {
  rl.question('What\'s an activity that you enjoy doing? '), (answer2) => {
    rl.question('What do you listen to while doing this activity?'), (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)'), (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal?'), (answer4)=> {
          rl.question('What is you favourite summer activity?'), (answer5) => {
            rl.question('What is your favourite winter passtime?'), (answer6) => {

            }
          }
        }
      } 
    }
    console.log('Thank you for ${answer1} valuable feedback: ${answer2}, ${answer3}, ${answer4}, ${answer5}, and  ${answer6}');
  }
  rl.close();
    /*



What is your superpower? In a few words, tell us what you are amazing at!
*/
  
rl.close();

});