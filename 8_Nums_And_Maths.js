//How to declare a variable as Number with sureity.

let age = new Number(18)
console.log(age)

//Number Functions
let num=12345
console.log(num.toString().length)//Converts integer to string.

console.log(num.toFixed(2))// Decimal after digits.

console.log(num.toPrecision(3))//How much dgitis do you want

let amount=10000
console.log(amount.toLocaleString("en-IN"))//Add commas according to Indian Currency.

//Math Functions
console.log(Math.abs(-4))//Sets to a positive number.
console.log(Math.round(4.6))//Rounds the number according to decimal.
console.log(Math.ceil(4.6))//Rounds to the highest value.
console.log(Math.floor(4.6))//Rounds to the lowest value.
console.log(Math.min(1,2,3,4))//Gives minimum value.
console.log(Math.max(1,2,3,4))//Gives maximum value.

//Random Function - Provides values between 0 and 1 only.

console.log(Math.floor(Math.random()*10)+1)

//Between a range
let min =10
let max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)
/* Floor is used for getting an absolute integer number.
   +1 is used so the maximum value can come as well
   min is used to vstart from the minimum value
   max-min+1 is used to run until max number*/
   

