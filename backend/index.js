// backend/index.js
const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// route root untuk menghindari error Cannot GET /
app.get('/', (req, res) => {
  res.send('Backend API is running!');
});

// Definisikan API endpoints
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));

app.listen(PORT, () => {
  console.log(`🚀 Server backend berjalan di http://localhost:3000`);
});
