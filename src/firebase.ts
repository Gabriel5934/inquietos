import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
	apiKey: 'AIzaSyBIao2LuScDC-HarbmWksgdVS9-TDPmcAs',
	authDomain: 'inquietos-3662b.firebaseapp.com',
	projectId: 'inquietos-3662b',
	storageBucket: 'inquietos-3662b.appspot.com',
	messagingSenderId: '341738130413',
	appId: '1:341738130413:web:2e5c94e0edbdf1167235e4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
