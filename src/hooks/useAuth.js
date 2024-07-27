import { useState, useEffect } from 'react';

const useAuth = () => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    userId: '',
    userName: '',
  });

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    const name = localStorage.getItem('name');
    const id = localStorage.getItem('id');
    setUser({
      isLoggedIn: !!auth,
      userName: name || '',
      userId: id || '',
    });
  }, []);

  const updateUser = (name, id) => {
    setUser({
      ...user,
      userName: name,
      userId: id,
    });
  };

  const logout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('roles');
    localStorage.removeItem('userid');
    localStorage.removeItem('curruntUser');
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    setUser({
      isLoggedIn: false,
      userId: '',
      userName: '',
    });
    window.location.href = '/login';
  };

  return {
    user,
    updateUser,
    logout,
  };
};

export default useAuth;