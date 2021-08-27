const express = require('express');
const bodyParser = require('body-parser')

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const PORT = 3000;


app.post("/", (req, res) => {
  res.send('related route')
});

app.get('/', (req, res) => {
  res.send('')
});


app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}!`);
});

