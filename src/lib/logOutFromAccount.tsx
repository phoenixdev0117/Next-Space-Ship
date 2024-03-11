import { auth } from "@/app/firebase/firebaseConfig";



const user = auth.currentUser;




export const logOutFromAccount = async () => {
    let userObject;
    try {

        localStorage.removeItem('_firebaseUserEntityWithPhotoAndUsername');
        return true
    }
    catch (error) {
        console.log('Error at getUsernameInfo:', error);
        return false
    }
}

export default logOutFromAccount;