//FOR OF LOOP

//Mainly focuses on the value and object does not work on it.

//With array

let fruits=["Apple","Banana","Mango"]

for(const fruit of fruits){
	console.log(fruit)
}

//With Map
const map = new Map()
map.set('IN','India')
map.set('BG','Belgium')
map.set('USA','United States of America')

//Printing keys
for (const key of map){
	console.log(key)
}

//Printing values
for(const [key,value] of map){
	console.log(value)
}

//Printing key and value
for(const [key,value] of map){
	console.log(`${key}=${value}`)
}



// FOR-In loop

//For object

//Mainly focuses on index and doees not works on map

let details ={
	name:"Drashti",
	age:"20"
}

//for key
for (const detail in details){
	console.log(detail)
}
//for value
for(const detail in details){
	console.log(details[detail])
}
//for key and value
for(const detail in details){
	console.log(detail,":",details[detail])
}

//For array
for(const fruit in fruits){
	console.log(fruits[fruit])
}

//For each loop
//Most prominently used

let marks=[1,2,3,4,5]

marks.forEach((mark)=>{

	console.log(mark)

})

const myCoding =[
	{
		languageName: "javascript",
		languageFileName: "js"
	},

	{
		languageName: "java",
		languageFileName: "java"
	},

	{
		languageName: "python",
       		 languageFileName: "py"
	}
]

myCoding.forEach((item)=>{
	console.log(item.languageName);
})




