//single for loop

for(let i=1;i<=10;i++){
	console.log(i);
}

//Nested For Loop

for(let i=1;i<=10;i++){
	console.log(`Outer Loop: ${i}`);
	for(let j=1;j<=10;j++){
		console.log(`Inner Loop: ${j}`);

	}
}

//Printing Array

let fruits=["Apple", "Orange", "Banana"]

for(let i=0;i<fruits.length;i++){
	console.log(fruits[i]);
}

// Break statement

for(let i=1;i<=10;i++){
	if(i==5){
		console.log("hehe")
		break
	}
	console.log(i);
}

//Continue statement
for(let i=1;i<=10;i++){
	if(i==5){
		console.log("hehe")
		continue
	}
	console.log(i);
}


//While loop

let i=1
while(i<=10){
	console.log(i);
	i=i+2
}

//Do-while loop


let score=11
do{
	console.log(score)
	score++;

}while(score<=10);