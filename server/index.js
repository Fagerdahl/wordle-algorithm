//set-up for Express server and API-Routes, This starts the backend-server in Node.js

import express from 'express';
const app = express();
app.listen(5080, () => console.log('Backend running!'));
