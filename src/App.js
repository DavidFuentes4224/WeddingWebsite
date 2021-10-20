import logo from './logo.svg';
import React, { useState } from 'react';
import { Header } from './sections/header';
import { Home } from './pages/home';
import { Photos } from './pages/photos';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import './styles/styles.css'
import './styles/queries.css'

function App() {
  const [tab, setTab] = useState('home');
  document.title = "Fuentes Fiesta";
  const titleStyle = {
    float: 'left',
    fontSize: '32px',
    padding: '0px 5%',
    color: 'azure'
  }
  function changeTab(tab) {
    setTab(tab);
  }
  return (
    <>
      <BrowserRouter>
        <div className="banner index">
          <h1 className="important">DAVID FUENTES</h1>
          <h4>AND</h4>
          <h1 className="important">KELLY KLEM</h1>
        </div>

        <div className="nav-bar">
          <ul>
            <li><Link to="home" onClick={() => changeTab('home')}>Home</Link></li>
            <li><Link to="photos" onClick={() => changeTab('photos')}>Photos</Link></li>
            <li><Link to="video" onClick={() => changeTab('video')}>Video</Link></li>
          </ul>
        </div>
        <Switch>
          
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/video">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
