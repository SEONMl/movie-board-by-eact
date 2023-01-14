import React from "react";
import Home from './routes/Home'
import './CSS/App.css';
import {HashRouter, Route, Routes} from 'react-router-dom';
import About from './routes/About';
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path='/' exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail} />
      </Routes>
    </HashRouter>
  );
}

export default App;