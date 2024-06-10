'use client'
import { Button } from "@/components/ui/button";
import { CustomDrawer } from "@/components/DrawerCustom";
import { PaginationCustom } from "@/components/PaginationCustom";
import { fetchCharacters } from "@/lib/actions";
import { UserSheet } from "@/components/UserSheet";
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import NewPostDialog from "@/components/newPostDialog";
import {fetchPosts} from '@/lib/fetchPosts'

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


    const [characters, setCharacters] = useState<any[]>([]);
    const [posts, setPosts] = useState<DataAfterPost[]>([]);

    const searchParams = useSearchParams();
    let pathname = usePathname();
    pathname = pathname.replace('/', '');
    let pathNumber = 1;
    pathNumber = Number(pathname);


    useEffect(() => {
        const fetchData = async () => {
            try {

                fetchPosts(pathNumber).then((arrayOfPosts) => {
                    setPosts(arrayOfPosts);
                    console.log('catttttt', arrayOfPosts)
                });

            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };

        fetchData();
    }, []);



    // const currentPageNumber = Number(searchParams.get('page'));

    // for (const character of characters) {
    //   const { name, images } = character;
    // }

    return (

        <main>
      <div className="flex flex-col md:flex-row justify-center items-center 
      w-full overflow-hidden">
        <div className="flex flex-col w-11/12 pb-10">




          <section className="text-center m-1 gap-2 py-10 my-6">




                        <div className="flex flex-col -my-4 -mt-10 sm:flex-row justify-center ">
                            {/* <Button className='py-5 mb-4 sm:my-0 mx-auto sm:mx-10'
                                variant={"outline"}>
                                Page {pathNumber}</Button> */}
                            <NewPostDialog></NewPostDialog>
                        </div>

                        
                        {pathNumber > 1 ? (
                            <div className='flex sm:flex rounded-3xl
                            py-1 mt-10 '>
                                <PaginationCustom
                                    currentPage={pathNumber} totalPages={10} />
                            </div>
                        ) : null}

                        {posts.length > 0 ? (
            <div className="containerLeftCente flex flex-col sm:flex-row w-full">
              
              
            <div className="flex-row md:flex-col w-3/12 mt-6 h-screen 
            justify-start hidden lg:inline-flex -ml-10 mr-14">
              <section className="h-auto py-2 ">
                <UserSheet>
                </UserSheet>
              </section>

              <section className="bg-blue-600/40 h-auto py-6 rounded-lg my-20 m-4">
                <p>More widgets here! aaaaa</p>
                <p>
                </p>
              </section>
            </div>

            <div className="sm:ml-16 lg:ml-0">
                {posts?.map((post, index) => (
                    <CustomDrawer key={index} data={post} />))
                }

              {posts.length === 0 ? (
                <div className="flex flex-col justify-center pt-8 items-center">
                    <span className="my-10 text-md">No posts found...</span>
                    </div>) : null}
            </div>
            

          </div>
                        ) :
                            (
                                
                                <div className="flex flex-col justify-center pt-8 items-center">
                                    <div className="animate-spin rounded-full h-40 w-40 border-t-4
                                     border-cyan-500">
                                    </div>
                                    <span className="my-10 text-md">{posts.length === 0 ? (
                <div className="flex flex-col justify-center pt-8 items-center">
                    <span className="my-10 text-md">Sorry, no posts found here.</span>
                    </div>) : null}</span>
                                </div>
                            )}
                    </section>
                    <PaginationCustom currentPage={pathNumber} totalPages={10}/>

                </div>

                <div className="flex-row md:flex-col w-2/12 mt-6 h-screen self-start hidden 
                lg:inline-flex">
                    <section className="h-auto py-2">
                        <UserSheet>
                        </UserSheet>
                    </section>
                    <section className="bg-blue-600/40 h-auto py-6 rounded-lg">
                        <p>Section log-like:
                            NEW_USER_01 has commented on POST_NAME...</p>
                    </section>
                </div>


            </div>


        </main >

    );
}