import express from 'express';
import dotenv from 'dotenv/config';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 3001;

app.listen(process.env.PORT, () => `Server running on port ${port} 🔥`);
console.log(`Server running on port ${port} 🔥`);
