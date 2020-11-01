import React from 'react';
import Main from './Dashboard/Main';
import Nav from './Navigacja/Nav';



function App() {
  // fetch('/offers.json')
  // .then((r) => { return r.json() })
  // .then(x => console.log(x));
  return (
      <Nav>
        <Main/>
      </Nav>
  );
}

export default App;
