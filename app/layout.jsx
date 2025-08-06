import "./globals.css";

export const metadata = {
  title: "Watchify",
  description: "Movie & Series Streaming App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white">
        <header className="bg-zinc-800 shadow">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold cursor-pointer text-white">
              <a href="/">Watchify</a>
            </h1>
          </div>
        </header>
        <main className="container mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
