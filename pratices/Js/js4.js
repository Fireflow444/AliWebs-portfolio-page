console.log("\n\t\t\t***Factorial calcualtor***");
falutcalculator();
function falutcalculator(){
let a=12;
let b=2;
let o="/";
 let result=calculator(a,b,o);
 console.log("\t"+a+" "+o+" "+b+" = "+result);
}

function calculator(a,b,o){
// 10 percent faluting 
let percent=Math.random()*12;
let expaer=Math.floor(percent);
// console.log(expaer)
let oper;
// divide
if(o=="/"){
// let div="/";
oper=divide(a,b);
}
// multipile
else if(o=="*"){
// let multi="*";
	// console.log(a)
oper=mul(a,b);
}
// subtract
else if(o=="-"){
oper=sub(a,b);
}
// add
else if(o=="+"){
oper=add(a,b);
}
if(expaer>9){
let per=Math.random()*4;
let exper=Math.floor(per);
	oper+=exper;
}

return oper;
}//fucntion close


function add(a,b){
return a+b;
}
function sub(a,b){
return a-b;
}
function mul(a,b){
return a*b;
}
function divide(a,b){
return a/b;
}

