"use client";
import { useState } from "react";
import axios from "axios";
import MediaGrid from "./MediaGrid";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("movie");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/${filter}?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );
    setResults(res.data.results);
    setLoading(false);
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSearch} className="flex items-center space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${filter}s...`}
          className="flex-1 border rounded px-4 py-2 text-black"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded px-2 py-2 text-black"
        >
          <option value="movie">Movie</option>
          <option value="tv">Series</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>
      {loading && <p className="mt-4">Loading...</p>}
      {results.length > 0 && <MediaGrid items={results} type={filter} />}
    </div>
  );
}
