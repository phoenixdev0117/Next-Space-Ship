'use client'
import { doc, getDoc } from 'firebase/firestore';
import { database } from '@/app/firebase/firebaseConfig.js';


interface DataAfterPost {
    title: string;
    content: string;
    category: string;
    fromUserId: string;
    postFinalName: string;
    postDate: Date;
}

export const fetchPostById = async (postId: string): Promise<DataAfterPost | null> => {
    try {

        const postRef = doc(database, 'posts', postId);
        // Retrieve the document from Firestore
        const docSnapshot = await getDoc(postRef);

        
            // Extraer los datos del documento y convertir la fecha a tipo Date
            const postData = docSnapshot.data();

            const returnPost = {
                fromUserId: postData.fromUserId,
                postFinalName: postData.postFinalName,
                postDate: postData.postDate.toDate(),
                
                title: postData.title,
                content: postData.content,
                category: postData.category,
                usernameToDisplay: postData.usernameToDisplay,
            
        } as DataAfterPost;
        return returnPost;
    } catch (error) {
        console.error(`Error fetching post: ${postId}`, error);
        return null;
    }
};