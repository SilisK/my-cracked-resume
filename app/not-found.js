export const metadata = {
    title: "Not Found - My Cracked Resume",
    description: "Seems you've wandered off the path...",
};

import { Terminal } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="p-4 grid gap-[1em] place-items-center place-content-center h-screen">
            <h1
                style={{ fontFamily: "EB Garamond, EB Garamond Fallback" }}
                className="text-center text-[56px] leading-[102%] font-medium tracking-[-1px] lg:text-[80px]">
                Page Not Found
            </h1>
            <Link
                href={"/"}
                className="mx-auto max-w-[250px] h-max cursor-pointer mt-4 flex items-center justify-center gap-2 bg-sky-500 active:scale-100 hover:scale-105 hover:bg-sky-600 text-white text-lg font-semibold py-3 px-6 rounded-lg transition duration-300">
                Go to Homepage
            </Link>
        </div>
    );
}