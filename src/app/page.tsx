"use client";
import Calculator from "./_components/calculator";

export default function Home() {
  return (
    <>
      <header>
        <nav className="h-24 bg-navigation flex items-center">
          <ul className="flex justify-around	items-center flex-grow">
            <li>Home</li>
            <li>Tools</li>
            <li>Websites for sale</li>
            <li>Blog</li>
          </ul>
        </nav>
      </header>
      <main className="grid grid-cols-12 gap-10">
        <section className="col-start-2 col-end-10 md:col-start-3 md:col-end-6">
          <h3 className="text-4xl">Thinking of selling your webite online?</h3>
          <h2 className="text-6xl text-headingText">
            Find the <span className="text-flippaBlue">optimum</span> price to
            sell your website
          </h2>
        </section>

        <section className="col-start-2 col-end-10 md:col-start-6 md:col-end-10 border-flippaBlue rounded-3xl md:min-h-600 border-4 w-600 p-[5rem]">
          <Calculator></Calculator>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
