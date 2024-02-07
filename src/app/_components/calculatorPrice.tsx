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
    <form onSubmit={handleNext} className="calculator-form">
      <h3 className="calculator-title">Flippa profit Calculator</h3>
      <p className="explainer-text">
        Simply Enter your asset price and let us do the number crunching for you
      </p>
      <label className="col-start-1 col-end-2" htmlFor="price">
        Asset Price
      </label>
      <input
        type="number"
        name="price"
        id="price"
        className="input-primary"
        placeholder="Enter your desired price"
        value={assetPrice}
        onChange={(event) => {
          const price = parseFloat(event.target.value);
          setAssetPrice(price);
          if (price <= 0) {
            event.target.setCustomValidity(
              "Price cannot be less than or equal to 0",
            );
          } else {
            event.target.setCustomValidity("");
          }
        }}
        required
      />

      <button type="submit" className="btn-primary">
        Calculate
      </button>
    </form>
  );
};

export default CalculatorPrice;
