import { updateProfile } from "firebase/auth";
import { auth } from "@/app/firebase/firebaseConfig";
import { getUsernameInfo } from "@/lib/getUsernameInfo";


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

    const userAuth = user;
    console.log('auth' ,auth.currentUser)
    console.log('AAAAAAAAAAA', user)
    // const userAuth = await getUsernameInfo(); //TODO: Check if the entire function is working properly


    // if (!newProfileURL) {
    //     newProfileURL = 'https://pbs.twimg.com/profile_images/1737295128379748352/dmNoLspF_400x400.jpg';
    // }
    
    try {
        const updatedUserProfile = await updateProfile(auth.currentUser, {
            displayName: newDisplayName,
            photoURL: newProfileURL,
        });
        console.log('RESSSS', updatedUserProfile)
        console.log('displayName has been from', user.displayName, 'changed to', newDisplayName);
        if (userAuth) {
            // userAuth.displayName = newDisplayName;
            // userAuth.photoURL = newProfileURL;
            const serializedUser = JSON.stringify(userAuth);
            localStorage.setItem('_firebaseUserEntityWithPhotoAndUsername', serializedUser);
            window.location.href = `/Account`;
        }

        // return user;
    } catch (error) {
        console.log('Error at immediatelyChangeDisplayName / updateProfile:', error);
        return null;
    }
};

export default updateUserInfo;
