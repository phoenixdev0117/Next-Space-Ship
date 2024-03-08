import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CustomDrawer } from "@/components/DrawerCustom";
import { PaginationCustom } from "@/components/PaginationCustom";
import { CustomFooter } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { LoginTabs } from "@/components/LoginTabs";

export default function RegisterPage() {
    return (

        <main className="justify-center items-center">

            <div className="flex flex-col sm:flex-row justify-center items-center w-full">
                <div className="flex flex-col w-8/12 pb-10">
                    <section className="text-center m-1 gap-2 py-10 my-6 bg-colorPrimaryDark
                     border-colorSecondary border-solid border-2 rounded-md">

                        <Button variant={"outline"}>Fire Ship Forum</Button>
                        <h1 className="my-10">Log in:</h1>

                        <LoginTabs>

                        </LoginTabs>

                    </section>
                </div>
            </div>


        </main >

    );
}
