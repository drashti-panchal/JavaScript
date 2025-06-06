//IF statement
let num=1
if(num==1){
	console.log("Hello")
}

//IF-ELSE statement

let age =18
if(age <=18){
	console.log("You are eligible to vote")

}
else{
	console.log("You are not eligible to vote")

}

//Nested IF-ELSE statement
let balance=550

if(balance <=500){
	console.log("Less than 500")
}
else if(balance <=700){
	console.log("Less than 700")
}
else{
	console.log("Less than 1000")
}

//Relational Operators:- >,<,>=,<=,==,!=,===

//Logical Operators

let gender="Male"
let agelimit=20

if(gender=="Male" && agelimit>=18){
	console.log("You are a man and above 18 years old.")
}
else if(gender=="Female" && agelimit>=18){
	console.log("You are a woman and above 18 years old.")
}
else{
	console.log("Error")
}

if(gender=="Female" || gender=="Male"){
	console.log("You are eligible")
}

//Switch case

let month=3
switch(month){
	case 1:
	console.log("January")
	break
	case 2:
	console.log("February")
	break
	case 3:
	console.log("March")
	break
	case 4:
	console.log("April")
	break
	default:
	console.log("Invalid month")
	break
}


//falsy values

// 0,-0,'',"",false,null,undefined,NaN,Bigint

//Truthy values

//"false","0",'0'," ",{},[],funtion(){}

let value="-0"
if(value){
	console.log("Hello")
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
val1 = null??undefined??10
console.log(val1) // Output: 10

//Ternary Operator

age>=18? console.log("You are above 18") : console.log("You are below 18")





