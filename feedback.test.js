import { describe, expect, it } from "@jest/globals";
import algorithmA from "./feedback.js";

//Declaration of a helper function to avoid repetition in every test case, runTest will provide us different indata
const runTest = (guess, secret, expected) => {
  expect(algorithmA(guess, secret)).toEqual(expected);
};

//Test to verify all letters being correct
describe("algorithmA function", () => {
  it('returns all "correct" when guessed word is the same as the secret word', () => {
    runTest("RONJA", "RONJA", [
      { letter: "R", result: "correct" },
      { letter: "O", result: "correct" },
      { letter: "N", result: "correct" },
      { letter: "J", result: "correct" },
      { letter: "A", result: "correct" },
    ]);
  });

  //Test to verify all letters being incorrect
  it('returns all "incorrect" when guessed letters are not even part of secret word', () => {
    runTest("ABCDE", "FGHIJ", [
      { letter: "A", result: "incorrect" },
      { letter: "B", result: "incorrect" },
      { letter: "C", result: "incorrect" },
      { letter: "D", result: "incorrect" },
      { letter: "E", result: "incorrect" },
    ]);
  });
});