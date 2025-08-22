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
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center">
            <Image src="/images/16.png" alt="Inno-Tech" width={40} height={40} className="h-10 w-10 rounded-sm" />
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


