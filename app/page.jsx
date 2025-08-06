import MediaGrid from "./component/MediaGrid";
import SearchBar from "./component/SearchBar";
import ClickAdScript from "./component/ClickAdScript";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

async function fetchPopularMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.results;
}

async function fetchTopRatedMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.results;
}

async function fetchPopularSeries() {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.results;
}

export default async function Home() {
  const [popularMovies, topMovies, popularSeries] = await Promise.all([
    fetchPopularMovies(),
    fetchTopRatedMovies(),
    fetchPopularSeries(),
  ]);

  return (
    <>
      <ClickAdScript />
      <SearchBar />

      <section>
        <h2 className="text-3xl font-bold mb-4">Top Rated Movies</h2>
        <MediaGrid items={topMovies} type="movie" />
      </section>

      <section>
        <h2 className="text-3xl font-bold mt-12 mb-4">Popular Movies</h2>
        <MediaGrid items={popularMovies} type="movie" />
      </section>

      <section>
        <h2 className="text-3xl font-bold mt-12 mb-4">Popular Series</h2>
        <MediaGrid items={popularSeries} type="tv" />
      </section>
    </>
  );
}
