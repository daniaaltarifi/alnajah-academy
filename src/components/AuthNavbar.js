import React from 'react'
import { Link } from 'react-router-dom'
function AuthNavbar() {
  return (
    < >
         <Link to="/login" style={{color:"#fff"}}><button type="button"  className="btn purple_btn">تسحيل الدخول</button></Link>
         <Link to="/signup" style={{color:"#fff"}}><button type="button" className="btn purple_btn">انشاء حساب</button></Link>
         
    </>
  )
}

export default AuthNavbar