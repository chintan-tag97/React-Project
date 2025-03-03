import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJrMRG_r55b7LiDwva194HmsnH2CbvZfU",
  authDomain: "design-components.firebaseapp.com",
  projectId: "design-components",
  storageBucket: "design-components.firebasestorage.app",
  messagingSenderId: "307407001013",
  appId: "1:307407001013:web:d0660bda8a66f6cfbe35fc",
  measurementId: "G-YSND8Q3FVY"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
