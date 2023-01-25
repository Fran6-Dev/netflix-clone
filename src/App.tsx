import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
 