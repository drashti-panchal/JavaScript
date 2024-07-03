console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);


// It gives true because comparison and equality operator works differently. Comparison 
// operator converts null to 0 whereas equality operator doesnt.
console.log(null > 0); //False
console.log(null == 0);//False
console.log(null >= 0);//True

console.log(undefined == 0);//False
console.log(undefined > 0);//False
console.log(undefined < 0);//False

// === 

console.log("2" === 2);//False