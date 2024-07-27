import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AuthNavbar({ user , handleLogout }) {
  const { isLoggedIn, userName, userId } = user;
 
  return (
    <>
      {isLoggedIn ? (
        <>
        

<div className='icon_profile_navbar'>
    <p className='dropdown-toggle list_profile_icon_navbar mx-3' type="button" data-bs-toggle="dropdown" aria-expanded="false">
      
    {userName} {/* Display the user's name */}
        </p>
    <ul className="dropdown-menu">
    <li><Link to={`/profile/${userId}`}  className="dropdown-item" href="#">حسابي</Link></li>
    <li><Link to="/login"   onClick={handleLogout}  className="dropdown-item" href="#"> تسجيل الخروج</Link></li>
  </ul>
    <img src={require("../assets/profile.png")} alt="profile img" className='img-fluid  img_icon_navbar' />
    </div>




        </>
      ) : (
        <>
          <Link to="/login" style={{ color: "#fff" }}>
            <button type="button" className="btn purple_btn">تسجيل الدخول</button>
          </Link>
          <Link to="/signup" style={{ color: "#fff" }}>
            <button type="button" className="btn purple_btn">انشاء حساب</button>
          </Link>
        </>
      )}
    </>
  );
}

export default AuthNavbar;
