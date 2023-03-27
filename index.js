const express = require('express');
const Dalai = require('dalai')

const app = express();
const PORT = process.env.PORT || 3000;

async function requestWithAwait() {
  return new Promise((resolve, reject) => {
    new Dalai().request({
      model: "7B",
      prompt: "The following is a conversation between a boy and a girl:",
    }, (token) => {
      if (token) {
        resolve(token);
      } else {
        reject(new Error('Request failed'));
      }
    });
  });
}

app.get('/', async (req, res) => {
  try {
    const token = await requestWithAwait();
    process.stdout.write(token);
    res.json({ message: 'Hello from the API!', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error occurred while processing the request' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
