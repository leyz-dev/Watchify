"use client";
import MediaCard from "./MediaCard";

export default function MediaGrid({ items, type }) {
  if (!Array.isArray(items)) return null; // 🛡️ Safely handle undefined or non-array input

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">
        {type === "movie" ? "Movies" : "Series"}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {items.map((item) => (
          <MediaCard key={item.id} item={item} type={type} />
        ))}
      </div>
    </div>
  );
}
