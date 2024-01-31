import React, { useState } from "react";

type props = {
  step: number;
  assetPrice: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setAssetPrice: React.Dispatch<React.SetStateAction<number>>;
};

const CalculatorPrice = ({
  step,
  setStep,
  assetPrice,
  setAssetPrice,
}: props) => {
  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const priceInput = form.elements.namedItem("price") as HTMLInputElement;

    if (assetPrice <= 0) {
      priceInput.setCustomValidity("Price cannot be less than or equal to 0");
    }

    if ((event.target as HTMLFormElement).checkValidity()) {
      setStep(step + 1);
    }
    form.reportValidity();
  };

  return (
    <form onSubmit={handleNext}>
      <h3>Flippa profit Calculator</h3>
      <p>
        Simply Enter your asset price and let us do the number crunching for you
      </p>
      <input
        type="number"
        name="price"
        id="price"
        value={assetPrice}
        onChange={(event) => {
          const price = parseFloat(event.target.value);
          setAssetPrice(price);
          if (price <= 0) {
            event.target.setCustomValidity(
              "Price cannot be less than or equal to 0"
            );
          } else {
            event.target.setCustomValidity("");
          }
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

export default CalculatorPrice;
