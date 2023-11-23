import CryptoJS from 'crypto-js';

const SECRET_KEY = 'MSK';
const TOKEN_KEY = 'MTK';
const EXPIRATION_KEY = 'EMTKA';

export const login = () => {
  const token = 'token_gerado_pelo_servidor';
  const expiration = new Date(new Date().getTime() + 60 * 1000);

  const encryptedToken = CryptoJS.AES.encrypt(token, SECRET_KEY).toString();
  const encryptedExpiration = CryptoJS.AES.encrypt(expiration.toISOString(), SECRET_KEY).toString();

  localStorage.setItem(TOKEN_KEY, encryptedToken);
  localStorage.setItem(EXPIRATION_KEY, encryptedExpiration);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(EXPIRATION_KEY);
};

export const isAuthenticated = () => {
  const encryptedToken = localStorage.getItem(TOKEN_KEY);
  const encryptedExpiration = localStorage.getItem(EXPIRATION_KEY);

  if (!encryptedToken || !encryptedExpiration) {
    return false;
  }

  CryptoJS.AES.decrypt(encryptedToken, SECRET_KEY).toString(CryptoJS.enc.Utf8);
  const expiration = new Date(CryptoJS.AES.decrypt(encryptedExpiration, SECRET_KEY).toString(CryptoJS.enc.Utf8));

  return new Date() < expiration;
};
