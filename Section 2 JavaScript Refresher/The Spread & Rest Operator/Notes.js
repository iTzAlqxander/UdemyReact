// ...

//Spread - Used to split up array elements OR object properties
//Const newArray = [...oldArray, 1, 2]
//Const newObject = {...oldObject, newProp:5}

//Rest - Used to merge a list of function arguments into an array
//function sortArgs(...args){
//     return args.sort()
// }

// const numbers = [1,2,3];
// const newNumbers = [...numbers,4];
// console.log(newNumbers);
//RETURNS - [1, 2, 3, 4]


// const person = {
//     name: 'Max'
//   };
//   const newPerson = {
//     ...person,
//     age: 28
//   }
//   console.log(newPerson);
//RETURNS - [object Object] {
//   age: 28,
//   name: "Max"
// }


// const filter = (...args) => {
//     return args.filter(el => el === 1);
//   }
//   console.log(filter(1,2,3));
//RETURNS - [1]