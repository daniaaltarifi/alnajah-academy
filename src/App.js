import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './Pages/LandingPage.js';
import Courses from './Pages/Courses.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <Router>
          <Navbar/>
      <div className="App"dir='rtl'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/courses' element={<Courses/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
