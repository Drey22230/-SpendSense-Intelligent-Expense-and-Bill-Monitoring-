import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDOklRl383yV8JfZPp2D3yUUcsE5sw4JNU",
  authDomain: "bill-trucking-system.firebaseapp.com",
  projectId: "bill-trucking-system",
  storageBucket: "bill-trucking-system.firebasestorage.app",
  messagingSenderId: "64017023415",
  appId: "1:64017023415:web:381a5e8e8a796f4bfea832",
  measurementId: "G-Y4ND52KSDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);