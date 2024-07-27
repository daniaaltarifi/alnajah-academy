import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Css/auth.css";
import defaultImage from '../assets/profile.png'; 
function Profile({ user, updateUser }) {
  const [successMessage, setSuccessMessage] = useState('');
  const { userName, userId } = user;

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '' ,
    profileImage: defaultImage

  });

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:8080/api/profile/${userId}`)
        .then(response => {
          setProfile({
            name: response.data.name,
            email: response.data.email,
            password: '',
            confirmPassword: ''
          });
        })
        .catch(error => {
          console.error('There was an error fetching the profile!', error);
        });
    }
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:8080/api/profile/${userId}`, {
      name: profile.name,
      email: profile.email,
      password: profile.password,
      confirmPassword: profile.confirmPassword
    })
    .then(response => {
      console.log('Profile updated successfully');
      setSuccessMessage('تم التعديل بنجاح !!');
      // Update the local storage with the new name
      localStorage.setItem('name', profile.name);
      updateUser(profile.name, userId); // Update user context
      setTimeout(() => setSuccessMessage(''), 6000); // Clear the message after 6 seconds
    })
    .catch(error => {
      console.error('There was an error updating the profile!', error);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log('Form submitted:', profile);
    handleUpdate(); // Call the update function
  };

  return (
    <>
      <section className="margin_section">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 ">
              <p className="profile_title">حسابي</p>
              <button className="img_profile">
                <img
                  src={require("../assets/profile.png")}
                  alt="profile img"
                  className="img-fluid"
                />
              </button>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12">
              <div className="row m-5">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p className="title_of_input_auth">الاسم</p>
                  <input
                    type="text"
                    className="search_blog"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p className="title_of_input_auth">البريد الالكتروني</p>
                  <input
                    type="text"
                    className="search_blog"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row m-5">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <p className="title_of_input_auth">كلمة المرور</p>
                  <input
                    type="password"
                    className="search_blog"
                    name="password"
                    value={profile.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 ">
                  <p className="title_of_input_auth">نأكيد كلمة المرور</p>
                  <input
                    type="password"
                    className="search_blog"
                    name="confirmPassword"
                    value={profile.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              {successMessage && <p className="success_message">{successMessage}</p>}
              <button type="button" className="btn purple_btn mb-2 px-5" onClick={handleSubmit}>حفظ</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
