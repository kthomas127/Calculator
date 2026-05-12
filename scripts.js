const display = document.getElementById("display");
function addToDisplay(input){
  display.value += input;
}

function clearDisplay(){
  display.value = "";
}

function backspace(){
  display.value = display.value.slice(0, -1)
}

function calculate(){
  try{
    let total = '';
    let a = null, operation = null;
    for (const x of display.value) {
      if (!isNaN(x) && x !== ' '){
        total += x;
      } else if (x !== ' '){
        if (a === null){
          a = parseFloat(total);
        } else {
          const b = parseFloat(total);
          if (operation === '+') a = (add(a, b));
        else if (operation === '-') a = (subtract(a, b));
        else if (operation === 'x') a = (multiply(a, b));
        else if (operation === '/') a = (divide(a, b));
        }
      operation = x;
      total = '';
      }
    }
    const b = parseFloat(total);
    if (operation === '+') display.value = (add(a, b));
    else if (operation === '-') display.value = (subtract(a, b));
    else if (operation === 'x') display.value = (multiply(a, b));
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

