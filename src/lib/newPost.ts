'use client'
import {doc , addDoc, collection, setDoc} from 'firebase/firestore'
import { auth } from '@/app/firebase/firebaseConfig.js'
import { database } from '@/app/firebase/firebaseConfig.js'
import { v4 as uuidv4 } from 'uuid';


export const postNewPostFirebase = async (postData) => {
    //validate if the auth user is currently logged in
    if (!auth.currentUser) {
        console.log('user not authenticated')
        return [false, null];
    }

    // We send the user without the email, for security reasons
    try {
        const postId = uuidv4();
        const fromUserId = auth.currentUser.uid;
        const postDate = new Date();
        const postFinalName = `${fromUserId}_${postId}`
        const usernameToDisplay = auth.currentUser.displayName;

        const postObject = {
            usernameToDisplay,
            postDate,
            fromUserId,
            postFinalName,
            ...postData,
        };

        const postRef = doc(database, 'posts', postFinalName);
        await setDoc(postRef, postObject);

        // await addDoc(collection(database, 'posts'), postData);
        console.log('Post has been posted, their data is:', postObject);
        return [true, postObject];
    }
    catch (error) {
        console.error('Error posting new post:', error);
        return [false, null];
    }
}

export default postNewPostFirebase;