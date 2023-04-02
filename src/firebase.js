// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC_4WW3t7DN5DFlMh66f033EyMUtemlPFc",
	authDomain: "fir-2f486.firebaseapp.com",
	projectId: "fir-2f486",
	storageBucket: "fir-2f486.appspot.com",
	messagingSenderId: "514945208111",
	appId: "1:514945208111:web:e72f92997fa6d03a975bda",
	measurementId: "G-TG1K90YHN2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
const analytics = getAnalytics(app);

export { auth, db };
