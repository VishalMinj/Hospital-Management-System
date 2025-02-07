import { getAccessToken } from "../auth/tokenUtils";

export const TransectionsAPI = async () => {
  const response =await fetch(
    `${import.meta.env.VITE_BACKEND_ENDPOINT}/payments/transactions/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
    }
  );
  if (!response.ok) {
    
    
    throw new Error("Something went wrong");
  }
  return response.json()
};
