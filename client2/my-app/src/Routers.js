import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Forgetpass from './Pages/ForgetPass';
import Profile from './Pages/Profile'
import Dashboard from './Components/DashBord';
export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/forget ' element={<Forgetpass />} />
        <Route path='/profile ' element={<Profile />} />
        <Route path='/dashbord' element={ <Dashboard/>} />
      </Routes>
    </Router>
  );
}
