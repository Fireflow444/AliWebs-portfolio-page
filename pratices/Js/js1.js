	// alert boom practice
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

