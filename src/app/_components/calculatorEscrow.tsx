import React, { useState } from "react";

type props = {
  step: number;
  escrowPrice: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setEscrowPrice: React.Dispatch<React.SetStateAction<number>>;
};

const CalculatorEscrow = ({
  step,
  setStep,
  escrowPrice,
  setEscrowPrice,
}: props) => {
  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();

    if ((event.target as HTMLFormElement).checkValidity()) {
      setStep(step + 1);
    }
  };

  return (
    <form onSubmit={handleNext}>
      <h3>Flippa profit Calculator</h3>
      <p>
        Once you have calculated Escrow.com’s fees, enter the estimation you get
        below
      </p>
      <input
        type="number"
        name="price"
        id="price"
        value={escrowPrice}
        onChange={(event) => {
          const price = parseFloat(event.target.value);
          setEscrowPrice(price);
        }}
        required
      />
      <label htmlFor="price">Asset Price</label>
      <button
        type="submit"
        className="text-flippaBlue border-4 border-flippaBlue rounded-10 px-2 py-"
      >
        Calculate
      </button>
    </form>
  );
};

export default CalculatorEscrow;
