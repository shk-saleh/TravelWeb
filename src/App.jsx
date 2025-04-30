import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import SeacrhTour from './Components/SearchTour';
import PackageDetailsPage from './Components/PackageDetailsPage';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/searchTours" element={<SeacrhTour />} />
          <Route path="/package/:id" element={<PackageDetailsPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
