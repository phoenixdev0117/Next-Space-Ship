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
            photoURL: newProfileURL || 'https://pbs.twimg.com/media/GHm9vrhWEAARdZx?format=png&name=900x900'
        });
        console.log('displayName has been changed');
        return user;
    } catch (error) {
        console.log('Error at immediatelyChangeDisplayName/updateProfile:', error);
        return null;
    }
};

export default updateUserInfo;
