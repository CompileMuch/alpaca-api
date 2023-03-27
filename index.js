const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
