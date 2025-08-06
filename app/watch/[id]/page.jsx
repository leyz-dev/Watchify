// app/watch/[id]/page.tsx

export async function generateStaticParams() {
  const popularIds = [
    "299534", // Example: Avengers: Endgame
    "24428", // Example: The Avengers
    "603692", // Example: John Wick: Chapter 4
    // Add more popular TMDB movie IDs as needed
  ];

  return popularIds.map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  return { title: `Watch Movie ${params.id}` };
}

export default function WatchMovie({ params }) {
  const { id } = params;
  const embedUrl = `https://vidsrc.icu/embed/movie/${id}`;

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Enjoy Your Movie</h1>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full border-none rounded-lg"
          allowFullScreen
          src={embedUrl}
        ></iframe>
      </div>
    </div>
  );
}
