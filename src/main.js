function capitalized(word) {
  return word.toUpperCase();
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = (function () {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;
  return { add, subtract, multiply, divide };
})();

module.exports = {
  capitalized,
  reverseString,
  calculator,
};
