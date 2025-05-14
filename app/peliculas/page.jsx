'use client';

import { useEffect, useState } from 'react';
import moviesMock from '../../data/moviesMock';
import MovieList from './MovieList';

export default function PeliculasPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(moviesMock); // usamos mock por ahora
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Catálogo de Películas</h1>
      <MovieList movies={movies} />
    </main>
  );
}
