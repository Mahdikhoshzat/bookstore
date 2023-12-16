import React from 'react';
import './App.css';
import {Route,Routes } from "react-router-dom"
import Main from './components/main/Main';
import Register from "./components/user/register/Register"

function App() {
  return (
    <div className="App" style={{height: "100vh",width: "100vw"}}>
      <Routes>
        <Route path= "/" element={<Main />} />
        <Route path= "/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
