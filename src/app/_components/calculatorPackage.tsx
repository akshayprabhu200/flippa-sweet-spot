import React, { useState } from "react";

type props = {
  step: number;
  flippaPackage: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setFlippaPackage: React.Dispatch<React.SetStateAction<string>>;
};

const CalculatorPackage = ({
  step,
  setStep,
  flippaPackage,
  setFlippaPackage,
}: props) => {
  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const priceInput = form.elements.namedItem("price") as HTMLInputElement;

    if ((event.target as HTMLFormElement).checkValidity()) {
      setStep(step + 1);
    }
    form.reportValidity();
  };

  return (
    <form onSubmit={handleNext} className="calculator-form">
      <h3 className="calculator-title">Flippa profit Calculator</h3>
      <p className="explainer-text">
        Flippa offers a variety of listing packages that are required in order
        to list on Flippa. This charge is separate from the success fee, which
        will depend on the amount that your website sells for.
      </p>
      <select
        name="flippaPackage"
        id="flippaPackage"
        value={flippaPackage}
        onChange={(event) => setFlippaPackage(event.target.value)}
        required
        className="input-primary"
      >
        <option value="standard">Standard</option>
        <option value="premium">Premium</option>
        <option value="ultimate">Ultimate</option>
      </select>
      <button className="btn-primary" type="submit">
        Next
      </button>
    </form>
  );
};

export default CalculatorPackage;
