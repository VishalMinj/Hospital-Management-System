import { useEffect, useState } from "react";
import {
  ClearToken,
  getRefreshToken,
  EncryptToken
} from "../utils";

import { AuthContext } from "./useAuthContext";

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [Authenticated, setAuthenticated] = useState(false);
  const [Loading, setLoading] = useState(true);

  const refreshAccessToken = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_ENDPOINT}/auth/token/refresh/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh: getRefreshToken(),
        }),
      }
    );
    const data = await response.json();
    if (response.ok) {
      EncryptToken(data.access, data.refresh);
      setAuthenticated(true);
      
    } else {
      ClearToken();
      setAuthenticated(false);
    }
    if (Loading) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(Loading){
      refreshAccessToken()
    }
    const intervalId = setInterval(() => {
      if(Authenticated){
        refreshAccessToken()
      }
    }, 1000*60*16);

    return () => clearInterval(intervalId);
  }, [Authenticated,Loading]);

  return (
    <AuthContext.Provider value={{ Authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
