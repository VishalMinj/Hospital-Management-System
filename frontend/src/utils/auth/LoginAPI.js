import { EncryptToken } from "..";

export default function LoginAPI(username, password) {
  return new Promise((resolve, reject) => {
    fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
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
