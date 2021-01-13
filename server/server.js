require('dotenv').config();
const cors = require('cors');
const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Expose-Headers", "X-Total-Count, Content-Range");
    next();
});

app.get('/', (req, res) => {
  res.send('Hello There!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})