import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {

  const [input, setInput] = useState({
    destName: "",
    destDate: ""
  });

  function handleAdd(e, x){
    console.log(e)
  }
  return (
    <Router>
      <div>
        <Navbar name={input.destName} date={input.destDate}/>
        <Route path="/">
          <Home onAdd={handleAdd} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
