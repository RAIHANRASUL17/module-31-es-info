/*-------Step-1: getting Largest Number----------------*/ 
const maxNumber= Math.max(12, 78, 98, 999, 89);
console.log('The largest Number is: ',maxNumber);

/*------- Step-2: getting Largest Number From an Array ------------*/ 
const numbers= [12, 85, 98, 99900, 78];
console.log('Only getting Number from an Array : ', ...numbers)
const gettingNumbersOnlyFromArray= Math.max(...numbers);
console.log('Getting largest numbers from an Array is: ',gettingNumbersOnlyFromArray)

// /*-------(v.v.i) Step-3 push number in numbers Array (Wrong process) ------------*/ 
// const numbers2= numbers;
// // console.log('The numbers2 Array from the numbers Array', numbers2);
// numbers.push(55);
// numbers2.push(7777)
// /*Wrong process*/ 
// console.log('The Final Array1 is : ', numbers);
// console.log('The Final Array1 is :',numbers2)


// /*-------(v.v.i) Step-4 push number in numbers Array (Wrong process-2) ------------*/ 
// const numbers2= [numbers];

// numbers.push(55);
// numbers2.push(7777)
// /*Wrong process*/ 
// console.log('The Final Array1 is : ', numbers);
// console.log('The Final Array1 is :',numbers2)


// /*-------(v.v.i) Step-5 push number in numbers Array (wright process-1) ------------*/ 
// const numbers2= [...numbers];

// numbers.push(55);
// numbers2.push(7777)
// /*Wrong process*/ 
// console.log('The Final Array1 is : ', numbers);
// console.log('The Final Array1 is :',numbers2)


/*-------(v.v.i) Step-6 push number in numbers Array (wright process-2) ------------*/ 
const numbers2= [444,78, 98, ...numbers, 993, 0987];



/*Wrong process*/ 
console.log('The Final Array1 is : ', numbers);
console.log('The Final Array1 is :',numbers2)

