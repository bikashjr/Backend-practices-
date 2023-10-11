const uc = require("upper-case");

const ucFunction = (name) => {
  return uc(name); // Use uc(name) to convert the string to uppercase.
}

const result = ucFunction("bikash ghimire"); // Pass the name as an argument.
console.log(result);
