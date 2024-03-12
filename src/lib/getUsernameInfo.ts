// here we are getting all the user info from the firebase auth object
// like the user's email, username, uid, profile picture link, etc.

import { auth } from "@/app/firebase/firebaseConfig";




export const getUsernameInfo = async () => {
    let userObject;
    try {
        const userString = localStorage.getItem('_firebaseUserEntityWithPhotoAndUsername');
        if (userString !== null) {
            userObject = JSON.parse(userString);
        }
    }
    catch (error) {
        console.log('Error at getUsernameInfo:', error);
        return null
    }

    if (userObject !== null) {
        const profile = userObject;
        console.log("  Provider-specific UID: " + profile?.uid);
        console.log("  Name: " + profile?.displayName);
        console.log("  Email: " + profile?.email);
        console.log("  Photo URL: " + profile?.photoURL);

        if (profile !== null && profile !== undefined) {
            const { photoURL, uid, email, displayName } = profile;
            return profile;
        }

    }
    return null;
}

export default getUsernameInfo;