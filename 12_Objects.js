//Object constructor->singleton is used.
//Object Literal -> no singleton is used.

//Creating object literal.

let details ={
	name:"Drashti",
	age:20,
	address:"Mira Road",
	email: "james@google.com"
}

//Two ways of Accessing object literal.
// 1) Using indexing.
console.log(details.name)

//2) Better Option.
console.log(details["name"]) //Everything can be accessed.

//Changing the elements.
details.name = "Parth"
console.log(details.name)
// Object.freeze(details) 
details.name = "Drashti"
console.log(details.name)

//Also can declare a function.

details.greeting = function(){
	console.log("Hello JS user");
    }
details.greetingTwo = function(){
	console.log(`Hello JS user, ${this.name}`);
    }
    
    console.log(details.greeting());
    console.log(details.greetingTwo());
