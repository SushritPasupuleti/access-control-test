require('dotenv').config();
const cors = require('cors');
const express = require('express')
const app = express()
const port = 5000
const AccessControl = require('accesscontrol');
const { Grants } = require('./config/access.js');
var bodyParser = require('body-parser')

const ac = new AccessControl(Grants);

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

app.post('/hello-there', (req, res) => {
  //check if user has any role

  if (req.body.user !== undefined && req.body.user.role !== undefined){
    res.send('General Kenobi!')
  }
  else {
    res.send('I was expecting Kenobi, why are you here ?')
  }
})

app.post('/create', (req, res) => {
  //check if user has any role
  //console.table(ac)
  
  if (req.body.user !== undefined && req.body.user.role !== undefined){
    const permission = ac.can(req.body.user.role).createOwn('posts');
    
    if (permission.granted) {
      res.send('Ah the negotiator!')
    }

    else {
      res.send('Kill him')
    }
    
  }
  else {
    res.send('I was expecting Kenobi, why are you here ?')
  }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})