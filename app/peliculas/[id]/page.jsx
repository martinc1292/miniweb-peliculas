'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import moviesMock from '../../../data/moviesMock';

export default function MovieDetailPage() {
  const params = useParams();
  const movieId = params.id;
  const movie = moviesMock.find((m) => m._id === movieId);

  if (!movie) {
    return <p className="p-8 text-red-600">Película no encontrada.</p>;
  }

  return (
    <main className="p-8 max-w-xl mx-auto">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-auto rounded mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>
      <p className="text-gray-700 mb-2">{movie.year}</p>
      <p className="text-sm">{movie.fullplot}</p>

      <Link
        href="/peliculas"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ← Volver al listado
      </Link>

    </main>
  );
}
