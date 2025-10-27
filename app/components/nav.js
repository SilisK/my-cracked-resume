"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/my-cracked-resume.png";
import { useEffect, useState } from "react";
import { LogOut, LogOutIcon, Menu, X } from "lucide-react";

export default function Navbar({ autoHide = false }) {
    const [saveFound, setSaveFound] = useState(null);

    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (!autoHide) return;
            const currentScrollY = window.scrollY;

            // Always show navbar when near the top
            if (currentScrollY < 100) {
                setShowNavbar(true);
            } else if (currentScrollY > lastScrollY && !isOpen) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, autoHide, isOpen]);

    // Listens to screen width breakpoint to reset state
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)');

        const handleResize = (e) => {
            if (e.matches) {
                setIsOpen(false);
                setShowNavbar(true);
                setLastScrollY(window.scrollY);
            }
        };

        handleResize(mediaQuery);

        mediaQuery.addEventListener('change', handleResize);

        return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);

    useEffect(() => {
        const profileFromStorage = localStorage.getItem("profile");
        const saveWasFound = Boolean(profileFromStorage);

        setSaveFound(saveWasFound);
    }, []);

    return (
        <nav
            className={`bg-zinc-50 absolute font-manrope text-lg top-0 left-0 w-full z-100 transition-transform duration-300 ease-in-out ${showNavbar ? 'translate-y-0 border-gray-100' : '-translate-y-full border-transparent'
                } bg-white`}
        >
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href={"/"}
                            className="text-3xl font-bold flex items-center text-zinc-400">
                            <Image
                                alt="logo"
                                src={logo}
                                width={160}
                                height={64}
                                unoptimized
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex lg:items-center space-x-6">
                        {!saveFound && (
                            <Link
                                href={"/upload-resume"}
                                className="flex items-center justify-center px-3.5 py-2 text-sm font-medium focus:underline"
                            >
                                Get Started
                            </Link>
                        )}
                        {saveFound && (
                            <Link
                                className="flex items-center justify-center px-3.5 py-2 text-sm font-medium focus:underline"
                                href={"/dashboard"}>
                                Dashboard
                            </Link>
                        )}
                        {saveFound && (
                            <Link
                                className="flex items-center justify-center px-3.5 py-2 text-sm font-medium focus:underline"
                                href={"/settings"}>
                                Settings
                            </Link>
                        )}
                        {saveFound && (
                            <button
                                onClick={() => {
                                    localStorage.clear();
                                    window.location.reload();
                                }}
                                className="cursor-pointer border border-zinc-200 px-4 py-2 inline-flex items-center gap-2 transition hover:bg-zinc-100 hover:scale-105 active:bg-white active:scale-100">
                                Log out
                                <LogOutIcon size={15} />
                            </button>
                        )}
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => {
                                toggleMenu();
                            }}
                            className="text-gray-700 focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Animated Mobile Menu */}
            <div
                className={`bg-zinc-50 lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } px-4 bg-white`}
            >
                <div className="grid place-items-center lg:place-items-start gap-4 py-2">
                    {!saveFound && (
                        <Link
                            href={"/upload-resume"}
                            className="flex items-center justify-center px-3.5 py-2 text-sm font-medium focus:underline"
                        >
                            Get Started
                        </Link>
                    )}
                    {saveFound && (
                        <Link
                            className="flex items-center justify-center px-3.5 py-2 text-sm font-medium focus:underline"
                            href={"/dashboard"}>
                            Dashboard
                        </Link>
                    )}
                    {saveFound && (
                        <Link
                            className="flex items-center justify-center px-3.5 py-2 text-sm font-medium focus:underline"
                            href={"/settings"}>
                            Settings
                        </Link>
                    )}
                    {saveFound && (
                        <button
                            onClick={() => {
                                localStorage.clear();
                                window.location.reload();
                            }}
                            className="cursor-pointer border border-zinc-200 px-4 py-2 inline-flex items-center gap-2 transition hover:bg-zinc-100 hover:scale-105 active:bg-white active:scale-100">
                            Log out
                            <LogOutIcon size={15} />
                        </button>
                    )}
                </div>
            </div>
        </nav >
    );
}