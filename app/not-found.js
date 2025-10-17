// const metadata = {
//   title: "Not Found - My Cracked Resume",
//   description: "Seems you've wandered off the path...",
// };

import { Terminal } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="p-4 grid gap-[1em] place-items-center place-content-center h-screen">
            <Terminal />
            <h1 className="text-5xl font-semibold">Page Not Found</h1>
            <Link
                href={"/"}
                className="cursor-pointer mt-4 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white text-lg font-semibold py-3 px-6 rounded-lg transition">
                Go to Homepage
            </Link>
        </div>
    );
}