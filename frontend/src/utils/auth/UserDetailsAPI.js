import { getAccessToken } from "./tokenUtils";

export const UseDetailsAPI= async()=>{
    try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_ENDPOINT}/auth/user/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getAccessToken()}`,
            },
          }
        );
        if(!response.ok){
          throw new Error(response.json())
        }
        const data= await response.json()
        return data
    } catch (error) {
        console.log(error);
        
    }
}