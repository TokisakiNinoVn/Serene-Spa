"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
    return (
        <header className="w-full bg-white shadow-sm py-4 px-6 flex items-center justify-between fixed top-0 left-0 z-50">
        {/* Logo + Home link */}
            <Link href="/" className="flex items-center gap-3">
                <Image
                    src="/images/logos/spa_logo.png"
                    alt="SPA Logo"
                    width={40}
                    height={40}
                    className="rounded-md"
                />
                <span className="font-semibold text-gray-800 text-lg">Serene Spa</span>
            </Link>

        {/* Language Switcher */}
        <LanguageSwitcher />
        </header>
    );
}
