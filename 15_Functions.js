function addTwoNumbers(num1,num2){
	return num1 + num2;
}

// addTwoNumbers -> Reference
console.log(addTwoNumbers(7,8))

function loggedIn(username){
	if(!username){
		console.log("Please enter a username")
		return
	}
	console.log( `${username} is logged In.`)
}

loggedIn("Drashti")
//Not sprecified -> Undefined
//" "-> Nothing will print in that space

//Rest operator
//Rest and spread operator are the same but varies where it is used.

function addCartPrice(...items){
	console.log(items)

}
addCartPrice(200,200,300,400)

//Another case

function addCartPriceTwo(val1,val2,...items){
	console.log(items)

}
addCartPriceTwo(200,200,300,400)

// Passing object to a function

// 1)
let user ={
	name: "Drashti",
	age:20
}

function addUser(object){
	console.log(`Hello ${object.name} you are ${object.age} years old.`)

}

addUser(user)

// 2)

function addUser2(object){
	console.log(`Hello ${object.name} you are ${object.age} years old.`)

}

addUser2({
	name: "Parth",
	age:24
})

//Same with Array
// 1)

let fruits=["Apple", "Orange", "Banana"]

function displayFruits(array){

	console.log(array[0])

}
displayFruits(fruits)

// 2)

function displayFruits2(array){

	console.log(array[0])

}
displayFruits2(["Apple", "Orange", "Banana"])





