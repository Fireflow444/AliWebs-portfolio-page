console.log("\n\t\t..hey this is class 5 in javascript..");
function l1(){
	let n="hey i am string";
console.log("n 1 value:"+n[0]);
console.log("n 2 value:"+n[1]);
console.log("n 3 value:"+n[2]);  //using string like as array
}
// l1()

function l2(){
console.log("\n\t\t**string length leasson**")
let string="ALiAhmad";
console.log(string.length); // .lenght find the lenght of string
}
// l2();

function l3(){
console.log("\n\t\t**template literals leasson**")

let name="ALiAhmad",wrtname="Jack",subject="Computer";

//mest string
console.log("Hy "+name+"! your name is nice ,what your study.\nMy name od  is "+wrtname+" .\nOh "+subject+"! that a great subject what you study on there.?\n\n");  
//you will use double quote on it 
console.log(`Hy "${name}"! your name is nice ,what your study.\nMy name od  is "${wrtname}".\nOh "${subject}"! that a great subject what you study on there.?`);  

}
// l3();

function l4(){

let a="AliAhmad";
let b="ABCDEF";
let c="a12345";

console.log(a.toUpperCase())  // toUpperCase() is basically a function that change lowercase into Capitals     
console.log(b.toUpperCase())
console.log(a.toLowerCase()) 
console.log(b.toLowerCase())  // toLowerCase() is basically a function that change Capitals into lowercase   

console.log(c.slice(1,5)) //slice baiscally slice the string
// slice first number is starting point of slicing and they include in slice and next one is range of slice that we cut the string and this is not allow or include
console.log(c.slice(1)) 

console.log(c.replace("a","0")) //replace function is basically replace the selected part of string those are select on the first double quotes into the next quotes string
 console.log(a.replace("A","a"))  //replace fucntion is find the first find index that are include in string this will be change until next are include or not should not matter first if high priaorite

console.log(a.concat(b)) //concat function add the select string on the bracket string
console.log(a.concat(",",b))
a="  ali ";
console.log(`Without string:"${a}"`);
console.log(a.trim());  //trim function use to remove the whitespace on string

console.log(a.indexOf("i")) //indexOf() if use to find the put string exact index on main string

console.log(a.toUpperCase().trim().indexOf("i")) //we use one string in multiple functions

console.log(a.charAt(2))//charAt find the character as the main string on  this puttedindex

console.log(`b end with "F" ans is:`+b.endsWith("F")) 
console.log(`b end with "6" ans is:`+b.endsWith("6")) //endswith check the string last they match with the putteed string
console.log(`b start with "A" ans is:`+b.startsWith("A")) 
console.log(`b start with "6" ans is:`+b.startsWith("6")) ///startsWidth check reciprocal the endsWidth function
}
// l4()

// practice 
function prac(){
let


}


