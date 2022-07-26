//strings, numbers, boolean, null, undefined,  symbols

//numbers
const age = 30;
console.log(age);

//string

const fullname = "sushant";
console.log(fullname);

//boolean

const isdrunk = true;
console.log(isdrunk);

//null
const x = null;
console.log(x);

//undefined
const y = undefined;
let z;

console.log(typeof age);
console.log(typeof isdrunk);
console.log(typeof z)


//concatenation
const firstname = "sushant";
const cellnumber = "9844889650"

console.log("people call me" +  firstname  + "and they contact me on" +  cellnumber );

//template 
console.log(`people call me ${firstname}and they can contact me on ${cellnumber}`)
//OR
const hello = `they know me as ${firstname} and contact me on ${cellnumber}`
console.log(hello);

//calculate length of a string 

const s = "hello world";
console.log(s.length);

//method or function

const a = "hello world";
console.log(a.toUpperCase());

// substring 

const b = "hello world";
console.log(b.substring(0,6));
console.log((a.toUpperCase()).substring(0,7));

//split 

const c = "aws, azure, gcp, oracle"
console.log(c. split(", "));

