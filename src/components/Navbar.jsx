
'use client'
import { useState } from 'react'; // Importa useState
import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from "@/components/dark-toggle";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';

export const Navbar = () => {

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(true);
    const [inputSearch, setInputSearch] = useState('');

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const [imageLoaded, setImageLoaded] = useState(false);

    const imageLoadedFunction = (e) => {
        setImageLoaded(true);
    }
    const handleInputSarch = (value) => {
        value = value.trim();
        value = value.replace(/\s+/g, '-');
        setInputSearch(value);
    }

    const handleKeyDownInput = (e) => {
        if (e.key === 'Enter') {
            setIsSearchOpen(!isSearchOpen);
            router.push(`/search/${(inputSearch !== '' ? inputSearch : 'blank')}`);
            setInputSearch('');
        }
        else if (e.key === 'Escape') {
            setIsSearchOpen(!isSearchOpen);
            setInputSearch('');
        }
    }

    return (
        <>
            <nav className="w-full py-2 border-b-2 bg-gradient-to-r from-black via-blue-700/20 to-black"
                style={{
                    backgroundColor: 'var(--backgroundNavbar)',
                    borderBottomImage: 'linear-gradient(to right, black, rgba(0,0,255,1), black)'
                }}>
                <div className="flex flex-row justify-between px-4 md:px-6 lg:px-8 ">
                    <div className="flex flex-row justify-end w-7/12 items-center ">

                        <div className="hidden md:block">
                            <div className="ml-5 mr-5 flex items-center space-x-4">
                                <Link href="/">
                                    <button className=" font-bold text-gray-300 hover:bg-blue-700/60 border-white/0
                                hover:text-white border-solid hover:border-white/100 border-2 px-3 py-2 rounded-md text-sm ">Home</button>
                                </Link>
                            </div>
                        </div>


                        <span className="flex-shrink-0 cursor-pointer">
                            <Image
                                src="/logo.jpeg"
                                width={50}
                                height={50}
                                alt="Forum Logo"
                                className={`${imageLoaded ? '' : `hidden`} hover:border-cyan-300
                                rounded-full self-center border-2 border-cyan-500/90 border-solid 
                                 active:border-4
                                 transition duration-2000 ease-in-out hover:scale-110
                                ${isSearchOpen ? `animate-none` : `animate-spin`}
                                `}
                                style={{}}
                                priority
                                onLoad={(e) => imageLoadedFunction(e)}
                                onClick={(e) => setIsSearchOpen(!isSearchOpen)}
                            />
                            {(imageLoaded === false) ?
                                (<div className="animate-spin rounded-full h-12 w-12
                                    border-t-2 border-cyan-500">
                                </div>) :
                                (null)}

                        </span>


                        <div className="hidden md:block">
                            <div className="ml-5 mr-5 flex items-center space-x-4">


                                <Link href="/Account">
                                    <button className="text-gray-300 bg-blue-700/0 border-white/0 hover:bg-blue-700/60
                                 hover:text-white hover:border-white/100 border-solid border-2 px-3 py-2 font-bold
                                  rounded-md text-sm ">Account</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <ModeToggle />
                    </div>
                </div>

                <div className={`md:hidden text-center`}>
                    <div className="px-2 pt-2 pb-3 md:px-3">
                        <button className="block text-gray-300 w-full hover:bg-teal-500/70 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                            onClick={toggleAccordion}>
                            {isOpen ? `Close menu` : `Open the Menu (Accordion)`}
                        </button>
                        {isOpen && (
                            <>
                                <Link href="/">
                                    <button
                                        className="w-full block text-gray-300 hover:bg-teal-500/70
                                 hover:text-white px-3 py-2 rounded-md text-base font-medium">Home</button>
                                </Link>
                                <Link href="/Account" >
                                    <button className="w-full block text-gray-300 hover:bg-teal-500/70
                                 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                                    >Account</button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>

            </nav >
            <div className={`flex flex-row justify-center
            bg-blue-950/20 py-4 h-18 border-b-2 border-b-white/20
            active:bg-cyan-950/40
            duration-200 ease-in-out transition-all
            ${isSearchOpen ? 'hidden ' : ''}`}>
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="search"
                        onChange={(e) => handleInputSarch(e.target.value)}
                        className='transition-all animate-pulse'
                        placeholder="Search for content..."
                        onKeyDown={(e) => handleKeyDownInput(e)}
                    />


                    <Link href={`/search/${(inputSearch !== '' ? inputSearch : 'blank')}`}>
                        <Button type="submit"
                            // className='transition-all animate-pulse'
                            onClick={() => setIsSearchOpen(!isSearchOpen)}>Search
                        </Button>
                    </Link>
                </div>



            </div>
        </>
    )
}

export default Navbar;
