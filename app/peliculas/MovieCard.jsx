"use client";

import { useState } from "react";
import Link from "next/link";

export default function MovieCard({ movie }) {
  const [like, setLike] = useState(null);
  const handleLike = (type) => {
    setLike((prev) => (prev === type ? null : type));
  };
  const borderColor =
    like === "like"
      ? "border-green-500"
      : like === "dislike"
      ? "border-red-500"
      : "border-gray-500";
  return (
    <div
      className={`border-4 ${borderColor} bg-gray-700 p-4 rounded shadow text-center text-sm space-y-2 text-white transition`}
    >
      {/* Sólo el contenido del link */}
      <Link href={`/peliculas/${movie._id}`}>
        <div className="cursor-pointer">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-[150px] object-cover rounded mb-2"
          />
          <h2 className="font-semibold">{movie.title}</h2>
          <p className="text-gray-300">{movie.year}</p>
        </div>
      </Link>

      {/* Botones por fuera del link */}
      <div className="flex justify-center gap-4 mt-2">
        <button
          onClick={() => handleLike("like")}
          className={`text-2xl transition ${
            like === "like" ? "text-green-400 scale-150" : "text-gray-400"
          }`}
        >
          👍
        </button>
        <button
          onClick={() => handleLike("dislike")}
          className={`text-2xl transition ${
            like === "dislike" ? "text-red-400 scale-150" : "text-gray-400"
          }`}
        >
          👎
        </button>
      </div>
    </div>
  );
}
