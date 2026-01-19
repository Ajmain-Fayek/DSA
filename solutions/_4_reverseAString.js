/**
 * Write a function that takes string as argument and returns the string in reverse order
 * 
 * Input: hello
 * Output: olleh
 * Goal: To practice reversing strings in JavaScript using built-in string and array methods.
 */

const reverseString = (s) => {
  if (typeof s === "string") {
    const stringArr = s.split("");

    return stringArr.toReversed().join("");
  }

  return "[error]: Invalide argument type";
};

// console.log(reverseString("hello"));
console.log(reverseString(545));
