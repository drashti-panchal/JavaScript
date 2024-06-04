//This is done so we do not have to use the dot operator multiple times.

let user ={
	name:"Drashti",
	age:20,
	hobbies:["Sleeping","Drawing","Cooking"]
}

console.log(user.hobbies)//Instead of doing this multiple times we can simply do this:

//Destructuring an object.
const {hobbies:h}=user

console.log(h)