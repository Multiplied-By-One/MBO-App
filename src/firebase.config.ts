import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator, Auth } from "firebase/auth"
import { getFirestore, connectFirestoreEmulator, Firestore } from "firebase/firestore";

type FirebaseConfig {
  apiKey: string,
  authDomain: string,
  databaseURL: string,
  projectId: string,
  storageBucket: string,
  messagingSenderId: string,
  appId: string,
}
//@todo remove the api key from git..
const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyDu8n17p63quhK72NsQJ0QDh6gWAO_v_SA",
  authDomain: "mbo-app-1df4e.firebaseapp.com",
  databaseURL: "https://mbo-app-1df4e-default-rtdb.firebaseio.com",
  projectId: "mbo-app-1df4e",
  storageBucket: "mbo-app-1df4e.appspot.com",
  messagingSenderId: "994837742283",
  appId: "1:994837742283:web:c9edb4ac24cc993b51d14e"
};


// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

export const auth: Auth = getAuth(app)
export const firestore: Firestore = getFirestore(app)

// Attach emulator in the event it has been enabled
if(
  import.meta.env.DEV &&
  import.meta.env.VITE_FIREBASE_EMULATOR_ENABLED === 'true'
) {
  connectAuthEmulator(auth, import.meta.env.VITE_FIREBASE_AUTH_EMULATOR_HOST)
  connectFirestoreEmulator(
    firestore,
    import.meta.env.VITE_FIREBASE_FIRESTORE_EMULATOR_HOST,
    Number(import.meta.env.VITE_FIREBASE_FIRESTORE_EMULATOR_PORT)
  )

}

