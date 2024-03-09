import { Button } from "@/components/ui/button";
import { CustomDrawer } from "@/components/DrawerCustom";
import { PaginationCustom } from "@/components/PaginationCustom";
import { fetchCharacters } from "@/lib/narutoFetching";
import { UserSheet } from "@/components/UserSheet";

export default async function Home({
  searchParams
}: {
  searchParams?: {
    query: string;
    page: number;
  }
}) {


  const characters = await fetchCharacters();

  // for (const character of characters) {
  //   const { name, images } = character;
  // }
  console.log(searchParams)

  return (

    <main>
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div className="flex flex-col w-8/12 pb-10">
          <section className="text-center m-1 gap-2 py-10 my-6"
            style={{ backgroundColor: 'var(--color-body-general)', borderColor: 'var(--muted-foreground)' }}>

            <Button variant={"outline"}>Space-Ship-Forum Button</Button>
            <h1>The initial posts are settled here below</h1>

            <CustomDrawer data={characters[13]} />
            <CustomDrawer data={characters[6]} />
            <CustomDrawer data={characters[15]} />
            <CustomDrawer data={characters[17]} />
            <CustomDrawer data={characters[1]} />
            <CustomDrawer data={characters[18]} />
          </section>
          <PaginationCustom currentPage={1} totalPages={10} />

        </div>

        <div className="flex flex-row md:flex-col w-3/12 mt-6 h-screen self-start">
          <section className="h-auto py-2">
            <UserSheet data={characters[0]}>
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
7