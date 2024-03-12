import { Button } from "@/components/ui/button";
import { CustomDrawer } from "@/components/DrawerCustom";
import { PaginationCustom } from "@/components/PaginationCustom";
import { fetchCharacters } from "@/lib/actions";
import { UserSheet } from "@/components/UserSheet";
import NewPostDialog from "@/components/newPostDialog";
// import { UsernameProfilePicture } from "@/components/UsernameProfilePicture";


// const isAuthenticated = userAuth.isAuthenticated;


export default async function Home({
  searchParams
}: {
  searchParams?: {
    query: string;
    page: number;
  }
}) {


  const characters = await fetchCharacters();

  return (
    <main>
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div className="flex flex-col w-8/12 pb-10">



          <section className="text-center m-1 gap-2 py-10 my-6 
          ">

            <div className="h-32 sm:h-40 flex justify-center items-center -my-12 -mx-4 
            xl:-mx-4 rounded-2xl bg-cover bg-no-repeat"
              style={{ backgroundImage: "url('https://pbs.twimg.com/media/GISySMobgAAiArK?format=jpg&name=medium')" }}>

              <h1 className="select-none p-4 font-extrabold text-lg sm:text-3xl 
              transition hover:animate-in ease-in-out hover:scale-110">
                Welcome to SpaceShip Forum!
              </h1>

            </div>

            <section className="h-auto py-2 md:hidden mt-10 -mb-24">
              <UserSheet data={characters[0]}>
              </UserSheet>
            </section>

            <div className="flex flex-row justify-center mt-20 mb-4">
              <Button className='hidden py-4 sm:flex'
                variant={"outline"}>Search for ...</Button>
              <NewPostDialog></NewPostDialog>
            </div>



            <div className="containerLeftCente flex flex-col sm:flex-row w-full">
              <div className="flex-row md:flex-col w-3/12 mt-6 h-screen justify-start hidden md:inline-flex -ml-10 mr-14">
                <section className="h-auto py-2 ">
                  <UserSheet data={characters[0]}>
                  </UserSheet>
                </section>

                <section className="bg-blue-600/40 h-auto py-6 rounded-lg my-20 m-4">
                  <p>More widgets here! aaaaa</p>
                  <p>
                  </p>
                </section>
              </div>

              <div>
                <CustomDrawer data={characters[13]} />
                <CustomDrawer data={characters[6]} />
                <CustomDrawer data={characters[15]} />
                <CustomDrawer data={characters[17]} />
                <CustomDrawer data={characters[1]} />
                <CustomDrawer data={characters[18]} />
              </div>

            </div>

          </section>
          <PaginationCustom currentPage={1} totalPages={10} />
        </div>




        <div className="flex-row md:flex-col w-2/12 mt-6 h-screen self-start hidden md:inline-flex">
          <section className="h-auto py-2">
            <UserSheet data={characters[0]}>
            </UserSheet>
          </section>
          <section className="bg-blue-600/40 h-auto py-6 rounded-lg my-20 m-4">
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
7