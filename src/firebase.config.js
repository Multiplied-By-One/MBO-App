import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth"
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDu8n17p63quhK72NsQJ0QDh6gWAO_v_SA",
  authDomain: "mbo-app-1df4e.firebaseapp.com",
  databaseURL: "https://mbo-app-1df4e-default-rtdb.firebaseio.com",
  projectId: "mbo-app-1df4e",
  storageBucket: "mbo-app-1df4e.appspot.com",
  messagingSenderId: "994837742283",
  appId: "1:994837742283:web:c9edb4ac24cc993b51d14e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const firestore = getFirestore(app)

// Attach emulator in the event it has been enabled
if(
  process.env.NODE_ENV === 'development' &&
  process.env.REACT_APP_FIREBASE_EMULATOR_ENABLED === 'true'
) {
  connectAuthEmulator(auth, process.env.REACT_APP_FIREBASE_AUTH_EMULATOR_HOST)
  connectFirestoreEmulator(
    firestore,
    process.env.REACT_APP_FIREBASE_FIRESTORE_EMULATOR_HOST,
    Number(process.env.REACT_APP_FIREBASE_FIRESTORE_EMULATOR_PORT)
  )

}

