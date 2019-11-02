/*1.Debugging sayHello function ------------------------------------
  creat a program to greet everyone.
*/

function sayHello1(name) {
    return 'Hello, '+ name
  }
sayHello1("Mr.Spock");


// or ECS6 
function sayHello2(name) {
    return `Hello,  ${name}`;
}
console.log(sayHallo2("Mr.Spock"));

// arrow function
const sayHello3 = name => `Hello, ${name}`;
console.log(sayHello3);


/*2.third Angle of a triangle -------------------------------------
   You are given two angles (in degrees) of a triangle.
   Write a function to return the 3rd.
*/

// my answer
function otherAngle1(a, b) {
  return 180-(a+b);
}

//another answer
const otherAngle2 = (a, b) => 180 - a - b



/*3.third Angle of a triangle ------------------------------------
  Your task is to create a function that does four basic mathematical operations.

  The function should take three arguments - operation(string/char), value1(number), value2(number).
  The function should return result of numbers after applying the chosen operation.
*/

//my answer 
function basicOp(operation, value1, value2){
  if(operation === "+"){
    return value1 + value2;
  } else if(operation === "-"){
    return value1 - value2;
  } else if(operation === "*"){
    return value1 * value2;
  } else if(operation === "/"){
    return value1 / value2;
  }
}

basicOp("+", 4, 7); // 11

// better way
function basicOp(operation, value1, value2)
{
  switch(operation){
   case '+' : return value1 + value2;
   case '-' : return value1 - value2;
   case '*' : return value1 * value2;
   case '/' : return value1 / value2;
}
}
console.log('+', 4, 7);



/*4.If/else syntax debug ----------------------------------------
  Create a function to check if the user is still alive!

  checkAlive/CheckAlive should return true if the player's health is greater than 0 or false if it is 0 or below.

  checkAlive receives one parameter health which will always be a whole number between -10 and 10.
*/

// my answer1
function checkAlive (health) {
  if (health > 0 && health < 11) {
    return true;
  } else if (health <= 0 && health > -11) {
    return false;
  }
}

// my answer2
function checkAlive (health) {
  return (health <= 0) ? false : true
 }
console.log(checkAlive(5))

 
// better answer1
function checkAlive(health) {
  return health > 0;
}

//better answer(arrow function)
const checkAlive = health => health > 0;


/*5.Personalized greeting ----------------------------------------
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message.
*/

// my answer
function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss';
  }
  return 'Hello guest';
}

// better answer
const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`;


/*6.Convert a string to an array ----------------------------------------
// Write a function to split a string and convert it into an array of words.
 For example:
 "Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

// my answer
function stringToArray(string){
 return string.split(' ');
}
stringToArray("Robin Singh")

// other answer
let stringToArray = string => string.split(' ');



/*7.Remove First and Last Character----------------------------------------
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message.
*/

// my answer
function removeChar(str){
 return str.slice(1,str.length-1);
 };
 
// better answer
const removeChar = str => str.slice(1, -1)
// When you supply slice with a negative number it subtracts the number from the string's length.
// ex)"this is a test".slice(-3, -1); //returns "es"

/*8. MakeUpperCase----------------------------------------
// Write function makeUpperCase.
*/

// my answer
function makeUpperCase(str) {
    return str.toUpperCase();
}

// other answer
function makeUpperCase(str) {
  var res = str.toUpperCase();
  return res;
}