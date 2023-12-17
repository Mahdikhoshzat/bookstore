import React from 'react';
import './App.css';
import {Route,Routes } from "react-router-dom"
import Main from './components/main/Main';
import Register from "./components/user/register/Register"
import Login from './components/user/login/Login';

function App() {
  return (
    <div className="App" style={{height: "100vh",width: "100vw"}}>
      <Routes>
        <Route path= "/" element={<Main />} />
        <Route path= "/user/register" element={<Register role='User'/>} />
        <Route path= "/company/register" element={<Register role='Company'/>} />
        <Route path= "/user/login" element={<Login role='User'/>} />
        <Route path= "/company/login" element={<Login role='Company'/>} />
      </Routes>
    </div>
  );
}

export default App;
