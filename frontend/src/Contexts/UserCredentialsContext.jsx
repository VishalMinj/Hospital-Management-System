import { CredentialsContext } from "./userUserContext";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function UserCredentialsProvider({ children }) {
  const [userid, setuserid] = useState("");
  const [username, setusername] = useState("");
  const [fullname, setfullname] = useState("");
  const [role, setrole] = useState("");
  return (
    <CredentialsContext.Provider
      value={{
        userid,
        setuserid,
        username,
        setusername,
        fullname,
        setfullname,
        role,
        setrole
      }}
    >
      {children}
    </CredentialsContext.Provider>
  );
}
