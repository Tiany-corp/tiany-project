"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Accueil" },
        { href: "/about", label: "About me" },
        { href: "/projets", label: "Projets" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-xl font-semibold tracking-wide text-white hover:text-gray-300 transition-colors">
                    Tiany<span className="text-gray-500">.world</span>
                </Link>

                {/* Liens */}
                <div className="flex space-x-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors ${
                                pathname === link.href
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Bouton (optionnel) */}
                <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition">
                    Connexion
                </button>
            </div>
        </nav>
    );
}
