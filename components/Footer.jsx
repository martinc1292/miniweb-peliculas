'use client';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8 py-4 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} MiniWeb de Películas. Martín Carrera.</p>
    </footer>
  );
}
