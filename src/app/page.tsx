'use client'
import { Button } from "@/components/ui/button";
import { CustomDrawer } from "@/components/DrawerCustom";
import { PaginationCustom } from "@/components/PaginationCustom";
import { fetchCharacters } from "@/lib/actions";
import { UserSheet } from "@/components/UserSheet";
import NewPostDialog from "@/components/newPostDialog";
import { fetchPosts } from '@/lib/fetchPosts';
import { useEffect, useState } from 'react';
// import { UsernameProfilePicture } from "@/components/UsernameProfilePicture";

// const isAuthenticated = userAuth.isAuthenticated;


export default function Home({
  searchParams
}: {
  searchParams?: {
    query: string;
    page: number;
  }
}) {


  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
        try {

            fetchPosts(1).then((arrayOfPosts) => {
                setPosts(arrayOfPosts); // @ts-ignore
            });

        } catch (error) {
            console.error('Error fetching characters:', error);
        }
    };

    fetchData();
}, []);


  return (
    <main>
      <div className="flex flex-col md:flex-row justify-center items-center 
      w-full overflow-hidden">
        <div className="flex flex-col w-10/12 pb-10 sm:pl-2 md:pl-10 lg:pl-24">




          <section className="text-center m-1 gap-2 py-10 my-6">

            <div className="h-32 sm:h-40 flex justify-center items-center -my-12 -mx-4
            xl:-mx-4 rounded-2xl bg-cover bg-no-repeat
            md:active:scale-y-105 md:active:scale-x-95 md:hover:transition-transform 
             md:hover:brightness-150 hover:animate-none cursor-pointer
              animate-brightness-125 duration-6000"
              style={{ backgroundImage: "url('https://pbs.twimg.com/media/GISySMobgAAiArK?format=jpg&name=medium')" }}>
              <h1 className="select-none p-4 font-extrabold text-lg sm:text-3xl
              transition hover:animate-in ease-in-out ">
                Welcome to SpaceShip Forum!
              </h1>

              {/* Container of logos, info */}
            {/* <div className="flex flex-row justify-center mt-0 ml-12
            select-all p-4 cursor-pointer font-extrabold text-lg sm:text-3xl 
              transition ">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" 
              className="bi bi-info-circle-fill " viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
    </svg>
            </div> */}


            </div>

            <section className="h-auto py-2 md:hidden mt-10 -mb-24">
              <UserSheet>
              </UserSheet>
            </section>

            <div className="flex flex-row justify-center mt-20 mb-4 md:ml-40 xl:ml-96">
              <Button className='hidden md:py-4 md:flex xl:ml-0'
                variant={"outline"}>GitHub</Button>
              <NewPostDialog></NewPostDialog>
            </div>



            <div className="containerLeftCente flex flex-col sm:flex-row w-full">
              
              
              <div className="flex-row md:flex-col w-3/12 mt-6 h-screen 
              justify-start hidden lg:inline-flex -ml-10 mr-14">
                <section className="h-auto py-2 ">
                  <UserSheet>
                  </UserSheet>
                </section>

                <section className="bg-blue-600/40 h-auto py-6 rounded-lg my-20 m-4">
                  <p>More widgets here! aaaaa</p>

                </section>
              </div>

              <div >
                  {
                  posts?.map((post,index) =>{
                    return <CustomDrawer key={index} data={post} />
                  })  
                  }
              </div>

            </div>

          </section>
          <PaginationCustom currentPage={1} totalPages={10} />
        </div>




        <div className="flex-row md:flex-col w-2/12 mt-6 h-screen self-start hidden md:inline-flex">
          <section className="h-auto py-2 ml-10">
            <UserSheet>
            </UserSheet>
          </section>
          <section className="bg-blue-600/40 h-auto py-6 rounded-lg my-20 m-4 hidden xl:block">
            <p>Section log-like:
              NEW_USER_01 has commented on POST_NAME...</p>
            <p>Section log-like:
              NEW_USER_01 has commented on POST_NAME...</p>
            <p>Section log-like:
              NEW_USER_01 has commented on POST_NAME...</p>
          </section>
        </div>


      </div>


    </main >

  );
}