// app/movie/[id]/page.tsx

import Link from "next/link";
import Image from "next/image";

async function fetchMovie(id) {
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch movie");
  return res.json();
}

// ✅ Required for static export
export async function generateStaticParams() {
  const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );
  const data = await res.json();

  return data.results.map((movie) => ({
    id: movie.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const movie = await fetchMovie(params.id);
  return { title: movie.title };
}

export default async function MovieDetail({ params }) {
  const movie = await fetchMovie(params.id);

  return (
    <div className="p-4 max-w-3xl mx-auto text-white">
      <h1 className="text-3xl font-bold text-center">{movie.title}</h1>
      <div className="mt-4 flex flex-col md:flex-row gap-6">
        {movie.poster_path && (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}
            className="rounded-lg"
          />
        )}
        <div>
          <p className="mt-2 text-gray-300">{movie.overview}</p>
          <p className="mt-4 font-semibold">Rating: {movie.vote_average}</p>
          <p className="mt-1 text-gray-400">
            Release Date: {movie.release_date}
          </p>
          <Link href={`/watch/${params.id}`}>
            <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Watch Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
