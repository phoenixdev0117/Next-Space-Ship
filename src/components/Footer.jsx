import Image from 'next/image'

export const CustomFooter = () => {
    return (
        <footer className="text-center py-4 text-white w-full mt-10 border-t-2"
            style={{
                backgroundColor: 'var(--backgroundNavbar)',
                borderTopColor: 'var(--color-secondary)'
            }}>
            <div className="flex flex-col justify-center px-4 py-12">

                <div className="absolute border-2 border-solid mb-20 
                bg-gradient-to-r from-black via-blue-900/50 to-black
                self-center md:py-5 py-3 md:px-64 px-12 rounded-2xl border-b-4
                transition duration-200 ease-in-out hover:border-b-cyan-200 border-white/35
                 border-b-white/80
                bg-backgroundFooterBadges hover:bg-colorPrimaryDark">
                    <span className='md:text-lg font-bold'>2024 - SpaceShipForum</span>

                    <div className='flex flex-row justify-center pt-2'>
                        <Image
                            src="/logo.jpeg"
                            width={50}
                            height={50}
                            alt="Forum Logo"
                            className='rounded-full border-2 border-white/50 border-solid'
                        />
                    </div>

                </div>

            </div >

        </footer >
    )
}


export default CustomFooter;