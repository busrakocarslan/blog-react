import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user") || null));
  const navigate = useNavigate();

  const login = (loginInfo) => {
    // kullanıcı bilgileri doğru olduğunda bu kısma gelecek
    setUser(loginInfo);
    navigate("/dashboard/home");
  };
  const logout = () => setUser(null);

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
