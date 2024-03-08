import { Button } from "@/components/ui/button";
import { CustomDrawer } from "@/components/DrawerCustom";
import { PaginationCustom } from "@/components/PaginationCustom";


export default function Home() {
  return (

    <main className="justify-center items-center">

      <div className="flex flex-col sm:flex-row justify-center items-center w-full">
        <div className="flex flex-col w-8/12 pb-10">
          <section className="text-center m-1 gap-2 py-10 my-6"
            style={{ backgroundColor: 'var(--color-body-general)', borderColor: 'var(--muted-foreground)' }}>

            <Button variant={"outline"}>Space-Ship-Forum Button</Button>
            <h1>The initial posts are settled here below</h1>

            <CustomDrawer title="POST DYNAMIC 1" description="POST INFORMATION" />
            <CustomDrawer title="POST DYNAMIC 2" description="POST INFORMATION" />
            <CustomDrawer title="POST DYNAMIC 3" description="POST INFORMATION" />
            <CustomDrawer title="POST DYNAMIC 4" description="POST INFORMATION" />
            <CustomDrawer title="POST DYNAMIC 5" description="POST INFORMATION" />
          </section>
          <PaginationCustom currentPage={1} totalPages={10} onPageChange={() => console.log('1')} />

        </div>

        <div className="flex flex-row sm:flex-col w-3/12 ">
          <section className=" bg-fuchsia-600 h-72">
            Section of widgets 1
          </section>
          <section className="bg-fuchsia-600/40 h-72">
            Section of widgets 2
          </section>
        </div>


      </div>


    </main >

  );
}
