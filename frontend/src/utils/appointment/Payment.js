import { getAccessToken } from "../auth/tokenUtils";

export const complete_payment = async (
  paymentID,
  orderID,
  signature,
  amount
) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_ENDPOINT}/payments/transactions/complete/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAccessToken()}`,
        },
        body: JSON.stringify({
          payment_id: paymentID,
          order_id: orderID,
          signature: signature,
          amount: amount,
        }),
      }
    );

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Payment failed during completion");
    }
  } catch (error) {
    console.error("Error completing payment:", error);
    throw error;
  }
};

export const get_paymnetID = async (amount) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_ENDPOINT}/payments/transactions/create/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAccessToken()}`,
        },
        body: JSON.stringify({
          amount: amount,
          currency: "INR",
        }),
      }
    );
    const data = await response.json();
    return data.id;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
