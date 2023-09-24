import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACDc_4ft2FvKZHwKhK5Ptpg0gw3Xb-CDs",
  authDomain: "nwitter-reloaded-bde7f.firebaseapp.com",
  projectId: "nwitter-reloaded-bde7f",
  storageBucket: "nwitter-reloaded-bde7f.appspot.com",
  messagingSenderId: "590109113674",
  appId: "1:590109113674:web:94724439ca3f52b18dd5b3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 