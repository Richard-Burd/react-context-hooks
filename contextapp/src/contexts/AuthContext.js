import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [authentication, setAuthentication] = useState({
    isAuthenticated: false,
  });

  const toggleAuth = () => {
    setAuthentication({ ...authentication, isAuthenticated: !authentication.isAuthenticated });
  };

  return (
    <AuthContext.Provider value={{ ...authentication, toggleAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
