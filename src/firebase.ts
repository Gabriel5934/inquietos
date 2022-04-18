import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
	apiKey: 'AIzaSyBIao2LuScDC-HarbmWksgdVS9-TDPmcAs',
	authDomain: 'inquietos-3662b.firebaseapp.com',
	projectId: 'inquietos-3662b',
	storageBucket: 'inquietos-3662b.appspot.com',
	messagingSenderId: '341738130413',
	appId: '1:341738130413:web:2e5c94e0edbdf1167235e4'
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
