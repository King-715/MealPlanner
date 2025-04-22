import { initializeApp } from "firebase/app";
import {
	getAuth,
	initializeAuth,
	getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
	apiKey: "AIzaSyD_cGdZWPiIuBLI0lvSgw-1Jg5Z9FSvIRI",
	authDomain: "cuokka-76523.firebaseapp.com",
	projectId: "cuokka-76523",
	storageBucket: "cuokka-76523.firebasestorage.app",
	messagingSenderId: "483652957383",
	appId: "1:483652957383:web:535b3a6f9425cdb3d37ae2",
	measurementId: "G-EXQ8DN1Y43",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage
const auth = initializeAuth(app, {
	persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);

export { auth, db };
export default app;
