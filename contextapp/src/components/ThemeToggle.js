import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <button onClick={isAuthenticated ? toggleTheme : ""}>
      {isAuthenticated ? "Toggle Theme" : "Must be logged in to toggle theme"}
    </button>
  );
};

export default ThemeToggle;

// <div onClick={toggleAuth}>{isAuthenticated ? "Logged in" : "Logged out"}</div>;
