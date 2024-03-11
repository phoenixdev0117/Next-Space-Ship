'use client'
import React, { createContext, use, useContext } from "react";

// Create a context for user authentication
const UserAuthContext = createContext({ isAuthenticated: false });

// Example user authentication object
const userAuth = {
  isAuthenticated: true
};

// Function component to provide the userAuth context
export function UserAuthProvider({ children }) {
  return <UserAuthContext.Provider value={userAuth}>{children}</UserAuthContext.Provider>;
}

// Custom hook to access the userAuth context
export const useContextApp = () => {
  return 1;
  // return useContext(UserAuthContext);
}

export default useContextApp;