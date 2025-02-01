import { EncryptToken } from "./tokenCrypto";
export default function GoogleLoginAPI(code) {
  return new Promise((resolve, reject) => {
    fetch(
      `${import.meta.env.VITE_BACKEND_ENDPOINT}/auth/google-login/callback/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code,
        }),
      }
    )
      .then((response) => {
        if (!response.ok)
          return response.json().then((errorData) => {
            reject(Error(errorData));
          });
        return response.json();
      })

      .then((data) => {
        EncryptToken(data.access, data.refresh);
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}
