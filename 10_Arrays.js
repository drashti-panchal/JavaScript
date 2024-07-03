//Array is stored in heap memory.

let fruits=["Apple","Banana","Mango"]//Creating an array.
console.log(fruits)

//Another way of creating an array.
let vegetables= new Array("Tomato","Brinjal","Spinach")
console.log(vegetables)

//Adding and removing an element from the end.
let arr=[1,2,3,4,5]
arr.push(6)//adding element.
console.log(arr)
arr.pop()//removing element.
console.log(arr)

//Adding and removing an element from the front.
arr.unshift(0)//adding element.
console.log(arr)
arr.shift()//removing element.
console.log(arr)

//Array Methods
console.log(arr.includes(1))
console.log(arr.indexOf(1))

const newArray = arr.join()
console.log(arr)
console.log(newArray)
console.log(typeof newArray)

//Slice and Splice
//A) Slice - returns a new array and gives one element less from the max value.
let marks =[100,200,150,350,400]
console.log(`Before slicing: ${marks}`)
console.log(`After slicing: ${marks.slice(0,3)}`)
console.log(`Original Array: ${marks}`)

//B) Splice - does changes on the same array and also gives the last element provided.
console.log("\n")
console.log(`Before slicing: ${marks}`)
console.log(`After slicing: ${marks.splice(0,4)}`)
console.log(`Original Array: ${marks}`)











