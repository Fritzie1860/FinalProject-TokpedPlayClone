const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/api/data', (req, res) => {
  res.send({ data: "Data from backend accepted" });
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
