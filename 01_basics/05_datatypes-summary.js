// Primitive Datastypes
// 7 types: String, Numbers, Boolean, Null, Undefined, Symbol, BigInt

const name = "Varun" //string
const rollno = 27 //number
const goodmood = true //boolean
const temperature = null //null
let userid; //undefined

const id = Symbol("1234") //symbol
const anotherid = Symbol("1234") //symbol

const bignumber = 99898938293829382938293829382938292382n //bigInt

// console.log(id === anotherid);


// Reference (Non-Primitive)
// Array, Objects, Functions

const heroes = ["captain-america", "spiderman", "antman"]; //array

let myobj = {
name: "varun",
age: 21,
city: "vadodara"
} // objects

// console.log(myobj.name);

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof myfunction);

// Javascript is dynamically typed. Why? Because it doesn't need to be specified. 
// For eg: const score = False. Here we've not described it as boolean but still Javascript recognises it.


