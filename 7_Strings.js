//How to write a string.Also known as String interpolation.
let name ="Drashti"
let age=20
console.log(`My name is ${name} and i am ${age} years old.`)

//Another way of initializing String.
let weather = new String('Rainy')
console.log(weather)

//String Functions.
console.log(name[0])//Indexing
console.log(name.length)//Finding length
console.log(name.indexOf('t'))//Finding where the element is located.
console.log(name.charAt(0))//what character is at a particular index.

//Substring
let name2="Drashti Panchal"
let surname=name2.substring(8)
console.log(surname)

//Slice
const anotherString = name.slice(-6,4)
console.log(anotherString);

//Only difference between substring and slice is substring cant take negative values.

let details ="      It is good   "
console.log(details)
console.log(details.trim())//Removes unwanted space

//Replace
let url ="http://drashti%20panchal.com"
console.log(url.replace("%20","-"))

//Includes
console.log(url.includes("drashti"))

//Split
let flavour ="Spicy-Medium-Sweet"
console.log(flavour.split("-"))
