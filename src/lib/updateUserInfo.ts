import { updateProfile } from "firebase/auth";

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
    try {
        await updateProfile(user, {
            displayName: newDisplayName,
            photoURL: newProfileURL || 'https://pbs.twimg.com/profile_images/1737295128379748352/dmNoLspF_400x400.jpg'
        });
        console.log('displayName has been changed');
        return user;
    } catch (error) {
        console.log('Error at immediatelyChangeDisplayName / updateProfile:', error);
        return null;
    }
};

export default updateUserInfo;
