"use client";
import Calculator from "./_components/calculator";

export default function Home() {
  return (
    <>
      <header>
        <nav className="h-24 bg-navigation flex items-center mb-28">
          <ul className="flex justify-around	items-center flex-grow">
            <li>Home</li>
            <li>Tools</li>
            <li>Websites for sale</li>
            <li>Blog</li>
          </ul>
        </nav>
      </header>
      {/* Update grids for better useability */}
      <main className="grid grid-cols-[1fr 4fr 4fr 1fr] gap-10">
        <section className="col-start-2 col-end-4 md:col-start-2 md:col-end-3">
          <h3 className="text-4xl">Thinking of selling your webite online?</h3>
          <h2 className="text-6xl text-headingText">
            Find the <span className="text-flippaBlue">optimum</span> price to
            sell your website
          </h2>
        </section>
        {/* Update all widths to match updated figma board */}
        <section className="col-start-2 col-end-4 md:col-start-3 md:col-end-4 border-flippaBlue rounded-3xl md:min-h-600 border-4 w-600 p-[5rem]">
          <Calculator></Calculator>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
