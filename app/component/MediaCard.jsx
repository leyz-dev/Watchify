"use client";
import Link from "next/link";
import Image from "next/image";

export default function MediaCard({ item, type }) {
  const title = type === "movie" ? item.title : item.name;
  const poster = item.poster_path;
  const id = item.id;
  const href =
    type === "movie" ? `/movie/${id}` : `https://www.themoviedb.org/tv/${id}`;

  return (
    <Link
      href={href}
      target={type === "tv" ? "_blank" : undefined}
      className="block transform hover:scale-105 transition"
    >
      <div className="relative w-full h-0 pb-[150%] overflow-hidden rounded-lg shadow-lg">
        {poster && (
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster}`}
            alt={title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <p className="mt-2 text-center font-semibold truncate">{title}</p>
    </Link>
  );
}
