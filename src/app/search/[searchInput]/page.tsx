'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname, useSearchParams } from 'next/navigation'
import { PaginationCustom } from "@/components/PaginationCustom";
import Link from 'next/link';

export default function AccountPage() {

    const searchParams = useSearchParams();
    let pathname = usePathname();
    pathname = pathname.replace('/search/', '');

    return (

        <main className="justify-center items-center">

            <div className="flex flex-col sm:flex-row justify-center items-center w-full">
                <div className="flex flex-col w-8/12 pb-10">
                    <section className="flex flex-col text-center m-1 gap-2 py-10 my-6"
                        style={{ backgroundColor: 'var(--color-body-general)', borderColor: 'var(--muted-foreground)' }}>
                        <Button variant={"outline"}>You has searched for: {pathname}</Button>
                    </section>
                    <PaginationCustom currentPage={1} totalPages={10} />
                </div>

            </div>


        </main >

    );
}
