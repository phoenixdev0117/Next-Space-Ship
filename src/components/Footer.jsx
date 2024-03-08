import Image from 'next/image'

export const CustomFooter = () => {
    return (
        <footer className="text-center py-4 text-white w-full mt-10 border-t-2"
            style={{
                backgroundColor: 'var(--backgroundNavbar)',
                borderTopColor: 'var(--color-secondary)'
            }}>
            <div className="flex flex-col justify-center px-4 py-12 gap-5">

                <div className="absolute border-2 border-solid mb-20
                self-center md:py-5 py-3 md:px-72 px-12 rounded-3xl"
                    style={{ backgroundColor: 'var(--backgroundFooterBadges)', borderColor: 'var(--color-secondary)' }}>
                    <span className='md:text-lg font-bold'>2024 - SpaceShipForum</span>

                    <div className='flex flex-row justify-center'>
                        <Image
                            src="/logo.jpeg"
                            width={50}
                            height={50}
                            alt="Forum Logo"
                            className='rounded-full border-4 border-solid'
                        />
                    </div>

                </div>

            </div>

        </footer>
    )
}


export default CustomFooter;