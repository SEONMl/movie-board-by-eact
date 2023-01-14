import React from "react";
import Home from './routes/Home'
import './CSS/App.css';
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About';

function App() {
  return (
    <HashRouter>
      <Route path='/home' component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;