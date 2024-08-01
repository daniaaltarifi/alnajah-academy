// UserContext.js
import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    userId: '',
    userName: '',
    img: '',
  });

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    const name = localStorage.getItem('name');
    const id = localStorage.getItem('id');
    const img = localStorage.getItem('img');
    setUser({
      isLoggedIn: !!auth,
      userName: name || '',
      userId: id || '',
      img: img || '',
    });
  }, []);

  const updateUser = (name, id, img) => {
    localStorage.setItem('name', name);
    localStorage.setItem('id', id);
    if (img) {
      localStorage.setItem('img', img);
    }
    setUser({
      isLoggedIn: !!localStorage.getItem('auth'),
      userName: name,
      userId: id,
      img: img || user.img,
    });
  };

  const logout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('roles');
    localStorage.removeItem('userid');
    localStorage.removeItem('curruntUser');
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    localStorage.removeItem('img');
    setUser({
      isLoggedIn: false,
      userId: '',
      userName: '',
      img: '',
    });
    window.location.href = '/login';
  };

  return (
    <UserContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
