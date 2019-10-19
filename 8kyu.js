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
console.log('+',4,7);