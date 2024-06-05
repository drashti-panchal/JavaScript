//For each cant return any value so there are different methods we can use.

// 1) FOR FILTER


let numbers = [1,2,3,4,5,6,7,8,9,10,11,12]
let nums  = numbers.filter((num)=>{
	return num>4
})

console.log(nums)

const books = [
	{ title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
	{ title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
	{ title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
	{ title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
	{ title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
	{ title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
	{ title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
	{ title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
	{ title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
      ];

let choice= books.filter((book)=>{
	return book.genre == 'Science' && book.publish ==2009
})

console.log(choice)

//MAP FUNCTION

let arr = [1,2,3,4,5,6,7,8,9,10]

let a = arr.map((ar)=>{
	return ar+10

})

console.log(a)

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

// REDUCE FUNCTION


const num=[1,2,3]

let n = num.reduce((acc,currval)=>(acc+currval),0)

console.log(n)

const shoppingCart = [
	{
	    itemName: "js course",
	    price: 2999
	},
	{
	    itemName: "py course",
	    price: 999
	},
	{
	    itemName: "mobile dev course",
	    price: 5999
	},
	{
	    itemName: "data science course",
	    price: 12999
	},
    ]

let totalPrice = shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(totalPrice)
