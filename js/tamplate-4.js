/*--------------------step-1: (string declaration-)---------------*/
const personName1= "Adam Sand";
const personName2= 'White More';
const personName3= `Donal Trump`;
console.log(personName1, personName2, personName3); 

// /*--------------------step-2: (new line declaration-)---------------*/
// const multiLine= 'first line text\n' + 'second line code' + "third line of handlar\n" + "fourth line text again\n"

// console.log('The Multiline is with new line : ', multiLine)

// /*--------------------step-3: (power of backtick(``) declaration-)---------------*/
// const multiLine= `
// first line text 
// second line code 
//  third line of handlar
//   fourth line text again
//   `

// console.log('The Multiline is with new line : ', multiLine)

// /*--------------------step-4: (concatination declaration-)---------------*/
// const a = 20; 
// const b = 30;
// const nums = [78, 98, 45, 12, 6, 444]
// const summary = 'sum of:' + a + 'and' + b + 'is:'+ (a+b) + nums;

// console.log(summary)

/*-------------step-4: (power of concatination declaration-)-------------*/
const a = 20; 
const b = 30;
const nums = [78, 98, 45, 12, 6, 444]
// const summary = 'sum of: ' + a + ' and ' + b + ' is: '+ (a+b);

const summary = `sum of ${a} and ${b} is: ${a+b} ${nums}`;
console.log(summary);