const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve saywordbybeats folder as public URL with its name
app.use('/saywordbybeats', express.static(path.join(__dirname, 'saywordbybeats')));

// Root route
app.get('/', (req, res) => {
  res.send('<h1>Welcome</h1><p><a href="/saywordbybeats">View Say the Word on Beat</a></p>');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Say the Word on Beat available at http://localhost:${PORT}/saywordbybeats`);
});
