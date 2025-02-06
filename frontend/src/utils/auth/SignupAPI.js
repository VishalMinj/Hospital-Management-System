export default async function SignupAPI(...signupData) {
  try {
    console.log(signupData);

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_ENDPOINT}/auth/registration/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: signupData[0],
          email: signupData[1],
          password1: signupData[2],
          password2: signupData[3],
          first_name: signupData[4],
          last_name: signupData[5],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
