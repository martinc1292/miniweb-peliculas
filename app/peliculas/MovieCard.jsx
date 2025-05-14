'use client';

import { useState } from 'react';

export default function MovieCard({ movie }) {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const handleLike = () => {
    setLike(!like);
    if (!like && dislike) setDislike(false);
  };

  const handleDislike = () => {
    setDislike(!dislike);
    if (!dislike && like) setLike(false);
  };

  return (
    <div className="bg-slate-900 p-4 rounded shadow text-center text-sm">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-[150px] object-cover rounded mb-2"
      />
      <h2 className="font-semibold">{movie.title}</h2>
      <p className="text-gray-500">{movie.year}</p>
      <div className="flex justify-center gap-2 mt-2">
        <button
          onClick={handleLike}
          className={`px-2 py-1 text-xs rounded ${
            like ? 'bg-green-500 text-white' : 'bg-gray-200'
          }`}
        >
          👍
        </button>
        <button
          onClick={handleDislike}
          className={`px-2 py-1 text-xs rounded ${
            dislike ? 'bg-red-500 text-white' : 'bg-gray-200'
          }`}
        >
          👎
        </button>
      </div>
    </div>
  );
}
