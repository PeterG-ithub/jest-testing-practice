const main = require("./main");

test("capitalize me to ME", () => {
  expect(main.capitalized("me")).toBe("ME");
});

test("reverse the string Justice to icetsuJ", () => {
  expect(main.reverseString("Justice")).toBe("ecitsuJ");
});

test("add 7 + 6 is 13", () => {
  expect(main.calculator.add(7, 6)).toBe(13);
});

test("subtract 7 + 6 is 1", () => {
  expect(main.calculator.subtract(7, 6)).toBe(1);
});

test("multiply 7 * 6 is 42", () => {
  expect(main.calculator.multiply(7, 6)).toBe(42);
});

test("divide 7 / 7 is 1", () => {
  expect(main.calculator.divide(7, 7)).toBe(1);
});
