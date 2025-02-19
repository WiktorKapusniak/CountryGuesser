"use client";
import Link from "next/link";
import "../globals.css";
import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  const [points, setPoints] = useState(null);
  const [profileAvatar, setProfileAvatar] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const storedPoints = parseInt(localStorage.getItem("points")) || 0;
    setPoints(storedPoints);
    const storedAvatar = localStorage.getItem("profileAvatar") || "/default-avatar.png";
    setProfileAvatar(storedAvatar);

    const storedBackground = localStorage.getItem("profileBackground") || null;

    if (storedBackground) {
      document.body.style.backgroundImage = `url(${storedBackground})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
    } else {
      document.body.style.backgroundImage = "none";
    }
  }, []);

  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow-lg">
          <div className="container mx-auto flex justify-between items-center py-4 px-6 flex-wrap">
            {/* Logo */}
            <Link href="/mainpage" className="flex items-center space-x-3 mb-4 sm:mb-0">
              <img src="/globe.svg" alt="Logo" className="h-12 w-12 hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl font-extrabold text-gray-900 tracking-wide">CountryGuesser</span>
            </Link>

            {/* Nawigacja */}
            <nav className="w-full sm:w-auto">
              <ul className="flex flex-col sm:flex-row sm:space-x-6 items-center text-center">
                <li className="my-2 sm:my-0">
                  <Link href="/mainpage" className="relative group text-gray-800 font-semibold transition duration-300 py-1 px-3 rounded-lg">
                    <span className="absolute inset-0 bg-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                    <span className="relative z-10 group-hover:text-green-500 group-hover:scale-110 transition-transform duration-300">Strona główna</span>
                  </Link>
                </li>
                <li className="my-2 sm:my-0">
                  <Link href="/mainpage/ranking" className="relative group text-gray-800 font-semibold transition duration-300 py-1 px-3 rounded-lg">
                    <span className="absolute inset-0 bg-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                    <span className="relative z-10 group-hover:text-green-500 group-hover:scale-110 transition-transform duration-300">Ranking</span>
                  </Link>
                </li>
                <li className="my-2 sm:my-0">
                  <Link href="/mainpage/sklep" className="relative group text-gray-800 font-semibold transition duration-300 py-1 px-3 rounded-lg">
                    <span className="absolute inset-0 bg-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                    <span className="relative z-10 group-hover:text-green-500 group-hover:scale-110 transition-transform duration-300">Sklep</span>
                  </Link>
                </li>
                <li className="my-2 sm:my-0">
                  <Link href="/mainpage/ustawienia" className="relative group text-gray-800 font-semibold transition duration-300 py-1 px-3 rounded-lg">
                    <span className="absolute inset-0 bg-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                    <span className="relative z-10 group-hover:text-green-500 group-hover:scale-110 transition-transform duration-300">Ustawienia</span>
                  </Link>
                </li>
                {/* Punkty */}
                <li className="text-gray-800 font-semibold my-2 sm:my-0">Punkty: {isClient && points !== null ? points : "Ładowanie..."}</li>
                {/* Profil */}
                <li className="my-2 sm:my-0">
                  <Link href="/mainpage/profile" className="hover:opacity-80 transition-opacity duration-300">
                    <img src={profileAvatar} alt="Profil" className="h-10 w-10 rounded-full border-2 border-blue-500 hover:scale-110 transition-transform duration-300" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto mt-12 px-6 bg-white shadow-md rounded-lg p-6">{children}</main>
      </body>
    </html>
  );
}
