import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from "@/components/dark-toggle";

export const Navbar = () => {
    return (
        <nav className="w-full py-2 border-b-2"
            style={{
                backgroundColor: 'var(--backgroundNavbar)',
                borderBottomColor: 'var(--color-secondary)'
            }}>
            <div className="flex flex-row justify-between px-4 sm:px-6 lg:px-8 "
            >
                <div className="flex flex-row justify-end w-7/12 items-center "
                >
                    <div className="flex-shrink-0">
                        <Image
                            src="/logo.jpeg"
                            width={50}
                            height={50}
                            alt="Forum Logo"
                            className='rounded-full'
                        />
                    </div>
                    <div className="hidden sm:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/">
                                <p className="text-gray-300 hover:bg-teal-500/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</p>
                            </Link>
                            <Link href="/about">
                                <p className="text-gray-300 hover:bg-teal-500/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</p>
                            </Link>
                            <Link href="/contact">
                                <p className="text-gray-300 hover:bg-teal-500/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center"> {/* Nueva sección para el ModeToggle */}

                    <ModeToggle />
                </div>
            </div>

            <div className={`${true ? 'block' : 'hidden'} sm:hidden`}>
                <div className="px-2 pt-2 pb-3 sm:px-3">
                    <Link href="/">
                        <p className="block text-gray-300 hover:bg-teal-500/70 hover:text-white px-3 py-2 rounded-md text-base font-medium">Home</p>
                    </Link>
                    <Link href="/about">
                        <p className="block text-gray-300 hover:bg-teal-500/70 hover:text-white px-3 py-2 rounded-md text-base font-medium">About</p>
                    </Link>
                    <Link href="/contact">
                        <p className="block text-gray-300 hover:bg-teal-500/70 hover:text-white px-3 py-2 rounded-md text-base font-medium">Contact</p>
                    </Link>

                </div>
            </div>
        </nav >
    )
}

export default Navbar;
