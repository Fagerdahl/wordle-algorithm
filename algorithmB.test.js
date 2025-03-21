import { describe, it } from "@jest/globals";
import assert from 'node:assert/strict';
import algorithmB from "./algorithmB.js";

describe('algorithmB', () => {
  it('function returns a word with the exact required length', () => {
    const words = ['apple', 'berry', 'dates'];
    const result = algorithmB(words, 5, true);
    assert.equal(result.length, 5);
  });

  it('function returns a word with the exact required length, when all letters are unique', () => {
    const words = ['apple', 'mango', 'berry'];
    //"apple" has a double set of 'p', "berry" has a double set of 'r',
    //"mango" has unique letters and the exact required amount
    //NO Repeating letters allowed!
    const result = algorithmB(words, 5, false);
    const letters = result.split('');
    assert.equal(new Set(letters).size, letters.length);
  });

  //function for error handling- no word with correct length
  it('should throw an error if no word of the required length exists', () => {
    const words = ['longer', 'tiny'];
    //None of the words above meet the required length, which means failure
    assert.throws(() => {
      algorithmB(words, 5, true);
    }, /No word found/);
  });

  //function for error handling - no word with all uniqe letters
  it('should throw an error if no word with all unique letters exists', () => {
    const words = ['apple', 'allee', 'broom'];
    //All words above have a double set of letters, which means failure
    assert.throws(() => {
      algorithmB(words, 5, false);
    }, /No word found/);
  });
});

/*I am using callback functions to throw errors. for example: algorithmB(words, 6, true)
I am using search strings in the form of regular expressions- to verify that our error message is correct*/