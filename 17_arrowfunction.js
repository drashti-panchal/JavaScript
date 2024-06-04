//this in object

let details ={
	username:"Drashti",
	age:20,
	greeting : function(){

		console.log(`Hello ${this.username}`);
		console.log(this)

	}

}

console.log(details.greeting());
console.log(this) // in node it gives {} and in browser it gives window functions.

//this is function

//Normal Functions can use this keyword
function display () {
	username="Drashti"
	console.log(this.username)  
}
display()

//Arrow Functions cannot use this keyword
let displayTwo = ()=> {

	username="Drashti"
	console.log(this.username)  

}
displayTwo()

//Explicit return in arrow function.(Mentioning the return statement)
let add = (num1,num2)=> {
	return num1+num2
}

console.log(add(5,7))

//Implicit return in arrow function.(Without mentioning the return statement)
let subtract = (num1,num2)=> num1-num2 // or you can use (num1-num2)
console.log(subtract(5,7))

//For objects

let detail = ()=> ({name: "Drashti"})
console.log(detail())






