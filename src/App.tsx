import React from 'react';
import './App.css';
import {Route,Routes } from "react-router-dom"
import Main from './components/main/Main';
import Register from "./components/user/register/Register"
import Login from './components/user/login/Login';
import BookList from './components/book/BookList';
import BookDetails from './components/book/BookDetails';

function App() {
  return (
    <div className="App" style={{height: "100vh",width: "100%"}}>
      <Routes>
        <Route path= "/" element={<Main />} />
        <Route path= "/books" element={<BookList />} />
        <Route path= "/books/:id" element={<BookDetails />} />
        <Route path= "/user/register" element={<Register role='User'/>} />
        <Route path= "/company/register" element={<Register role='Company'/>} />
        <Route path= "/user/login" element={<Login role='User'/>} />
        <Route path= "/company/login" element={<Login role='Company'/>} />
      </Routes>
    </div>
  );
}

export default App;
