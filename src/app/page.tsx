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

          <section className="h-auto py-2 sm:hidden">
            <UserSheet data={characters[0]}>
            </UserSheet>
          </section>

          <section className="text-center m-1 gap-2 py-10 my-6 bg-colorBodyGeneral">

            <h1 className="pb-4 font-extrabold text-xl">Welcome to SpaceShip Forum!</h1>

            <div className="flex flex-row justify-center pb-4">
              <Button className='hidden py-5 sm:flex'
                variant={"outline"}>Space Ship Forum</Button>
              <NewPostDialog></NewPostDialog>
            </div>

            <CustomDrawer data={characters[13]} />
            <CustomDrawer data={characters[6]} />
            <CustomDrawer data={characters[15]} />
            <CustomDrawer data={characters[17]} />
            <CustomDrawer data={characters[1]} />
            <CustomDrawer data={characters[18]} />
          </section>
          <PaginationCustom currentPage={1} totalPages={10} />

        </div>

        <div className="flex-row md:flex-col w-3/12 mt-6 h-screen self-start hidden sm:flex">
          <section className="h-auto py-2">
            <UserSheet data={characters[0]}>
            </UserSheet>
          </section>
          <section className="bg-blue-600/40 h-auto py-6 rounded-lg">
            <p>Section log-like:
              NEW_USER_01 has commented on POST_NAME...</p>
            <p>
            </p>
          </section>
        </div>


      </div>


    </main >

  );
}
7