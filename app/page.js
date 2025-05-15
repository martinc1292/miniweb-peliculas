"use client";
import Image from "next/image";
import moviesMock from "../data/moviesMock";

const topMovies = [...moviesMock]
  .sort((a, b) => b.imdb.rating - a.imdb.rating)
  .slice(0, 5);

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2x1 font-bold mb-6">Catalogo de peliculas</h1>
      <h2 className="">Top 5 peliculas</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topMovies.map((movie) => (
          <li
            key={movie._id}
            className="bg-gray-800 text-white p-4 rounded shadow-md hover:shadow-lg transition"
          >
            <Image
              src={movie.poster}
              alt={movie.title}
              width={300}
              height={300}
              className="rounded w-full h-auto object-cover"
            />
            <h3 className="font-semibold">
              {movie.title} ({movie.year})
            </h3>
            <p className="text-sm text-gray-600">⭐️ {movie.imdb.rating}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
