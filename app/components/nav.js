"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/icons/my-cracked-resume-ver4.png";

export default function Navbar() {
    return (
        <nav className="absolute z-50 w-full pt-4">
            <div className="max-w-6xl mx-auto flex w-full items-center justify-between rounded-b-lg pr-5 md:pr-8">
                <div className="flex items-center justify-center gap-1 rounded-2xl px-3 py-1 lg:gap-7">
                    <Link
                        href={"/"}
                        className="text-3xl font-bold flex items-center text-zinc-400">
                        <Image
                            alt="logo"
                            src={logo}
                            width={32}
                            height={32}
                            unoptimized
                            priority
                        />
                        {/* <span>MCR</span> */}
                    </Link>
                    <Link
                        href={"/upload-resume"}
                        className="flex items-center justify-center px-3.5 py-2 text-sm font-medium focus:underline"
                    >
                        Upload
                    </Link>
                </div>
            </div>
        </nav>
    );
}