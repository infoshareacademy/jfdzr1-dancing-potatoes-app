import React from 'react';
import Nav from './Navigacja/Nav';
import Main from './Dashboard/Main';



function App() {
  fetch('/offers.json')
  .then((r) => {return r.json() })
  .then (x => console.log(x))
  return (
    <>
      <Nav/>
      <Main/>
    </>
    
  );
}

export default App;
