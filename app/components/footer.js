"use client";

import { faGithub, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-200 min-h-32 flex items-center p-4">
            <div className="flex gap-[2.5em] flex-wrap items-center justify-between w-full max-w-6xl mx-auto">
                <p className="text-zinc-500 text-xs">© 2025 My Cracked Resume. All Rights Reserved.</p>
                <div className="grid text-sm">
                    <div className="flex items-center gap-2 flex-wrap">
                        <Link
                            className="text-sky-500 hover:underline"
                            target="_blank"
                            passHref href={"https://www.tiktok.com/@mycrackedresume"}>
                            <FontAwesomeIcon icon={faTiktok} size="2x" />
                        </Link>
                        <Link
                            className="text-sky-500 hover:underline"
                            target="_blank"
                            passHref href={"https://github.com/SilisK/my-cracked-resume"}>
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}