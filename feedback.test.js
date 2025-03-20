import { describe, expect, it } from '@jest/globals';
import algorithmA from './feedback.js';

describe('algorithmA function', () => {
    it('returns all "correct" when guessed word is the same as the secret word' , () => {
     const guess = 'RONJA';
     const secret = 'RONJA';
     const result = algorithmA(guess, secret);

     const expected = [
      { letter: 'R', result: 'correct' },
      { letter: 'O', result: 'correct' },
      { letter: 'N', result: 'correct' },
      { letter: 'J', result: 'correct' },
      { letter: 'A', result: 'correct' }
    ];

    expect(result).toEqual(expected);
  
    });
  });