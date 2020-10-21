import React from 'react';
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
