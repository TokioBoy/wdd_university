// console.log('hello world');

let color = 'red';

// console.log(color);

color = 12;

let b = 33;

// console.log(color + b);

function sayHello(n) {
    let greetings = 'Hello';
    // console.log(greetings)
    console.log(greetings, n);
}

let name1 = 'Lisa'
// sayHello('Vlad');
// sayHello('Miku');
// sayHello(name1);

function calculate(a, b, func){
    let result = func(a , b);
    return result;
}

let calculate2 = function(a,b){
    let result = a + b;
    return result;
}

let calculate3 = (a, b) => {
    let result = a + b;
    return result;
}
let x = calculate(14343,30234, (a , b) => {
    return a + b;
});
// console.log(x);
// x = calculate("Mmmmmmm","Vvvvvvv");
// console.log(x);



let colours = ['red','green','blue'];

let person = {
firstName: 'Miku',
lastName:"Hatsune",
age: 16,
sign(){
    console.log(this.firstName,'singing')
}};


// person.sign();

// console.log(person.firstName);



// console.log(colours[0]);
// console.log(colours);

for(const col of colours){
    // console.log(col);
}

if (b == 32) {
//     console.log("it is true");   
} else {
//     console.log("it is false")
}

function findColor(arr,col){
for (const col of arr){
    if(col == 'green'){
        return true;
    }
}
return false;
}


if (findColor(colours, 'green')){
    // console.log("we find green")
} else {
    // console.log("No green here")
}






let numbers = [12, 3232,765,2456,675,3346,2356,43356,221,1];

let biggest = 0;

for (const n of numbers){
    if (n > biggest) {
        biggest = n;
    }
}

console.log(biggest);