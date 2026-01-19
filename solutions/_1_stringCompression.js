/**
 * Write a function that takes a string and returns a **_compressed_** version.
 * If a character repeats, replace the repetition with the count of characters.
 *
 * Input: aaabbcbba
 * output: a3b2c1b2a1
 * Goal: This tests your abitlity to handle loops and conditional logic within a single traversal.
 */

const stringCompressor = (s) => {
  if (typeof s === "string") {
    const stringArray = s.split("");
    const compressedStringArray = [];

    for (let index = 0; index < stringArray.length; index++) {
      const element = stringArray[index];

      let elementCount = 1;

      for (let idx = index + 1; idx < stringArray.length; idx++) {
        if (idx === stringArray.length - 1) {
          index = idx; // to close the parent loop
        }

        if (element !== stringArray[idx]) {
          index = idx - 1;
          break;
        }

        elementCount++;
      }

      compressedStringArray.push(element + elementCount);
    }

    return compressedStringArray.join("");
  }

  return "[error] invalide argument type!";
};

console.log(stringCompressor("aaabbcbba"));
