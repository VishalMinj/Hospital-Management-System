import { useContext, createContext } from "react";
const AuthContext = createContext();
const useAuthContext = () => useContext(AuthContext);
export { useAuthContext, AuthContext };
