import { useContext, createContext } from "react";
const CredentialsContext = createContext();
const useUserContext = () => useContext(CredentialsContext);
export {CredentialsContext,useUserContext}