import React from "react";
import Main from './components/TalentSpotlight/Main';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import ViewProfile from './components/ViewProfilePage/ViewProfile'
import Login from './components/Login';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Main />} />
          <Route exact path="/profile" element={<ViewProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


