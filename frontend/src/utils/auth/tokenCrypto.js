import CryptoJS from "crypto-js";
const secret = import.meta.env.VITE_SECRET_KEY;
const EncryptToken=(access, refresh = "")=> {
  const encrypted_access = CryptoJS.AES.encrypt(access, secret).toString();
  localStorage.setItem("access", encrypted_access);

  if (refresh) {
    const encrypted_refresh = CryptoJS.AES.encrypt(refresh, secret).toString();
    localStorage.setItem("refresh", encrypted_refresh);
  }
}

const DecryptToken=(token)=> {
  const bytes = CryptoJS.AES.decrypt(token, secret);
  const decrypted_token = bytes.toString(CryptoJS.enc.Utf8);
  return decrypted_token;
}

const ClearToken=()=>{
  localStorage.removeItem("access")
  localStorage.removeItem("refresh")
}

export { EncryptToken, DecryptToken ,ClearToken};
