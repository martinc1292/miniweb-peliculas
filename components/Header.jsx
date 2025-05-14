'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-900  px-6 py-4 flex justify-between items-center sticky top-0 z-10">
      <nav className="flex gap-4 text-sm">
        <Link href="/" className="hover:underline">Inicio</Link>
        <Link href="/peliculas" className="hover:underline">Películas</Link>
      </nav>
      <h1 className="text-xl font-bold text-blue-600">🎬 MiniWeb Películas</h1>
    </header>
  );
}
