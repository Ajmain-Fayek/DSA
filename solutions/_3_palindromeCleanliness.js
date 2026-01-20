/**
 * Check if a string is a palindrome (reads the same backward as forward),
 * but you must ignore spaces, punctuation, and capitalization.
 *
 * Input: "Race Car"
 * Output: True
 * Goal: This tests your knowledge of built-in methods (like `.toLowerCase()` or `Regex`)
 * and how you clean data before processing it—a vital skill for web development.
 */

const palindromeChecker = (s) => {
  if (typeof s === "string") {
    const sanitizedString = s.toLocaleLowerCase().replace(/[^a-z0-9]/gi, "");
    const reversedSanitizedString = sanitizedString.split("").toReversed().join("");

    return sanitizedString === reversedSanitizedString ? "True" : "False";
  }

  throw "[error]: argument expected string but got other!";
};

console.log(palindromeChecker("Race Car"));
