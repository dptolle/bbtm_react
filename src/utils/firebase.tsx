import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6i1IqXtVfVVn7UwYB9ly1L5VsCy6_S5g",
  authDomain: "bbtm-248bb.firebaseapp.com",
  projectId: "bbtm-248bb",
  storageBucket: "bbtm-248bb.appspot.com",
  messagingSenderId: "249496689066",
  appId: "1:249496689066:web:b03572c4eb035f9c95b3d3",
  measurementId: "G-443R403850",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
