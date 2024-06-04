// IIFE -> Immediately Invoked Function Expressions. 
// Usage
// 1) To call the functions immediately
// 2) To not let it pollute from the global variables.


//They work with both arrow functions as well as the normal funnctions.

//IIfe does not know where to stop so a ; is required.

//With function name (Normal Function)

(function display(name){
	console.log(`Hello ${name}`)
}) ("Drashti");


//Without function name(Arrow Function)

((name)=>{
	console.log(`Hello ${name}`)
})("Parth") //also known as executor