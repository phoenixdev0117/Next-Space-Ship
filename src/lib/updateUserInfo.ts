import { updateProfile } from "firebase/auth";
import { auth } from "@/app/firebase/firebaseConfig";
interface UserData {
    user: any,
    displayName: string;
    photoURL: string;
}

export const updateUserInfo = async (
    user: any,
    newDisplayName: string,
    newProfileURL: string | undefined
): Promise<UserData | null> => {


    const userAuth = auth.currentUser;

    if (!newProfileURL) {
        newProfileURL = 'https://pbs.twimg.com/profile_images/1737295128379748352/dmNoLspF_400x400.jpg';
    }

    try {
        await updateProfile(userAuth, {
            displayName: newDisplayName,
            photoURL: newProfileURL,
        });
        console.log('displayName has been from', user.displayName, 'changed to', newDisplayName);
        if (userAuth) {
            userAuth.displayName = newDisplayName;
            userAuth.photoURL = newProfileURL;
            const serializedUser = JSON.stringify(userAuth);
            localStorage.setItem('_firebaseUserEntityWithPhotoAndUsername', serializedUser);
            window.location.href = `/Account`;
        }

        return user;
    } catch (error) {
        console.log('Error at immediatelyChangeDisplayName / updateProfile:', error);
        return null;
    }
};

export default updateUserInfo;
