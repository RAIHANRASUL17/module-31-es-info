/*-----------step-1----------------*/ 
// function add(first, second){
//     const total= first + second;
//     console.logf(total);
// }

// // call function
// add()


// /*-----------step-2----------------*/ 
// function add(first, second){
//     const total= first + second;
//     return total;
// }

// // call function
// const forReturnBtn= add(10, 20)
// console.log('The total is: ',forReturnBtn);

// /*-----------step-3----------------*/ 
// function add(first, second){
//     const total= first + second;
//     return total;
// }

// // call function
// const forReturnBtn= add()
// console.log('The total is: ',forReturnBtn);

// /*-----------step-4----------------*/ 
// function add(first, second){

//     console.log(first, second)

//     const total= first + second;
//     return total;
// }

// // call function
// const forReturnBtn= add()
// console.log('The total is: ',forReturnBtn);

// /*-----------step-5----------------*/ 
// function add(first, second){
    
//     console.log("checking the first and secon values", first, second)

//     const total= first + second;
//     return total;
// }



// // call function
// const forReturnBtn= add(10)
// console.log('The total is: ',forReturnBtn);

// /*-----------step-6----------------*/ 
// function add(first, second){
    
//     console.log("checking the first and secon values", first, second)

//     /*---------- condition apply ----------*/ 
//     if(second === undefined){
//        second = 0;
//     }
//     /*---------- condition apply ----------*/ 

//     const total= first + second;
//     return total;
// }

// // call function
// const forReturnBtn= add(10)
// console.log('The total is: ',forReturnBtn);


// /*-----------step-7----------------*/ 
// function add(first, second){
    
//     console.log("checking the first and secon values", first, second)

//     /*---------- condition apply ----------*/ 
//     // if(second === undefined){
//     //     second = 0;
//     // }

//     second= second || 0;
//     /*---------- condition apply ----------*/ 

//     const total= first + second;
//     return total;
// }

// // call function
// const forReturnBtn= add(10)
// console.log('The total is: ',forReturnBtn);


// /*-----------step-8 (ES-6 part) ----------------*/ 
// function add(first, second= 0){
//     const total= first + second;
//     return total;
// }

// // call function
// const forReturnBtn= add(10,20)
// console.log('The total is: ',forReturnBtn);



// /*-----------step-9 (ES-6 part) ----------------*/ 
// function add(first, second= 0){
//     const total= first + second;
//     return total;
// }

// // call function
// const forReturnBtn= add(10)
// console.log('The total is: ',forReturnBtn);

// /*-----------step-10 (ES-6 part) ----------------*/ 
// function add(first, second= 36){
//     const total= first + second;
//     return total;
// }

// // call function
// const forReturnBtn= add(10)
// console.log('The total is: ',forReturnBtn);

// /*-----------step-11 (ES-6 part) ----------------*/ 
// function add(first, second= 36){
//     const total= first + second;
//     return total;
// }

// // call function
// const forReturnBtn= add(10, 0)
// console.log('The total is: ',forReturnBtn);

// /*-----------step-12 (ES-6 part) ----------------*/ 
// function add(first= 0, second= 36){
//     const total= first + second;
//     return total;
// }

// // call function
// const forReturnBtn= add(10, 0)
// console.log('The total is: ',forReturnBtn);


// /*-----------step-13 (ES-6 part) ----------------*/ 
// function add(first= 0, second= 0){
//     const total= first + second;
//     return total;
// }

// // call function
// const forReturnBtn= add()
// console.log('The total is: ',forReturnBtn);



/*-----------step-14 (ES-6 part) ----------------*/
function fullName(first, last='chowdury'){
    const name= first + ' ' + last;
    return name;
}

// call function
const forReturnBtn= fullName('Gelam');
console.log('The name is: ', forReturnBtn);


