import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJOf9xsH0ekR-DGZAMRoi1c4tY1TWCvsQ",
  authDomain: "netflix-3e7a1.firebaseapp.com",
  projectId: "netflix-3e7a1",
  storageBucket: "netflix-3e7a1.appspot.com",
  messagingSenderId: "669287838927",
  appId: "1:669287838927:web:2cb4948bdd82ee4a2733ba",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
