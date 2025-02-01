export default function SignupAPI(signupData) {
  return new Promise((resolve, reject) => {
    fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/auth/registration/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((response) => {
        if (!response.ok)
          return response.json().then((errorData) => {
            reject(Error(errorData));
          });
        return response.json();
      })
      .then((data) => {
        console.log(data);
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
}
