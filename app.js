console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");
let a = 20,
  b = 4;

let add = a + b; //24
let minus = a - b; //16
let multiply = a * b; //80
let divide = a / b; //5

console.log(add);
console.log(minus);
console.log(multiply);
console.log(divide);

// Exercise 2
console.log("EXERCISE 2:\n==========\n");

a = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";

console.log("a + str:", a + str);
console.log("a + str2:", a + str2);
console.log("a + isPresent:", a + isPresent);
console.log("a + firstName:", a + firstName);
console.log("a + lastName:", a + lastName);

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

a = 5;
str = "5";
str2 = "five";
isPresent = false;
firstName = "Robin";
lastName = "Williams";

console.log("a == str:", a == str);
console.log("a === str2:", a === str2);
console.log("!isPresent:", !isPresent);
console.log("'five' == str2 && >= str:", "five" == str2 && a >= str);
console.log("!isPresent || isPresent:", !isPresent || isPresent);
console.log("0 == false:", 0 == false);
console.log("0 === false:", 0 === false);
console.log("0 != false:", 0 != false);
console.log("0 !== false:", 0 !== false);
