# wordle-algorithm/RONJAS WORDLE GAME
A repository to first implement algorithms with test strategies, and then set-up my own fullstack version of Wordle.

# Design 
Figma Design: https://www.figma.com/design/aKxmfxzUziLLlGa4TJb2Bi/Ronjas-Wordle?node-id=0-1&p=f&t=Donb6lAhhpLaXOcV-0

# Server & Functionality
The app runs at: http://localhost:5080
Fullstack app with three Routes (Startpage/Game, info & highscore)
__________________________________________________________________________________________
# MAIN PAGES
1. Start page where the game is played
2. About us PAGE 
-static HTML or React page with information about the project, tools used, and purpose
3. Highscore List
-Has its own URL Route, Data is fetched from a database and page is server-side rendered 
__________________________________________________________________________________________
# The GAME
GUI built with React (mobile-first approach)

User can choose word length and whether repeated letters are allowed

A word is randomly selected via a backend API using algorithmB

User enters guesses in a free text field

Feedback is provided using algorithmA:
Green = correct letter and position
Yellow = correct letter, wrong position
Red = incorrect letter

When the correct word is guessed:
The user can enter their name
The result (name, time, guesses, settings) is saved to the database

# The TECHNICALS
Frontend: React is my chosen library to build dynamic UI.  

Backend: Node.js + Express Node.js lets me run JS on the server, Express defines routes and API:s.

Testing: Jest is my chosen JS framework to test my logic. 
The algorithm logic was developed using Test Driven Development (TDD), where unit tests were written with Jest before or alongside the implementation.

Database: SQLite is my database of choise.

UI Design: Figma https://www.figma.com/design/aKxmfxzUziLLlGa4TJb2Bi/Ronjas-Wordle?node-id=0-1&p=f&t=Donb6lAhhpLaXOcV-0

Algorithms: algorithmA & algorithmB : AlgorithmA handles letter feedback (correct/misplaced/incorrect), and algorithmB selects a random word based on user-defined settings.

# client/src/index.js 
This is the React entry point.
It mounts <App /> into the DOM, and runs in the browser

# server/index.js
This is the Node.js backend entry point
Sets up the Express server and API endpoints, and runs in Node environment (server)
