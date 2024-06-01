// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
// import CompanyInfo from './components/CompanyInfo';


const App = () => {
  return (

    <Routes>
     
       <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      <Route path="/" element={<Signup />} />
    </Routes>

  );
};

export default App;
