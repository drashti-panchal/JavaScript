//Primitive and non primitive data types:-

//Primitive (7 types) => Number, String ,Boolean, Symbol, BigInt, null, undefined
// Data types are defined on basis how they are stored into the memory.

//Number
let age=14
console.log(typeof age)

//String
let name="Drashti"
console.log(typeof name)

//Boolean 
let isLogged =true
console.log(typeof isLogged)

//Symbol
let id1= Symbol("123")
let id2 = Symbol("123")
console.log(id1==id2)

//BigInt
let num = 123457n
console.log(typeof num)

//null
let a =null
console.log(typeof a)

//undefined
let b=undefined
console.log(typeof b)

// Non Primitive data type(Reference)=>Array,Object,Function

//Array
let anime =["Itachi","Sasuke","Gaara"]
console.log(typeof anime)

//Object
let myobj ={
	name:"Drashti"
}
console.log(typeof myobj)

//Function
let myFunction =function (){
	console.log("Hello World")
}
console.log(typeof myFunction)//=> typically referred as function object as well

