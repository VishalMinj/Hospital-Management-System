import { DecryptToken } from "./tokenCrypto";


const getAccessToken = () => {
  let token = localStorage.getItem("access");
  if (!token) return null;
  token = DecryptToken(token);
  return token;
};
const getRefreshToken = () => {
  let token = localStorage.getItem("refresh");
  if (!token) return null;
  token = DecryptToken(token);
  return token;
};
const isValiedAccess = (token) => {
  return new Promise((resolve, reject) => {
    fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/auth/token/verify/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    })
      .then((response) => {
        if (!response.ok)
          return response.json().then((errorData) => {
            reject(Error(errorData));
          });
        resolve(true);
      })
      .catch((errorData) => {
        reject(errorData);
      });
  });
};



export {
  getAccessToken,
  getRefreshToken,
  isValiedAccess,
};
