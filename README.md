# wordle-algorithm
A repository to implement algorithms with test strategies

# What I need to do ALGORITHM A
A function that recieves two words.
 + One that is the guessed word of the user
 + One that is the correct secret word
They will be compared to each other, looking for matching letters in the same index. 

The function needs to provide an array with object, where every object contains:
 + letter: From the guessed user
 + result: A string that can be either "correct", "misplaced" or "incorrect".

secret word vs guessed word:
 R          -  R  = correct
 O          -  O  = correct
 N          -  L  = incorrect
 J          -  I  = incorrect
 A          -  G  = incorrect
 

# Loop through both words and find the matching letters, save the result as an object in an array 
 { letter: 'R', result: 'correct' }

# Map remaining letters to know which ones are available to be either incorrect or misplaced.

# Loop through the guessed word again
    For every letter that is not marked "correct"
        - If letter belongs to the remaining ones and sum > 0 mark them as "misplaced" and decrease total letters   with 1
        - If NOT mark as "incorrect"

# Possible testscenarios:
- The amount of letters must match 
- All letters are misplaced
- All letters are incorrect
- All letters are correct
- Combination of incorrect, correct & misplaced
- Repeating letters  



# What I need to do ALGORITHM B- A function for Wordle to provide user with a word to play with
Inputs needed: 
- An array of words
- A number that defines required length of string
- Indication/flag for repeating letters, or only individual, unique letters

# Functionality: 
- Choose a random word from the array, filter words with required length
- Throw error if no word matches required criteria
- Choose a random word from the filtered options

Outputs needed: 
- The chosen random word    


# Possible testscenarios:
- When repeated letters are allowed and words of the correct length exist, 
the function should return a word with the desired length.
- When repeated letters are not allowed, only words with unique letters should be considered.
- If no word of the desired length exists, an error should be thrown.
- If no word with all unique letters exists, an error should be thrown.



sources:
https://mitsloan.mit.edu/ideas-made-to-matter/how-algorithm-solves-wordle

## Package Json notes
- changed this: "node --experimental-vm-modules node_modules/jest/bin/jest.js"
to this: "test": "cross-env NODE_OPTIONS=--experimental-vm-modules jest"
- webpack for future bundling, makes code more effective and robust

# ESLint configuration 
- configured ESLint to work with react so I can make more advanced UI:s later on- These combined makes it
possible to write code that works and is easy to debug, read and scale. I added this config straight in the json package but for future separation I will use an own config file for it. 

Explanations for a wider understanding of it all: 
"browser": true = Code runs in browser, global variables like document is overseen by ESLint
"es2021": true = Modern JS, ECMA script 2021 functions are accepted
"eslint:recommended" = Recommended set of rules by ESLint
"plugin:react/recommended" = Includes rules from react plugin, helps to follow best practice when making react components.
"react": { "version": "detect" } = Instead of manually updating config
JSX = is used to build components in react- Combines markup and logic (js and html) 

## Metadata = Keywords, wordle, algorithm, puzzle, solver
These words are an array of words describing this project to make it easier for search engines to find it when published/distributed. I could for example make my own package and share with my community, so that they can npm install my-package-name

# COMMANDS:
npm run lint = Scan the code for problems and get an overview, problem solution in an early stage
eslint --fix = To fix problems automatically (sometimes)
npm run format = formatting with prettier
npm publish = If I want to publish this in the NPM register

