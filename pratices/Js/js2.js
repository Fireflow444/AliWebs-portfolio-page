console.log("Hi! we are learing js variable today.")

// var variable
var a=3;  // a=3 mean a equal to 3
var b=1;  // a=1 mean a equal to 1 
console.log(a+b) //this statement is plus the a,b values means 3+1 = 4ans.
console.log(a+b+4) //this statement is plus every number in a,b values result 3+1+4 = 8ans.

// main rule of naming a variable step are given below:
/*
1.Variable name always starts with alphabets or underscore in js.
2.We cannot use space in variable name.
3.Cannot use special symbol ir numbers starting in variable name without underscore for example: @ / - ! + .
4.We use a long vaiable name ,use capitable letter to sperate a var name for example:
var blockaReasever=1;
5.javascript is basically casesensitive languague means it can prefer exact keyword aur varibale
for example : boxa,boxA is deferent in javascript
*/



// identifying a variable data type 
        // let upose
var ab=45;     // this is number
var st="how are you";  //this is string
var ft=12.4;   //this is float


//then use display this datatype on console using with keyword 'typeof' 
// this is basically use in checking a vaiable type this is easy understandable in debugging
console.log(typeof ab,typeof st,typeof ft)

// type of most common variable in javascript are as follow:
/*
1.const.     (this value cannot changed)
2.let.   ( this value is only use in insert code block)
3.var.  (this is simple like box value is enter and return it)
4.boolean. ()
*/

// Const
const fixv=12;      //const value cannot changed 
//fixv=5;         //this action taking error through the compiler 
// console.log("fix value "+fixv)  




//var and let defference
var a=56;   //var value is globaly decalred
{
let a=6;
console.log(a+":this is let vlaue") //this a value is 6 
}
console.log(a+":this is var vlaue")  //this a value is 56

// If we use var in block and global positon we see sequence changing display value
var a=56;   //var value is globaly decalred
{
var a=6;
console.log("this is var vlaue:"+a) //this a value is 6 
}
console.log("this is var vlaue:"+a)  //this a value is 6
