function myName(name){
    console.log(name);
}


function sum(a , b){
    return a + b;
}


const printMyName = name => {
    console.log(name);
}

//Must use () if >1< parameters
const multiply = (num1, num2) => {
    return num1 * num2;
}


const add = (num1, num2) => {
    console.log(num1 + num2);
}

myName('Alex');

printMyName('Maya');

add(6, 5);

console.log(sum(2,5));

console.log(multiply(2,5));