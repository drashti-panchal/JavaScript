//Concatenation of Arrays.
//1st way (Using concat function)

let fruits=["Apple", "Banana", "Mandarin"]
let vegetables=["Tomato","Brinjal","Cucumber"]

let grocery = fruits.concat(vegetables)
console.log(grocery)

//2nd Way (Using spread function)

let anotherGrocery = [...fruits, ...vegetables]
console.log(anotherGrocery)

//Separting multiple arrays within arrays.

let num =[1,2,3,4,[5,6,7,8],9,[10,11,12,[13,14],15]]

// let newNum = num.flat(Infinity)
// console.log(newNum)

let newNum = num.flat(1)
console.log(newNum)

//isArray fucntion
console.log(Array.isArray(newNum))

//from function
console.log(Array.from("Drashti"))

//of function
let marks1=100
let marks2=200
let marks3=300

console.log(Array.of(marks1,marks2,marks3))


