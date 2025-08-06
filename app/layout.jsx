import "./globals.css";
import ScriptInjector from "./component/ScriptInjector";

export const metadata = {
  title: "Watchify",
  description: "Movie & Series Streaming App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="pushsdk" content="0cd51f674e0db6a538786cd336f524c8" />
      </head>
      <body className="bg-zinc-900 text-white">
        <ScriptInjector /> {/* Inject Propush tag */}
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
