/*----------------step-1: Arrow function-1:-----------*/ 
const add1= (first, second) => (first +second);
// call function
const forReturnBtn_1= add1(10,20);
console.log('Tahe first arrow function output: ', forReturnBtn_1);

/*----------------step-2: Arrow function-2:-----------*/ 
const getFullName= (first, second) => (first +' ' +second);
// call function
const forReturnBtn_2= getFullName('Sm', 'Raihan Rasul');
console.log('The second arrow function output: ', forReturnBtn_2);

/*----------------step-3: Arrow function-3:-----------*/ 
const multiplay= (a, b) => (a * b);

// call function
const forReturnBtn_3= multiplay (10, 5);
console.log('The result of multiplay is: ', forReturnBtn_3);

/*----------------step-4: Arrow function-4:-----------*/ 
const addAll= (a, b, c, d, e, f) => (a + b + c + d + e + f);

// call function
const forReturnBtn_4= addAll (1, 2, 3, 4, 5, 6);
console.log('the all Addition is: ', forReturnBtn_4);

/*----------------step-5: No parameter Arrow Function -----------*/ 
const getPi= () => 3.1416;

// call function
const forReturnBtn_5= getPi();
console.log('The pi value is : ', forReturnBtn_5);


/*----------------step-6: One parameter Arrow Function -----------*/ 
const doubleIt= (num) => num * 2;
// call function
const forReturnBtn_6= doubleIt(9)
console.log('The Result is: ', forReturnBtn_6);

/*----------------step-7: One parameter Simple Version -----------*/
const fiveTimes= num => num * 5;
// call function 
const forReturnBtn_7= fiveTimes(3); 
console.log('the fiveTimes is: ', forReturnBtn_7)

/*----------------step-8: multilines Arrow Function -----------*/
// if you want to return something use the return 
const doMath= (x, y, z) => {
    const firstSum= x + y;
    const secondSum= y + z;
    const multiplayResult= firstSum * secondSum;
    const divisionResult= multiplayResult /2;
    return divisionResult;
}

// call function
const forReturnBtn_8= doMath(3, 5, 7);
console.log('The multiLInes Arrow Function Resut is: ', forReturnBtn_8);