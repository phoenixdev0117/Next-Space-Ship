'use client'
import { Button } from "@/components/ui/button";
import { CustomDrawer } from "@/components/DrawerCustom";
import { PaginationCustom } from "@/components/PaginationCustom";
import { fetchCharacters } from "@/lib/narutoFetching";
import { UserSheet } from "@/components/UserSheet";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function Home({
    ...props
}: {
    searchParams?: {
        query: string;
        page: number;
    }
}) {


    const [characters, setCharacters] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const charactersData = await fetchCharacters();
                setCharacters(charactersData);
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };

        fetchData();
    }, []);


    // const searchParams = useSearchParams();
    let pathname = usePathname();
    pathname = pathname.replace('/', '');
    let pathNumber = 0
    pathNumber = Number(pathname);

    // for (const character of characters) {
    //   const { name, images } = character;
    // }

    return (

        <main>
            <div className="flex flex-col md:flex-row justify-center items-center w-full">
                <div className="flex flex-col w-8/12 pb-10">
                    <section className="text-center m-1 gap-2 py-10 my-6"
                        style={{ backgroundColor: 'var(--color-body-general)', borderColor: 'var(--muted-foreground)' }}>

                        <Button variant={"outline"}>Page {pathNumber}</Button>

                        {characters.length > 0 ? (
                            <>
                                <CustomDrawer data={characters[13]} />
                                <CustomDrawer data={characters[6]} />
                                <CustomDrawer data={characters[15]} />
                                <CustomDrawer data={characters[17]} />
                                <CustomDrawer data={characters[1]} />
                                <CustomDrawer data={characters[18]} />
                            </>
                        ) :
                            (
                                <div className="flex flex-col justify-center pt-8 items-center">
                                    <div className="animate-spin rounded-full h-40 w-40 border-t-4 border-cyan-500">
                                    </div>
                                    <span className="my-10 text-md">Loading Posts...</span>
                                </div>
                            )}
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