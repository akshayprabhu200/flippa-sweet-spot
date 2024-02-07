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
      <main className="grid grid-cols-main-page gap-10">
        <section className="col-start-2 col-end-4 max-w-300 md:col-start-2 md:col-end-3 md:max-w-800">
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

          {step == 3 && (
            <h2 className="cta-text text-justify text-flippaBlue">
              Listing Package
            </h2>
          )}

          {step == 3 && (
            <h3 className="subtitle-text">
              Flippa offers a variety of listing packages that are required in
              order to list on Flippa. This charge is separate from the success
              fee, which will depend on the amount that your website sells for.
            </h3>
          )}

          {step == 4 && (
            <h2 className="cta-text text-justify text-flippaBlue">
              Optional Add ons
            </h2>
          )}

          {step == 4 && (
            <h3 className="subtitle-text">
              You have selected the Basic package. This does not include extra
              add ons such as NDA & Confidentiality, or Legal templates. This is
              totally optional, but since it can be an additional expense, you
              can add it now.
            </h3>
          )}
          {step == 5 && (
            <h2 className="cta-text text-justify text-flippaBlue">Escrow</h2>
          )}

          {step == 5 && (
            <h3 className="subtitle-text">
              After accounting for all expenses, this is the final expense to
              consider. If you are using Escrow.com to carry out the digital
              asset transfer to the new owner, please click on the button below
              and use Escrow.com’s caluclator to get an estimate on their fees.
            </h3>
          )}

          {step == 6 && (
            <h2 className="cta-text text-justify text-flippaBlue">
              The results are in!
            </h2>
          )}

          {step == 6 && (
            <h3 className="subtitle-text">
              Thank you for your patience. to download the results, create a
              free account. We pinky promise you that we won’t ever send you any
              spam!
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
