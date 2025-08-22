"use client";

import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#mission", label: "Mission" },
  { href: "#services", label: "Services" },
  { href: "#offers", label: "Offers" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="flex">
                <div className="w-6 h-6 bg-orange-500 rounded-sm"></div>
                <div className="w-6 h-6 bg-blue-500 rounded-sm -ml-1"></div>
              </div>
              <span className="text-lg font-bold">
                <span className="text-orange-500">INNO</span>
                <span className="text-blue-500">-TECH</span>
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Sign In
            </button>
            <button className="rounded-lg border border-blue-500 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}


