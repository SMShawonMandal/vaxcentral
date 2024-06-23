import { getItem } from 'localforage';
import { createContext, useContext, useState } from 'react';


// creates contexts and exports for global use
export const AuthContext = createContext();

// create authprovider function and pass the router provider from main jsx as children props
function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  // get token from local storage
  const dataString = localStorage.getItem('userData');
  // parse token from local storage
  const data = JSON.parse(dataString);

  // console.log(data?.existingUser);


  // login function for authentication where token is passed from login jsx as response.data and stored in local storage as json
  const login = (token) => {
    const userData = JSON.stringify(token)
    localStorage.setItem('userData', userData)
    setIsLoggedIn(token);
  };

  // log out the user when log out is clicked and the userdata token is removed from local storage 
  const logout = () => {
    localStorage.removeItem('userData');
    setIsLoggedIn(null);
  };


  // its a objecct which  is passing the functions and variables to use it globally as Authcontext value

  const authValue = { isLoggedIn, login, logout, user: data?.userData, token: data?.token }
  console.log(authValue)

  return (
    <AuthContext.Provider value={authValue}>
      {/* <RouterProvider router={router} />  as children props in the very beggining of this file*/}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider