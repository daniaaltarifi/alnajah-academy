import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './Pages/LandingPage.js';
import Courses from './Pages/Courses.js';
import Footer from './components/Footer.js';
import CourseDetails from './Pages/CourseDetails.js';
import WhoWeAre from './Pages/WhoWeAre.js';
import Blogs from './Pages/Blogs.js';
import BlogDetails from './Pages/BlogDetails.js';
import CardPrice from './Pages/CardPrice.js';
import SignUp from './Pages/SignUp.js';
import Login from './Pages/Login.js';
import Profile from './Pages/Profile.js';
import ContactUs from './Pages/ContactUs.js';
import Library from './Pages/Library.js';
import MyCourses from './Pages/MyCourses.js';
import VideoPlayer from './Pages/Test.js';
import useAuth from './hooks/useAuth.js';

function App() {
  const { user, updateUser, logout } = useAuth();

  return (
    <Router>
          <Navbar  user={user} handleLogout={logout} />
          <div className="App"dir='rtl'>
        <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id"  element={<Profile user={user} updateUser={updateUser} />} />

          <Route path="/" element={<LandingPage />} />
          <Route path='/courses' element={<Courses/>}/>
          <Route path='/coursedetails/:id' element={<CourseDetails/>}/>
          <Route path='/whoweare' element={<WhoWeAre/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          {/* <Route path='/blog/tag/' element={<Blogs/>}/> */}
          <Route path='/blogdetails/:id' element={<BlogDetails/>}/>
          <Route path='/cardprice' element={<CardPrice/>}/>
          <Route path='/library' element={<Library/>}/>
          <Route path='/mycourses' element={<MyCourses/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/test' element={<VideoPlayer/>}/>

        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
