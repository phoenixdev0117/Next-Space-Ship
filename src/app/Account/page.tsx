import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CustomDrawer } from "@/components/DrawerCustom";
import { PaginationCustom } from "@/components/PaginationCustom";
import { CustomFooter } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function AccountPage() {
    return (

        <main className="justify-center items-center">

            <div className="flex flex-col sm:flex-row justify-center items-center w-full">
                <div className="flex flex-col w-8/12 pb-10">
                    <section className="text-center m-1 gap-2 py-10 my-6"
                        style={{ backgroundColor: 'var(--color-body-general)', borderColor: 'var(--muted-foreground)' }}>

                        <Button variant={"outline"}>Space-Ship-Forum Button</Button>
                        <h1>MY ACCOUNT PAGE!</h1>

                        <CustomDrawer title="MY ACCOUNT PAGE!" description="MY ACCOUNT PAGE! INFORMATION" />

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
