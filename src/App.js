import React, { useState } from 'react';
import { Home } from './pages/home';
import  {Photos}  from './pages/photos';
import {Video} from './pages/video';
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
            <Video />
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
