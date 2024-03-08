export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-64 w-64 border-t-8 border-b-4 border-cyan-500">
            </div>
            <span className="my-10 text-xl">Loading ...</span>
        </div>

    )
}