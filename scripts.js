const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  var total = 0;
	for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function(array) {
  var result = 1;
  for (let i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(fact_number) {
  if (fact_number <= 1) {
    return 1;
  } else {
    return fact_number * factorial(fact_number - 1);
  }
};