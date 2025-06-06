let date = new Date()//type -> object
console.log(date)//Generates current date
console.log(date.toString())//Includes everything from day date and standard time
console.log(date.toLocaleString())//Current date,month,year with time in hours,minutes,seconds
console.log(date.toLocaleDateString())//Current date,month,year
console.log(date.toLocaleTimeString())//Time in hours,minutes,seconds
console.log(date.toTimeString())//All according to gmt
console.log(date.toUTCString())
console.log(date.toJSON())

//Creating own date

let createdDate = new Date(2023,0,3,5,3,10)
console.log(createdDate)
console.log(createdDate.toString())
console.log(createdDate.toLocaleString())

//Time
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(createdDate.getTime())
console.log(Math.floor(Date.now()/1000))// converts milliseconds to seconds

let newDate = new Date()
console.log(newDate.getDate())
console.log(newDate.getMonth()+1)
console.log(newDate.getTime())
console.log(newDate.getFullYear())
console.log(newDate.toLocaleString())

newDate.toLocaleString('default',{
	weekday:"long"
})
console.log(newDate.toLocaleString())

