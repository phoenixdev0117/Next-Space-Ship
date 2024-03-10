'use server'

export async function fetchAllPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

export async function fetchPostById(id: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}

export async function postNewPostFirebase(data: any) {
    //TODO: We need to validate if the user is logged in, only then we can post a new post
    // with his user id and username in it (FirebaseStorage service to push posts, not Storage)..
    // Important: this funciton has to return a boolean value, and al the response of posts generadted by firebase.

    console.log('trying post:', data)

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    return [true, data]; // Here, data is the data for the form, we need to change this to the response of the post in firebase.
}

export async function postNewImageFirebase(data: any) {
    //TODO: We need to validate if the user is logged in, only then we can post a new image
    // in the database (Storage service to push images, not FirebaseStorage).
    console.log('trying post a new image:', data)
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    return res.json();
}

// Delete this fetch here below when we have the firebase functionality,
// this is only for testing purposes

interface Character {
    name: string;
    justu: Array<string> | string;
    images: string;
}

export async function fetchCharacters(): Promise<Character[]> {
    try {
        const response = await fetch("https://narutodb.xyz/api/character?page=1&limit=20");
        if (!response.ok) {
            throw new Error("Failed to fetch characters");
        }
        const data = await response.json();
        return data.characters;
    } catch (error) {
        console.error("Error fetching characters:", error);
        return [];
    }
}