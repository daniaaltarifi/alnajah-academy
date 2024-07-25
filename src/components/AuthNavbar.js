import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function AuthNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { id } = useParams(); 
  const [userName, setUserName] = useState('');

  useEffect(() => {
    
    // Check if the user is logged in by looking for 'auth' in localStorage
    const auth = localStorage.getItem('auth');
    setIsLoggedIn(!!auth);
 
      // Retrieve the user's name from localStorage
      const name = localStorage.getItem('name');
      setUserName(name || ''); // Set the name or default to an empty string
  

    console.log('Checking auth status in localStorage:', auth);
  }, []);

  const handleLogout = () => {
    // Remove auth-related items from localStorage
    localStorage.removeItem('auth');
    localStorage.removeItem('roles');
    localStorage.removeItem('userid');
    localStorage.removeItem('curruntUser');
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    setIsLoggedIn(false);
    window.location.reload(); // Reload the page to reflect the changes
    window.location.href = '/login';
  };

  return (
    <>
      {isLoggedIn ? (
        <>
        

<div className='icon_profile_navbar'>
    <p className='dropdown-toggle list_profile_icon_navbar mx-3' type="button" data-bs-toggle="dropdown" aria-expanded="false">
      
    {userName} {/* Display the user's name */}
        </p>
    <ul className="dropdown-menu">
    <li><Link to={`/profile/${id}`} className="dropdown-item" href="#">حسابي</Link></li>
    <li><Link to="/login"  onClick={handleLogout} className="dropdown-item" href="#"> تسجيل الخروج</Link></li>
  </ul>
    <img src={require("../assets/acc_icon.png")} alt="profile img" className='img-fluid  img_icon_navbar' />
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