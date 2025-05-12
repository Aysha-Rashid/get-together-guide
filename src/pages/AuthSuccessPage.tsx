// AuthSuccessPage.tsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthSuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const login = query.get('login');
    const name = query.get('name');

    // Save to localStorage or global state
    if (login && name) {
      localStorage.setItem('user', JSON.stringify({ login, name }));
    }

    // Navigate to home or dashboard
    navigate('/');
  }, []);

  return <p>Logging you in...</p>;
};

export default AuthSuccessPage;
