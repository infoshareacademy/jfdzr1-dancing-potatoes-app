import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Navigacja/Nav'


function App() {
  fetch('/offers.json')
  .then((r) => {return r.json() })
  .then (x => console.log(x))
  return (
    <>
    <Nav/>

    </>
  );
}

export default App;
