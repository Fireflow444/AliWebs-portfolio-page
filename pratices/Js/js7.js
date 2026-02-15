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
// ex5()


function namegenrater(){
let fstr="";
//declare name
let first_name={fn1:"crazy",fn2:"amazing",fn3:"fire"};
let second_name={sn1:"engine",sn2:"foods",sn3:"garments"};
let third_name={tn1:"bros",tn2:"limited",tn3:"hub"};
     //random key
let ran1=Math.random();
 if(ran1<0.2){
fstr=`${first_name.fn1}-${second_name.sn3}-${third_name.tn1}`;
}

else   if(ran1>0.2 && ran1<0.4){
fstr=`${first_name.fn2}-${second_name.sn3}-${third_name.tn3}`;
}

  else if(ran1>0.4 && ran1 <0.7){
fstr=`${first_name.fn3}-${second_name.sn2}-${third_name.tn1}`;
}
     
 else if(ran1>0.7 && ran1<0.9){
fstr=`${first_name.fn2}-${second_name.sn1}-${third_name.tn3}`;
}
console.log(ran1)




console.log(fstr)

}
// namegenrater()


function factorialcall(){

  let str = "";  // declare first

  let evbtn = document.getElementsByTagName("button")[0];
  let outbox = document.getElementsByTagName("h2")[0];
  let inpbr = document.getElementsByTagName("input")[0];

  inpbr.addEventListener("keydown", (e) => {
    let key = e.key;

    if (key === "Backspace") {
      str = str.slice(0, -1);
    } 
    else if (key.length === 1) {
      str += key;
    }
  });
evbtn.addEventListener("click", () => {
  outbox.style.opacity="0%";
  evbtn.style.animation="bani 3s ease-in-out infinite";
  setTimeout(()=>{
  console.log(str);
  let facstr=facto(str);
  outbox.textContent = facstr;  // phir new value set\
str="";
//effects
outbox.style.opacity="100%";
    evbtn.style.animation="";
  },2000);
});

}
factorialcall();

function facto(num){
let re=1;
if(num==0){
  re="Undefined";  
}
else{
for(let i=1;i<=num;i++){
  re=re*i;
}

}
return re;
}
