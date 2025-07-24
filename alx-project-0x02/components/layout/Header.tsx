// components/Header.tsx
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-slate-600 text-gray-200 py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          AIRBNB
        </Link>
        <nav className="space-x-4 font-bold">
          <Link href="/home" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/posts" className="hover:text-gray-400">
            Posts
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
