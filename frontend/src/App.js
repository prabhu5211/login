import { useState, useEffect } from 'react';
import Login from './Login';
import Welcome from './Welcome';

const API_URL = 'https://login-6s84.onrender.com';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('username');
    if (saved) setUsername(saved);
  }, []);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
    localStorage.setItem('username', user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <Welcome username={username} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} savedUsername={username} apiUrl={API_URL} />
      )}
    </div>
  );
}

export default App;
