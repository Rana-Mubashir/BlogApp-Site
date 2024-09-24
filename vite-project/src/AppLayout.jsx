import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';

function AppLayout() {

  const [isAuth, setIsAuth] = useState('');
  const authFlag = useSelector((state) => state.blog.isAuthenticated);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const data = localStorage.getItem('auth-data');
    setIsAuth(data);

    if (!data && location.pathname !== '/login') {
      navigate('/login');
    }
    else{
      navigate('/home')
    }
  }, [authFlag]);

  return (
    <div>
      {!isAuth && location.pathname !== '/signup' ? (
        <LoginPage />
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </div>
  );
}

export default AppLayout;
