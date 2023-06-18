import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default (token) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !token &&
      location.pathname !== '/login' &&
      location.pathname !== '/register'
    ) {
      navigate('/login');
    } else if (
      token &&
      (location.pathname === '/login' || location.pathname === '/register')
    ) {
      navigate('/');
    }
  }, []);
};
