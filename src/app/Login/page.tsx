import Image from "next/image";
import { LoginTabs } from "@/components/LoginTabs";

export default function RegisterPage() {
    return (

        <main className="justify-center items-center">

            <div className="flex flex-col sm:flex-row justify-center items-center w-full">
                <div className="flex flex-col w-8/12 pb-10">
                    <section className="text-center m-1 gap-2 py-10 my-6 
                     border-colorSecondary border-solid border-2 rounded-md
                     
                     bg-gradient-to-tr 
                    bg-sky-800/70 bg-from-blue-600 bg-via-red-500 bg-to-black
                    
                    flex flex-col 
                     border-white/60 
                     ">
                        <Image className="mx-auto sm:h-26 sm:w-26 lg:mt-[1px] rounded-full
                        -my-8"
                            src="/logo.jpeg"
                            alt='SS Forum Logo'
                            width={80}
                            height={80}
                        >
                            
                        </Image>
                        <h1 className="border-t-2 border-b-2 border-white/50 my-10 p-2
                         font-extrabold text-xl sm:text-2xl">SS Forum</h1>

                        <LoginTabs>

                        </LoginTabs>

                    </section>
                </div>
            </div>


        </main >

    );
}
