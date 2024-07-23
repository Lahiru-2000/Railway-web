import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/home'
import NavbarPage from './Components/Navbar/navbar'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Footer from './Components/Footer/footer';
import Homecards from './Components/Home-cards/Home-cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/login';


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home /> } />
   
        </Routes>
      </div>
    </Router>
  );
}

export default App;
