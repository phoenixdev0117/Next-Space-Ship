import React, { useEffect, useState, useContext } from 'react'
import { auth, database, storage } from '@/app/firebase/firebaseConfig.js';
import { doc, getDoc, addDoc, collection, onSnapshot } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable, uploadBytes } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { updateUserInfo } from '@/lib/updateUserInfo';
// import { usePathname } from 'next/navigation';

const FirebaseUploadAvatar = async (userInfo, imageURL) => {


    // let pathname = usePathname();
    // pathname = pathname.replace('/', '');
    // let pathNumber = 0
    // pathNumber = Number(pathname);



    const uploadImage = async (userInfo, imageURL) => {

        const storageRef = ref(storage, `users/${userInfo?.uid}/profileImage.jpg`);
        const response = await fetch(imageURL);
        const blob = await response.blob();
        const uploadTask = uploadBytesResumable(storageRef, blob);

        const nowDownloadAsync = async (userInfo, imageURL) => {
            try {
                const res = await downloadImage(userInfo, imageURL)
                return res;
            } catch (error) {
                console.log('Error at downloading the image', error);
                return null
            }

        }

        const downloadImage = async (userInfo, imageURL) => {
            const storageRef = ref(storage, `users/${userInfo?.uid}/profileImage.jpg`);
            const url = await getDownloadURL(storageRef);
            return url;
        }
        uploadTask.on('state_changed',
            (snapshot) => {
                console.log('Uploading image...');
            },
            (error) => {
                console.log('Error at uploading the image', error);
                return null
            },
            async () => {
                const url = await nowDownloadAsync(userInfo, imageURL);
                // console.log('BBBBB', url)
                const responseUpdate = await updateUserInfo(userInfo, userInfo?.displayName, url);
                return url;
            },
        );
    }

    try {
        const res = await uploadImage(userInfo, imageURL);
        return res;
    } catch (error) {
        console.error('Error:', error);
    }


}

const FirebaseDownloadAvatar = (userInfo, imageURL) => {
    //TODO: Unfinished function, that's why looks like a mess (or a copy from above function)

    const uploadImage = async (userInfo, imageURL) => {

        const metadata = {
            contentType: 'image/jpeg' // MIME type of the file
        };
        const storageRef = ref(storage, `users/${userInfo?.user?.uid}/profileImage.jpg`);
        const response = await fetch(imageURL);
        const blob = await response.blob();
        const uploadTask = uploadBytesResumable(storageRef, blob);

        const downloadImage = async (userInfo, imageURL) => {
            const storageRef = ref(storage, `users/${userInfo?.user?.uid}/profileImage.jpg`);
            const url = await getDownloadURL(storageRef);
            return url;
        }
        downloadImage(userInfo, imageURL)

        const downloadResponse = downloadImage(userInfo, imageURL);
        if (downloadResponse !== null) {
            console.log('Avatar download successfully', downloadResponse)
            return downloadResponse;
        } else {
            console.log('Error at downloading the image', downloadResponse)
            return null
        }
    }
    uploadImage(userInfo, imageURL)

}

export { FirebaseUploadAvatar, FirebaseDownloadAvatar }