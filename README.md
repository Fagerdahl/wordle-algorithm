# wordle-algorithm
A repository to implement algorithms with test strategies

# What I need to do
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
 

# Step 1: Loop through both words and find the matching letters, save the result as an object in an array 
 { letter: 'R', result: 'correct' }

# Step 2: Map remaining letters to know which ones are available to be either incorrect or misplaced.

# Step 3: Loop through the guessed word again
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


sources:
https://mitsloan.mit.edu/ideas-made-to-matter/how-algorithm-solves-wordle
