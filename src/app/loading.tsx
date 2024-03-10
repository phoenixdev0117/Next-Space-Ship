export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-64 w-64
             duration-500 ease-in-out
             border-t-4  border-cyan-500">
            </div>
            <span className="my-10 text-xl">Loading ...</span>
        </div>

    )
}