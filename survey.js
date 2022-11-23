const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
r1.question('What's your name? ', (name) => {
  console.log(`Your name is: ${name}`);

  r1.close();
  r1.question('What do you listen to while doing that?', (music) => {
    console.log(`Your name is: ${music}`);
  
    r1.close();
    r1.question('What's an activity you like doing? ', (activity) => {
      console.log(`You like doing: ${activity}`);
    
      r1.close();
      r1.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (fav meal) => {
        console.log(`Your fav meal is: ${fav meal}`);
      
        r1.close();
        r1.question('What's your favourite thing to eat for that meal ', (food choice) => {
          console.log(`Your fav thing to eat is: ${food choice}`);
        
          r1.close();
          r1.question('Which sport is your absolute favourite? ', (sport) => {
            console.log(`Your fav sport is: ${sport}`);
          
            r1.close();
  