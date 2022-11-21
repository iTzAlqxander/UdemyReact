//Primitive Type
const number = 1;
const num2 = number;
console.log(num2); 
// 1

//Reference Type
const person = {
    name: 'Max'
};
const secondPerson = person;
person.name = 'Manu';
console.log(secondPerson); 
//[object Object] {
//     name: "Manu"
//   }
