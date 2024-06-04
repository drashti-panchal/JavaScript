//let user1 = new Object() => Object Constructor.

let tinderuser ={} // Object Literal

tinderuser.name="Parth"
tinderuser.age=24

let otherUser ={
	userfullname:{
		firstname:"Drashti",
		lastname:"Panchal"
	}
}

console.log(otherUser.userfullname.lastname) 

//Merging different objects.

// 1)

let obj1={1:"a",2:"b"}
let obj2={3:"c",4:"d"}
let obj3={5:"e",6:"f"}

// let obj4={obj1,obj2,obj3}
// console.log(obj4)

// 2) Using assign function

// let obj4 = Object.assign({}, obj1,obj2,obj3)
// console.log(obj4)

// 3) Using spread operator

let obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4)

const users = [
	{
	    id: 1,
	    email: "h@gmail.com"
	},
	{
	    id: 1,
	    email: "h@gmail.com"
	},
	{
	    id: 1,
	    email: "h@gmail.com"
	},
    ]

console.log(users[1].email)

//Object Methods

console.log(Object.keys(otherUser.userfullname))
console.log(Object.values(otherUser.userfullname))
console.log(Object.entries(otherUser.userfullname))
console.log(tinderuser.hasOwnProperty("age"))

