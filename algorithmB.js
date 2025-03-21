/*functionality to select a random word based on a specified criteria*/ 

export default function algorithmB(words, requiredLength, allowRepeatedLetters) {
    //filter based on length, only the words with the required amount of letters are considered
    let filtered = words.filter(word => word.length === requiredLength);

    //If repeated letters are NOT allowed (false), delete repeated words
    if (!allowRepeatedLetters) {
        filtered = filtered.filter(word => {
            const letters = word.split("");
            return new Set(letters).size === letters.length;
    });
}
  //If no word matches the requirements throw error
  if (filtered.length === 0) {
    throw new Error("No word found that matches the criteria");
  }

  //Random word returned
  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
}


/*
Notes to enhance my own learning when doing this:
* words = an array of strings, every string is a word
* requiredLength = Number describing the required length (integer)
* allowRepeatedLetters = A boolean true/false deciding if repeating letters are allowed or not
* The filter() method of Array instances creates a shallow copy of a portion of a given array, 
filtered down to just the elements from the given array that pass the test implemented by the provided function.
* Math.random() generates a random number, multiplied with filtered.length we are provided with a decimal
between 0 and total amount of elements in filtered. 
* Math.Floor() rounds the decimal to the closest integer
*/ 