"use client";
import React, { useState } from "react";
import Calculator from "./_components/calculator";

export default function Home() {
  const [step, setStep] = useState(1);
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
      <main className="grid-cols-main-page grid gap-10">
        <section className="max-w-300 md:max-w-800 col-start-2 col-end-4 md:col-start-2 md:col-end-3">
          {step == 1 && (
            <h3 className="text-center text-lg">
              Thinking of selling your webite online?
            </h3>
          )}
          {step == 1 && (
            <h2 className="cta-text">
              Find the <span className="text-flippaBlue">optimum</span> price to
              sell your website
            </h2>
          )}

          {step == 2 && (
            <h2 className="cta-text text-justify text-flippaBlue">
              Digital asset Brokers
            </h2>
          )}

          {step == 2 && (
            <h3 className="subtitle-text">
              Just like brokers that sell houses and earn a commission on a
              successful sale, brokers also exist in the digital asset world as
              well. While using a broker can mean an additional expense, it is
              highly recommended to work with one if this is the first time you
              are selling a website. Brokers are highly experienced in dealing
              with website and other digital asset sales and have built
              reputation which can reassure potential buyers who might place a
              bid.
            </h3>
          )}
        </section>
        {/* Update all widths to match updated figma board */}
        <section className="calculator-card">
          <Calculator step={step} setStep={setStep}></Calculator>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
