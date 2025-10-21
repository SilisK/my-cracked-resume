"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/my-cracked-resume.png";

export default function Navbar() {
    return (
        <nav className="border-zinc-500 absolute top-0 z-9999 flex w-full pt-2.5">
            <div className="border-zinc-300 mx-auto flex w-full max-w-6xl items-center justify-between rounded-b-lg pr-5 md:pr-8">
                <div className="flex items-center justify-center gap-1 rounded-2xl px-3 py-1 lg:gap-7">
                    <Link
                        href={"/"}
                        className="text-3xl font-bold flex items-center text-zinc-400">
                        <Image
                            alt="logo"
                            src={logo}
                            width={168}
                            height={44}
                            unoptimized
                            priority
                        />
                    </Link>
                    <Link
                        href={"/upload-resume"}
                        className="flex items-center justify-center px-3.5 py-2 text-sm font-medium focus:underline"
                    >
                       Upload Resume
                    </Link>
                    <Link
                        href={"/career-guide"}
                        className="flex items-center justify-center px-3.5 py-2 text-sm font-medium focus:underline"
                    >
                    Career Guide
                    </Link>
                </div>
            </div>
        </nav>
    );
}