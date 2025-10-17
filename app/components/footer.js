"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center flex-wrap gap-[1em] bg-zinc-100 border-t border-zinc-200 p-4">
            <p className="font-semibold text-sm">© My Cracked Resume 2025</p>
            <b>Quick Links</b>
            <Link
                className="text-blue-500 hover:underline"
                passHref href={"https://www.tiktok.com/@mycrackedresume"}>
                TikTok
            </Link>
            <Link
                className="text-blue-500 hover:underline"
                passHref href={"https://github.com/SilisK/my-cracked-resume"}>
                Github
            </Link>
        </footer>
    );
}