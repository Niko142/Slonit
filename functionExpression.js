function calculate(a, b, choosingOperations) {
  return choosingOperations(a, b);
}

const sumNumbers = (a, b) => {
  return a + b;
};

const subtractionNumbers = (a, b) => {
  return a - b;
};

const multiplicationNumbers = (a, b) => {
  return a * b;
};

const divisionNumbers = (a, b) => {
  return a / b;
};

const operations = {
  sum: sumNumbers,
  subtraction: subtractionNumbers,
  multiply: multiplicationNumbers,
  division: divisionNumbers,
};

const firstSelectedOperation = "sum";
const secondSelectedOperation = "subtraction";
const thirdSelectedOperation = "multiply";
const fourthSelectedOperation = "division";

// Результаты
console.log(calculate(3, 10, operations[firstSelectedOperation])); // 13
console.log(calculate(5, 2, operations[secondSelectedOperation])); // 3
console.log(calculate(6, 3, operations[thirdSelectedOperation])); // 18
console.log(calculate(21, 7, operations[fourthSelectedOperation])); // 3
