import { getDocs, collection } from 'firebase/firestore';
'use client'
import { Button } from "@/components/ui/button";
import { CustomDrawer } from "@/components/DrawerCustom";
import { PaginationCustom } from "@/components/PaginationCustom";
import { fetchCharacters } from "@/lib/actions";
import { UserSheet } from "@/components/UserSheet";
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import NewPostDialog from "@/components/newPostDialog";
import {fetchPostById} from '@/lib/retrievePost'
import Image from 'next/image';
import {retrieveAvatar} from '@/lib/retrieveAvatar'
import { useRouter } from 'next/navigation';

interface DataAfterPost {
    title: string;
    content: string;
    category: string;
    fromUserId: string;
    postFinalName: string;
    postDate: Date;
    usernameToDisplay: string;
}

export default function Home({
    ...props
}: {
    searchParams?: {
        query: string;
        page: number;
    }
}) {

    const searchParams = useSearchParams();
    let pathname = usePathname();
    pathname = pathname.replace('/post/', '')
    const pathNumber = Number(pathname);
    const router = useRouter();


    const [postData, setPostData] = useState<any>(null);
    const [avatar, setAvatar] = useState<string>('/logo.jpeg');
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const retrievedPost = await fetchPostById(pathname);
                setPostData(retrievedPost);
                return retrievedPost.fromUserId;
            } catch (error) {
                console.error('Error fetching characters:', error);
                return null;
            }
        };

        fetchData().then((userId) => {
            console.log('userId', userId)

            if (userId !== null) {
                const avatarFunc = async (userId) =>{
                    const retrievedAvatar = await retrieveAvatar(userId);
                    setAvatar(retrievedAvatar);
                    return retrievedAvatar;
                }
    
                avatarFunc(userId);
            }


        });


    }, []);

    useEffect(() => {
        console.log('retrieveeee PostData changed:', postData);
    }, [postData]);

    // const currentPageNumber = Number(searchParams.get('page'));

    // for (const character of characters) {
    //   const { name, images } = character;
    // }

    return (

        <main>
            <div className="flex flex-col md:flex-row justify-center items-center w-full">
                <div className="flex flex-col w-8/12 pb-10">
                    <section className="text-center m-1 gap-2 py-10">
                        <div className="flex flex-col sm:flex-row justify-center ">
                            {/* <Button className='py-5 mb-4 sm:my-0 mx-auto sm:mx-10'
                                variant={"outline"}>
                                Page {pathNumber}</Button> */}
                            <NewPostDialog></NewPostDialog>
                        </div>
                        {pathNumber > 1 ? (
                            <div className='hidden sm:flex rounded-3xl 
                            py-1 mt-10 '>
                                <PaginationCustom
                                    currentPage={pathNumber} totalPages={10} />
                            </div>
                        ) : null}

                        {postData ? (
                                <>
                                    <h1 className='font-extrabold text-4xl'>{postData?.title}</h1>
                                    <p>{postData?.content}</p>
                                    {/* <p>{postData?.fromUserId}</p> */}
                                    {/* <p>{postData?.postFinalName}</p> */}

                                    <Image 
                                onClick={() => {
                                    router.push(`/profile/${postData?.fromUserId}`);
                                }}
                                    className="mx-auto object-cover rounded-2xl 
                                    hover:brightness-110 cursor-pointer
                            active:scale-95
                            hover:scale-110 transition duration-150 ease-in-out 
                            hover:rounded-lg hover:border-2 border-white/100"
                            src={`${avatar || '/logo.jpeg'}`}
                            alt={`Avatar of author of the post - ${postData?.fromUserId}`}
                            width={100}
                            style={{ width: '120px', height: '120px' }}
                            height={100}
                        
                        ></Image>

                                    <p>{`From: ${postData?.usernameToDisplay}`}</p>

                                    <p>{`Category: ${postData?.category}`}</p>


                                    <p className='bg-red-500'>{postData?.postDate.toString()}</p>
                            </>
                            ):
                        
                        (<>
<div className="flex flex-col justify-center pt-8 items-center">
                                    <div className="animate-spin rounded-full h-40 w-40 border-t-4
                                     border-cyan-500">
                                    </div>
                                    <span className="my-10 text-md mx-auto font-extrabold text-xl">Retrieving post...</span>
                                </div>
                            </>
                        
                        )}
                    </section>
                    <PaginationCustom currentPage={pathNumber} totalPages={10} />

                </div>

                <div className="flex-row md:flex-col w-2/12 mt-6 h-screen self-start hidden 
                lg:inline-flex">
                    <section className="h-auto py-2">
                        <UserSheet>
                        </UserSheet>
                    </section>
                    <section className="bg-blue-600/40 h-auto py-6 rounded-lg">
                        <p>MORE INFO HERE!!!!!!!!</p>
                    </section>
                </div>


            </div>


        </main >

    );
}