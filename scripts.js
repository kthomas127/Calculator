const display = document.getElementById("display");
const previous = document.getElementById("previous");
const equation = document.createElement("p");
const errors = ["NaN", "Infinity", "-Infinity"];

function addToDisplay(input){
  const raw = display.value.replace(/,/g, "") + input;
  display.value = raw.replace(/(\d+\.?\d*)/g, (num) => {
    if (num.endsWith('.')) return num;
    return parseFloat(num).toLocaleString()
  }
);
}

function clearDisplay(){
  display.value = "";
  equation.remove();
}

function backspace(){
  if (errors.includes(display.value)) display.value = "";
  else display.value = display.value.slice(0, -1);
}

function calculate(){
  const prevDisplay = display.value;
  try{
    let total = '';
    let a = null, operation = null;
    for (const x of display.value) {
      if (x === ',') continue;
      if ((!isNaN(x) && x !== ' ' && x !== ',') || x === '.'){
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
        else if (operation === '%') a = (modulo(a, b));
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
    else if (operation === '%') display.value = (modulo(a, b));
  }
  catch(error){
    display.value = "Error";
  }
  if (!errors.includes(display.value)) {
    equation.textContent = prevDisplay;
    previous.appendChild(equation);
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

const modulo = function(a, b) {
	return a % b;
};

