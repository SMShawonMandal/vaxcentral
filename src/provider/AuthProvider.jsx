import { getItem } from 'localforage';
import { createContext, useState } from 'react';

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const dataString = localStorage.getItem('userData');

  const data = JSON.parse(dataString);
  // console.log(data?.existingUser);


  const login = (token) => {
    const userData = JSON.stringify(token)
    localStorage.setItem('userData', userData)
    setIsLoggedIn(token);
  };

  const logout = () => {
    localStorage.removeItem('userData');
    setIsLoggedIn(null);
  };

  const authValue = { isLoggedIn, login, logout, user: data?.existingUser, token: data?.token }

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider