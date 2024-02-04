"use client";
import Calculator from "./_components/calculator";

export default function Home() {
  return (
    <>
      <header>
        <nav className="mb-28 flex h-24 items-center bg-navigation">
          <ul className="flex flex-grow	items-center justify-around">
            <li>Home</li>
            <li>Tools</li>
            <li>Websites for sale</li>
            <li>Blog</li>
          </ul>
        </nav>
      </header>
      {/* Update grids for better useability */}
      <main className="grid-cols-[1fr 4fr 4fr 1fr] grid gap-10">
        <section className="max-w-300 col-start-2 col-end-4 md:col-start-2 md:col-end-3">
          <h3 className="text-center text-lg">
            Thinking of selling your webite online?
          </h3>
          <h2 className="text-center text-3xl text-headingText">
            Find the <span className="text-flippaBlue">optimum</span> price to
            sell your website
          </h2>
        </section>
        {/* Update all widths to match updated figma board */}
        <section className="max-w-300 col-start-2 col-end-4 rounded-3xl border-4 border-flippaBlue p-[2rem] text-center md:col-start-3 md:col-end-4 md:min-h-600">
          <Calculator></Calculator>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
