import React from 'react'
import navbar from '../Css/navbar.css'
import AuthNavbar from '../components/AuthNavbar.js'
import { Link } from 'react-router-dom'
import SliderHome from '../Pages/Slider.js'
import Home from '../Pages/Home.js'
function Navbar() {
  return (
    < >

<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid responsive_container">
 
    <AuthNavbar />  
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link text_navbar " href="#">اتصل بنا</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text_navbar" href="#">المدونة</Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link text_navbar" href="#">نقاط البيع</Link>

        </li>
        <li className="nav-item">
        <Link className="nav-link text_navbar" href="#">من نحن</Link>
        </li>  <li className="nav-item">
        <Link className="nav-link text_navbar" href="#">تعلم معنا</Link>
        </li>  <li className="nav-item">
        <Link className="nav-link text_navbar" href="#">الرئيسية</Link>
        </li>
      </ul>
      <div className="logo_container">

<img src={require("../assets/logo.png")} alt="logo ba9ma" className='logo_size'/>    </div>
      </div>
  </div>
</nav>

</>
  )
}

export default Navbar