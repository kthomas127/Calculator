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
      if (x === ',' || x === '(' || x === ')') continue;
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
  if (operation === '+') return (a + b);
  if (operation === '-') return (a - b);
  if (operation === 'x') return (a * b);
  if (operation === '/') return (a / b);
  if (operation === '%') return (a % b);
}

function toggleSign() {
  const unformatted = display.value.replace(/,/g, "");
  const match = unformatted.match(/\((-\d+\.?\d*)\)$|([-]?\d+\.?\d*)$/);
  if (!match) return;

  let toggled;
  if (match[1] !== undefined) toggled = match[1].slice(1);
  else toggled = '(-' + match[2] + ')';
  
  const matchIndex = unformatted.lastIndexOf(match[0]);
  const formatted = unformatted.slice(0, matchIndex) + toggled;
  display.value = formatted.replace(/(\d+\.?\d*)/g, (num) => {
    if (num.endsWith('.')) return num;
    return parseFloat(num).toLocaleString();
  });
}