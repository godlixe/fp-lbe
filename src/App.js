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
    setInput(prev => {
      return{
          ...prev,
          destName : e,
          destDate : x
      }
  })
  }
  return (
    <div>
      <Navbar name={input.destName} date={input.destDate}/>
      <Home onAdd={handleAdd}/>
    </div>
  );
}

export default App;
