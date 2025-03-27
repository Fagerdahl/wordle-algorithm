//Minimal implementation of the function to make the test work
export default function algorithmA(guess, secret) {
  if (guess.length !== secret.length) {
    throw new Error("Guess and secret must be the same length!");
  }

  if (guess === secret) {
    return guess.split("").map((letter) => ({ letter, result: "correct" }));
  }

  //Split the string, iterate through every letter, return object based on result
  return guess.split("").map((letter) => {
    return secret.includes(letter)
      ? { letter, result: "misplaced" }
      : { letter, result: "incorrect" };
  });
}
