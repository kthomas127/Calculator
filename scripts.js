const display = document.getElementById("display");
function addToDisplay(input){
  display.value += input;
}

function clearDisplay(){
  display.value = "";
}

function calculate(){
  try{
    let total = '';
    let a = null, b = null, operation = null;
    for (const x of display.value) {
      if (!isNaN(x) && x !== ' '){
        total += x;
      } else if (x !== ' '){
        if (a === null){
          a = parseFloat(total);
        } else {
          b = parseFloat(total);
        }
      operation = x;
      total = '';
      }
    }
    b = parseFloat(total);
    if (operation === '+') display.value = (add(a, b));
    else if (operation === '-') display.value = (subtract(a, b));
    else if (operation === '*') display.value = (multiply(a, b));
    else if (operation === '/') display.value = (divide(a, b));
  }
  catch(error){
    display.value = "Error";
  }
}

const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(a, b) {
	return a * b;
};

const divide = function(a, b) {
	return a / b;
};

// const sum = function(array) {
//   var total = 0;
// 	for (let i = 0; i < array.length; i++) {
//     total += array[i];
//   }
//   return total;
// };

// const multiply = function(array) {
//   var result = 1;
//   for (let i = 0; i < array.length; i++) {
//     result *= array[i];
//   }
//   return result;
// };

// const power = function(base, exponent) {
// 	return base ** exponent;
// };

// const factorial = function(fact_number) {
//   if (fact_number <= 1) {
//     return 1;
//   } else {
//     return fact_number * factorial(fact_number - 1);
//   }
// };