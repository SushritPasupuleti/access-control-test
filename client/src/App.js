import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const AccessControl = require('accesscontrol');
const { Grants } = require('./config/access.js');
const ac = new AccessControl(Grants);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  card: {
    minWidth: 275,
  },
}));

function App() {
  const classes = useStyles();
  const [userState, setuserState] = useState({
    "user": {
      "name": "Obi-Wan Kenobi",
      "role": "user"
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Card className={classes.root} variant="outlined">
      <CardContent>
        <form className={classes.root} noValidate autoComplete="off">
          <Input placeholder="Unprotected Name" inputProps={{ 'aria-label': 'description' }} />
          <Input placeholder="Unprotected Age" inputProps={{ 'aria-label': 'description' }} />
          <Input multiline placeholder="Protected Id lvl user" disabled={
            ac.can(userState.user.role).createOwn('posts').granted === true ? false : true
          } inputProps={{ 'aria-label': 'description' }} />
        </form>
        </CardContent>
        </Card>
      </header>
    </div>
  );
}

export default App;
