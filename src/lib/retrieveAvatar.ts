import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '@/app/firebase/firebaseConfig';


export const retrieveAvatar = async (userId) => {
    try {
        const profileImageRef = ref(storage, `users/${userId}/profileImage.jpg`);
        
        const downloadURL = await getDownloadURL(profileImageRef);
        return downloadURL;
    } catch (error) {
        console.error('Error retrieving the avatar:', error);
        return null;
    }
};

export default retrieveAvatar;