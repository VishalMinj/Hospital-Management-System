import { useEffect, useState } from "react";
import { ClearToken, getRefreshToken, EncryptToken } from "../utils";
import { AuthContext } from "./useAuthContext";
import { useUserContext } from "./userUserContext";
import { UseDetailsAPI } from "../utils";

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const { setuserid, setusername, setfullname, setrole } = useUserContext();
  const [Authenticated, setAuthenticated] = useState(false);
  const [Loading, setLoading] = useState(true);

  const refreshAccessToken = async () => {
    const refersh = getRefreshToken();
    if (refersh) {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_ENDPOINT}/auth/token/refresh/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refresh: refersh,
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
    } else setAuthenticated(false);

    if (Loading) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (Loading) {
      refreshAccessToken();
      (async()=>{
        const userDetails = await UseDetailsAPI();
        setuserid(userDetails.id);
        setusername(userDetails.username);
        setfullname(userDetails.full_name);
        setrole(userDetails.role);
      })();
    }
    const intervalId = setInterval(() => {
      if (Authenticated) {
        refreshAccessToken();
      }
    }, 1000 * 60 * 14);

    return () => clearInterval(intervalId);
  }, [Authenticated, Loading]);

  return (
    <AuthContext.Provider value={{ Authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
