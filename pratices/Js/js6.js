console.log("\n\t\t\t***We are learning about array in javascript***")
//array is a block of storage that hold multiple types or same types of varaibel 
function firstpart(){

// 1.array writen in high level languague like this:
    let arr=[1,2,3,4,5];
// type name indexs

//2.finding a lenght of array 
let list=[1,2,3,4,5,6]
console.log(list.length)//length of array is 6 and display is 6

// 3. indexing on array
let inarr=[1,2,3,4,5,6,7];
console.log(inarr[0]);  // 0 index is in array is :1
console.log(inarr[1]);  // 0 index is in array is :2

//4. assigning value on indexes array
let asarr=[0,1,2,3,"hi",5,false];    
asarr[1]="ali";
console.log(asarr)

//5. Find the value datatype on array
let p=["hh","ff"];
let vcharr=["mom",56,false,null,true,'g',p];
console.log(typeof vcharr[4]);
console.log(typeof vcharr[0]);
console.log(typeof vcharr[2]);
}
function longmethods(){
// a. array convet into string function
	let starr=['a','l','i'];
	console.log(starr.toString());

// b.Insert 'and' like on array 
let jarr=['apple','ball','cat']
console.log(jarr.join(' > '))

//c.poping the array selected indexes
let parr=[1,2,3,4,5,6];
parr.pop();
console.log(parr)

//d. pushing the object ,data on array 
let puarr=[];
puarr.push('ff');
puarr.push('gg');
puarr.push('hh');
puarr.push('dd');
console.log(puarr)

//e.shifting method on array
let sharr=[1,2,3,4];
sharr.shift();
console.log(sharr);

//f.Unshift function
let usharr=[1,2,3,4,5];
console.log(usharr.unshift(6,7))

// g.delete the selected index on array
let dlarr=[1,2,3,4,5];
delete dlarr[2];
console.log(dlarr)

//h. concat merge the arrays to main array
let arr1=[1,3,5,7,11];
let arr2=[2,4,6,8,10];
let mainarr=['ali','ahmad','jameel'];
console.log(mainarr.concat(arr1,arr2).join("| "))

//i.left to tight sorting on array
let sorarr=[1,2,5,4,6,7,3,0];
sorarr.sort().join(',');
sorarr.push(']');
sorarr.unshift('[');
console.log(sorarr.join(' '))

// j.splicing on array
let splcarr=[1,2,3,4,5];
splcarr.splice(2,0,455,67).join(',');
splcarr.splice(2,1,455,67).join(',');
console.log(splcarr)

//k.slicing  an array 
let slarr=[1,2,3,4,5];
let nslarr=slarr.slice(1);
let nnslarr=slarr.slice(2,5);
console.log(slarr);
console.log(nslarr)
console.log(nnslarr)

//l.Reverse the array indexes 
let rvsarr=[1,2,3,4,5,6];
console.log(rvsarr.reverse()) //reverse show aur change the direction of array

let froarr = [1, 2, 3, 4, 5, 'a', 'l', 'i'];

// Call it on the Array constructor, passing your array as an argument
console.log(Array.from(froarr)); 

let obj1={
	"name":"Ahmad",
	"key":"234"
};
obj1=Array.from(Object.entries(obj1));
console.log(obj1)

//call form function bu object
let obj={
	"name":"Ali",
	"key":"124"
};
console.log(Object.values(obj)); 

console.log(Object.keys(obj)); 

console.log(Object.entries(obj)); 

console.log(Array.from(Object.entries(obj)))

}
// longmethods()
function arraylooping(){
let arr=[1,2,3,4,5,6];

//for loop

for (var i =0;i<arr.length; i++) {
	console.log(arr[i])
}

// //for each loop or classical loop
arr.forEach((e,index,arr)=>{
let narr=[e,index,arr];
console.log(narr.join('-'))
});

//map method
let marr=[1,2,3,4,5];

let narr=arr.map((e,i,a)=>{
return e,i,a;
});
console.log(`new map array ${narr.join("_")}`)

 narr=arr.map((e,i,a)=>{
console.log(e+" "+i+" "+a.join("-"))
return e;
});
// console.log(narr)

let nfarr=arr.filter((e)=>{
return e<4;
});

console.log(nfarr)

let reduce=[1,2,3,4,5,6];
let func=(e1,e2)=>{
return e1+e2;
};
let nrarr=reduce.reduce(func);
console.log(nrarr)
}
arraylooping()
