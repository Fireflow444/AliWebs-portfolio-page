 {
 	let click=0;
document.querySelector("svg").addEventListener("click", function(){
  // click=1;
  document.getElementById("toggle").checked =
  !document.getElementById("toggle").checked;
if(click==0){
document.querySelector(".menu-bar").style.left="0px";
 click=1;
}
else{
document.querySelector(".menu-bar").style.left="-300px";
 click=0;
}
// click=1;
});
}

function func(){	// alert boom practice
	alert("you can use this web")
	console.log("code running....")

// prompt boom practice
	var num=prompt("Enter your number:")
	console.log("Your number is:"+num)

// confirm boom practice
	var con=confirm("You can use this page");
	if(con==true){
alert("screen is running")
	}
	else{
alert("screen is not running")		
	}


var title=confirm(`You can your change web title into "js practice":`);
if(title==true){
document.title="title changed";
}
else{
// document.title=;
}


var bgColor=confirm(`You can your change web color:`);
if(bgColor==true){
document.body.style.backgroundColor="green"
}
else{
	console.log("Not color changed^^^")
// document.title=;
}

}