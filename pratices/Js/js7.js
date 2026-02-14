console.log("\n\t\t***Array exercise pracrtice***")

//ex1
function ex1(){
	let arr=[]; 
for(let i=0;i<5;i++){
let inp=prompt('Enter number'+(i+1));
arr.push(inp);
}

console.log(arr);
}
// ex1()

//ex2
function ex2(){
let arr=[1,2,3,4,5]
arr.reverse();
let narr=arr.reduce((e1,e2)=>{
	return e1+e2;
});
console.log(narr)
}
// ex2()

//ex3
function ex3(){
let arr=[1,20,33,400,500,560,342,780];
arr.sort();
let narr=arr.filter((e)=>{
	
	return e%10==0;
});
console.log(narr)
}
// ex3()

//ex4
function ex4(){
let arr=[1,2,3,4,5,6];

let narr=arr.map((e)=>{
	
	return e**e;
});
console.log(narr)
}
// ex4()


//ex5
function ex5(){
let arr=[1,2,3,4,5,6];

let narr=arr.reduce((e1,e2)=>{	
	return e1*e2;
});
console.log(narr)
}
ex5()






