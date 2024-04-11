import Link from "next/link";

export default function NotFound() {
    return <div className="flex flex-col text-white w-full h-[800px] justify-center items-center">
        <div className="max-sm:w-2/3 mb-10 text-3xl"> We did not find that kebab, sorry... </div>
        <div className="max-sm:w-2/3 mb-10 text-3xl"> ❤️ But here we have other kebabs that you can fall in love with ❤️ </div>
        <Link className="p-2 border-4 border-red-500 rounded-xl" href="/"> GO FOR THE KEBABS </Link>
    </div>
}