'use client'
import { collection, getDocs,getDoc, query, orderBy,
     limit, Timestamp } from 'firebase/firestore';
import { database } from '@/app/firebase/firebaseConfig.js';

interface DataAfterPost {
    title: string;
    content: string;
    category: string;
    fromUserId: string;
    postFinalName: string;
    postDate: Date;
    usernameToDisplay: string;
}

export const fetchPosts = async (queryParam: number ): Promise<DataAfterPost | null> => {
    try {

        try {
            const postsPerPage = 6;
            const startIndex = (queryParam - 1) * postsPerPage;
            const endIndex = startIndex + postsPerPage;

            const queryPost = query(
                collection(database, 'posts'),
                orderBy('postDate', 'desc'), 
                limit(endIndex)
            );
    
            const querySnapshot = await getDocs(queryPost);
    
            const posts: DataAfterPost[] = [];
            let currentIndex = 0;
            querySnapshot.forEach((doc) => {
                // We only want to display the posts that are in the current page.
                if (currentIndex >= startIndex && currentIndex < endIndex) { 
                    const postData = doc.data();
                    const post: DataAfterPost = {
                        fromUserId: postData.fromUserId,
                        postFinalName: postData.postFinalName,
                        postDate: postData.postDate.toDate(),
                        title: postData.title,
                        content: postData.content,
                        category: postData.category,
                        usernameToDisplay: postData.usernameToDisplay,
                    };
                    posts.push(post);
                }
                currentIndex++;
            });
            return posts;//TODO: Make an interface for this!

        } catch (error) {
            console.error('Error fetching posts:', error);
            return null;
        }
            
    } catch (error) {
        console.error(`Error fetching post at page number ${queryParam}: `, error);
        return null;
    }
};