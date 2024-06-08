'use client'
// TODO: Everything is working fine since i changed 'use server' to 'use client'
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


// const firebaseConfig = {
//     apiKey: process.env.NEXT_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_FIREBASE_APP_ID,
// };
const firebaseConfig = {
    apiKey: "AIzaSyCKnYjWJAKlxRE7k0NPijFoxGIms3ciD1M",
    authDomain: "ss-forum-c2bee.firebaseapp.com",
    projectId: "ss-forum-c2bee",
    storageBucket: "ss-forum-c2bee.appspot.com",
    messagingSenderId: "798074046923",
    appId: "1:798074046923:web:ecb1a782a6b2ea94d24e4e",
    measurementId: "G-N9LQ52XBSX"
};

// Initialize Firebase for server side rendering
// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
const database = getFirestore(app);
const storage = getStorage(app);

const auth = initializeAuth(app);


export { app, auth, database, storage }

// const analytics = getAnalytics(app);