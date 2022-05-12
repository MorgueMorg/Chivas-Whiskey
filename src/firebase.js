import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_JMEtISgeo_11MwzzHLkCgbviyGp2lzc",
  authDomain: "chivas-8eb6d.firebaseapp.com",
  projectId: "chivas-8eb6d",
  storageBucket: "chivas-8eb6d.appspot.com",
  messagingSenderId: "300931816225",
  appId: "1:300931816225:web:4c22297c1a440aace9bc60",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
