if(age > 18){
Text="you are allowed to enter the club";
}else if(age > 15){
Text="you are  allowed to see  the club";
}else{
Text="you are not allowed to enter the club";
}
condition ? expression1 : expression2
age > 18 ? Text="you are allowed to enter the club" : Text="you are not allowed to enter the club";
switch(age){
case 18:
    Text="you are allowed  to move into ur next phase";
    break;
    case 15:
        Text="your life never reach the age"
        break;
default:
    Text="go play with sand ";
}

function addition(a,b){
    console.log(a+b);
}
addition(5,10);

function subtraction(a,b){
    console.log(a-b);
}
subtraction(10,5);

function module(a,b){
    console.log(a%b);
}
module(10,5);

function multiplication(a,b){
    console.log(a*b);
}
multiplication(5,10);

function division(a,b){
    console.log(a/b);
}
division(10,5);

function returnstudentgrade(score){
    if(100>=score && score >=85){
        console.log("a")
    }
    else if(score>70){
        console.log("b")
    }
    else if(score>60){
        console.log("c")
   }
   else if(score>50){
    console.log("d")
   }
   else if(score>40){
    console.log("e")
   }
   else if(score>30){
    console.log("f")
   }
}  
    returnstudentgrade(90);
    returnstudentgrade(75);
    returnstudentgrade(65);
    returnstudentgrade(55);
    returnstudentgrade(45);
    returnstudentgrade(35);

function average(a,b,c,d,e,f,g,h,i,j){
    console.log((a+b+c+d+e+f+g+h+i+j)/10);
}
let mark=average(10,20,30,40,50,60,70,80,90,100);
console.log(mark);

//class-Work//
1.//write a function that accepts 3 numbers as parameter and returns the largest of the three number//
//solution//
function largest(a,b,c){
    if(a > b && a > c){
        console.log(a);
    } else if(b > c){
        console.log(b);
    } else {
        console.log(c);
    }
}
console.log(largest(11,20,10));

2.//write a fucntion that accepts a number as a parameter and returns true if the number is even ,false otherwise//
//solution//
function isEven(number){
    console.log(number % 2 === 0);
}
console.log(isEven(10));
console.log(isEven(15));

3.//write a function that accepts a number and returns the square and cube of that number//
//solution//
function squareAndCube(number){
    console.log("square: " + number*number);
    console.log("cube: " + number*number*number);
}
console.log(squareAndCube(5));

4.//write a function that accepts the age of a random people and returns a string indicating whether the person is a child(0-12), teenager(13-19), adult(20-64) or senior(65+) and call the function with different ages to test it//
//solution//
function ageLevel(age){
    if(age >= 0 && age <= 12){
        console.log("child");
    } else if(age >= 13 && age <= 19){
        console.log("teenager");
    } else if(age >= 20 && age <= 64){
        console.log("adult");
    } else {
        console.log("senior");
    }
}
ageLevel(5);
ageLevel(15);
ageLevel(30);
ageLevel(70);

5.//write a function to find the mean of 5 numbers//
//solution//
function mean(a,b,c,d,e){
    console.log((a+b+c+d+e)/5);
}
 console.log(mean(10,20,30,40,50));
 
 function showmemessage(){
document.getElementById("press").innerText="Yoo ,Welcome to igboigbo land"
 }

 
      