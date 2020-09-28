import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';


function App() {
  fetch('/offers.json')
  .then((r) => {return r.json() })
  .then (x => console.log(x))
  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" >
          Dancing Potatoes
          <Button variant="outlined" color='inherit'>Home</Button>
          <Button variant="outlined" color='inherit'>Ulubione</Button>
          <Button variant="outlined" color='inherit'>Kayak</Button>
          <Button variant="outlined" color='inherit'>Mapa</Button>
        </Typography>
      </Toolbar>
      
    </AppBar>

    </>
  );
}

export default App;
