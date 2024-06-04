let a =100
var b=30;

if(true){
	let a=10;
	var b =20;
	console.log("Inner:",a)
	console.log("Inner:",b)
}

console.log(a)
console.log(b)

//Var continues to print 20 which is in local scope no matter what and let prints properly.

function one(){
	const username = "Drashti"
    
	function two(){
	    const website = "youtube"
	    console.log(username); // will work as it can take value from the parent scope
	}
	// console.log(website); //wont work as it is in the child scope
    
	 two()
    
    }
    
// Said that the children can ask icecream from the the parents but parents cant.

if (true) {
	const username = "Drashti"
	if (username === "Drashti") {
	    const website = " youtube"
	    // console.log(username + website);//accessible
	}
	// console.log(website);//wont be accessible
    }
    
    // console.log(username); //wont be accessible


//Different scopes

// 1)

one()
function one(){
	console.log("hello world")
}
//THe output is hello world

// 2)
// From Variable

two()
let two = function(){
	console.log("hello world")
}
//Cannot access 'two' before initialization
    