import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CustomDrawer } from "@/components/DrawerCustom";
import { PaginationCustom } from "@/components/PaginationCustom";
import { CustomFooter } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Link from 'next/link';

export default function AccountPage() {
    return (

        <main className="justify-center items-center">

            <div className="flex flex-col sm:flex-row justify-center items-center w-full">
                <div className="flex flex-col w-8/12 pb-10">
                    <section className="flex flex-col text-center m-1 gap-2 py-10 my-6"
                        style={{ backgroundColor: 'var(--color-body-general)', borderColor: 'var(--muted-foreground)' }}>

                        <Button variant={"outline"}>Space-Ship-Forum - My Account Section</Button>
                        <Button variant={"outline"}>
                            <Link href="/Login">
                                <button className="text-gray-300 hover:bg-teal-500/70 hover:text-white px-3 py-2 
                                rounded-md text-sm font-medium">You do not have an account?</button>
                            </Link>
                        </Button>
                    </section>
                    <PaginationCustom currentPage={1} totalPages={10} />

                </div>

            </div>


        </main >

    );
}
