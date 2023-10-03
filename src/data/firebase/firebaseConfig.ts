
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCdvDvhD3Rr57_pl6ywzLk4DOXvOKUk89E",
  authDomain: "proportfolio-f16cd.firebaseapp.com",
  projectId: "proportfolio-f16cd",
  storageBucket: "proportfolio-f16cd.appspot.com",
  messagingSenderId: "93996836322",
  appId: "1:93996836322:web:fb0b4943d62671a0d105bb",
  measurementId: "G-1PX3BSBB31"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);