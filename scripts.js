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
          const b = parseFloat(total);
          a = a === null ? b : applyOperation(a, b, operation);
          operation = x;
          total = '';
      }
    }
    const b = parseFloat(total);
    const result = operation === null ? b : applyOperation(a, b, operation);
    display.value = result.toLocaleString();
  }
  catch(error){
    display.value = "Error";
  }
  if (!errors.includes(display.value)) {
    equation.textContent = prevDisplay;
    previous.appendChild(equation);
  }
}

function applyOperation(a, b, operation) {
  if (operation === '+') return add(a, b);
  if (operation === '-') return subtract(a, b);
  if (operation === 'x') return multiply(a, b);
  if (operation === '/') return divide(a, b);
  if (operation === '%') return modulo(a, b);
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

