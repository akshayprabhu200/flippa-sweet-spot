import React, { useState } from "react";

type props = {
  step: number;
  addons: Array<string>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setAddons: React.Dispatch<React.SetStateAction<Array<string>>>;
};

const CalculatorAddons = ({ step, setStep, addons, setAddons }: props) => {
  const options = [
    { label: "NDA & Confidentiality ($199)", value: "nda" },
    { label: "Legal templates ($199)", value: "legal" },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      // Add to the list
      setAddons([...addons, value]);
    } else {
      // Remove from the list
      setAddons(addons.filter((addon) => addon !== value));
    }
  };

  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();
    if ((event.target as HTMLFormElement).checkValidity()) {
      setStep(step + 1);
    }
  };

  return (
    <form onSubmit={handleNext} className="calculator-form">
      <h3 className="calculator-title">Flippa profit Calculator</h3>
      <p className="explainer-text">
        Flippa offers a variety of listing packages that are required in order
        to list on Flippa. This charge is separate from the success fee, which
        will depend on the amount that your website sells for.
      </p>
      <fieldset className="col-span-2 flex flex-row">
        {options.map((option) => (
          <div key={option.value} className="flex flex-row gap-1">
            <input
              type="checkbox"
              id={option.value}
              value={option.value}
              checked={addons.includes(option.value)}
              onChange={handleChange}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </fieldset>
      <button type="submit" className="btn-primary">
        Next
      </button>
    </form>
  );
};

export default CalculatorAddons;
