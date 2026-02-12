console.log("js3 starting")
//fucntion
function response(name){
let repon="Nice name "+name+" what is your college name "+name ;
let repons=name+" you look like handsome" ;
let arr=[repon,repons];
return arr;
}

function nice(){
let name="jameel";

let responsen=response(name);
for(let i=0;i<responsen.length;i++){
	console.log(responsen[i]);
}
// let ans=document.querySelector(".ans");
// ans.innerHTML=`${responsen} <br> `;
	}

 function CalcualtorMachine(){
//block code
console.log("\n\n\t\t\t\t\t***calculator*** \n")
let num1=7;
let num2=40;
let o="-";
 let result=calculator(num1,num2,o);
 console.log("\t"+num1+" "+o+" "+num2+" = "+result);
}
function calculator(a,b,o){
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

function faultyCalculator(){
//block
	let a=90;
	let b=2;
	faulty(a,b);
}

function faulty(a,b){
	// block code
	// console.log(b)
let total=sum1(a,b);
console.log(total);
console.log("\t\t\nThe total sum of "+a+","+b+" is :"+total);
}

function sum1(a,b,c=2){
let oper;
if(a>15){
oper=a+b+c;
}
else{
	oper=a+b;
}
// console.log(c)
// console.log(oper)
return oper;
}


function cInvoFaultyAdder(){
//block code
let a=45;
let b=434;
cInvocation(a,b)
}

function cInvocation(a,b){
	// block code
let total=sum2(a,b,4);
console.log("\t\t\nThe total sum of "+a+","+b+" is :"+total);
}
function sum2(a,b,c){
let oper=a;
if(a>15){
oper=a+b+c;
}
else{
	oper=a+b;
}
// console.log(oper)
return oper;
}


function arrowEx(){
//arrow function 

let arrow=()=>{
//for Loop 
const city=["Lahore","Gujranwala","karachi","Sialkot"];
console.log(city)
for(let a=0;a<city.length;a++){
let ckey=city[a];
console.log(ckey);
ask(ckey);
}
console.log(arrow)

};//arorw function close
}
function ask(key){
let ans;
if(key=="Lahore"){
 ans=lhr();
}
else if(key=="Gujranwala"){
ans=guj();
}
else if(key=="karachi"){
ans=krh();
}
else if(key=="Sialkot"){
ans=skl();
}
return ans;
}

function lhr(){
console.log("\t\t Lahore is a beautiful and the largest city in punjab.\n\t\t This historical places are very interested \n\t\t they will famous to there street foods like ganii ki paie ");
}

function guj(){
console.log("\t\t gujranwala is a beautiful city in over punjab.\n\t\t This will famous on steel bussniess markets\n\t\t they own a large market of iron or metals that gave a 10% GDB patnership of pakistani goverment. this will extremly famous of there tredtional food like fish,paiee,dal_chawal and many other foods.");
}

function krh(){
console.log("\t\tkarachi is a very peaceful city of pakistan and \n\t\t this is so large city, karachi is a capital of pakistan,\n\t\t this city will gave a large source of exportation about there sea side. this so futuristic city. ");
}
function skl(){
console.log("\t\tSialkot is a own dominance city on pubjab,they will partisipate \n\t\t on large network of sports international market.i can go it this is very amazing city. ");
}


arrowEx()