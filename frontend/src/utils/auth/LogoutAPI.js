import { getAccessToken, getRefreshToken } from "./tokenUtils";

export default function LogoutAPI() {
  return new Promise((resolve, reject) => {
    fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/auth/logout/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
      body: JSON.stringify({
        refresh: getRefreshToken(),
      }),
    })
      .then((response) => {
        if (!response.ok)
          return response.json().then((errorData) => {
            reject(Error(errorData));
          });
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}
