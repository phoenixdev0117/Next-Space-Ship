import Image from 'next/image'

export const CustomFooter = () => {
    return (
        <footer className="text-center py-4  text-white w-full mt-10 border-t-2"
            style={{
                backgroundColor: 'var(--color-primary-dark)',
                borderTopColor: 'var(--color-secondary)'
            }}>
            <div className="flex flex-col justify-center px-4 py-4 gap-6">
                <span className='text-xl font-bold'>2024 - SpaceShipForum</span>
                <div className='flex flex-row justify-center gap-4'>
                    <Image
                        src="/logo.jpeg"
                        width={50}
                        height={50}
                        alt="Forum Logo"
                        className='rounded-full border-4 border-solid'
                    />
                    <Image
                        src="/logo.jpeg"
                        width={50}
                        height={50}
                        alt="Forum Logo"
                        className='rounded-full border-4 border-solid'
                    />
                </div>
            </div>

        </footer>
    )
}


export default CustomFooter;