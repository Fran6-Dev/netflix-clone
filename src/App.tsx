import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import requests from './config/Request';
import axios from 'axios';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<Home trendingNow={[]}  />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
 

