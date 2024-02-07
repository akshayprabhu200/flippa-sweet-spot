import React, { useState, useEffect } from "react";

type props = {
  step: number;
  escrowPrice: number;
  assetPrice: number;
  brokeragePercent: number;
  brokerageBoolean: string;
  flippaPackage: string;
  addons: string[];
};

const CalculatorResults = ({
  step,
  escrowPrice,
  assetPrice,
  brokerageBoolean,
  brokeragePercent,
  flippaPackage,
  addons,
}: props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [brokerFee, setBrokerFee] = useState(0);
  const [flippaSuccessFee, setFlippaSuccessFee] = useState(0);
  const [flippaListingFee, setFlippaListingFee] = useState(0);

  useEffect(() => {
    calculate();
  }, []);
  const calculate = (): void => {
    let currPrice = assetPrice;
    const currBrokerFee =
      brokerageBoolean === "yes" ? currPrice * brokeragePercent * 0.01 : 0;

    setBrokerFee(currBrokerFee);
    let flippaSuccessPercent = 0;
    // Add higher tiers
    if (assetPrice < 50000) {
      flippaSuccessPercent = 0.1;
    } else if (assetPrice < 100000) {
      flippaSuccessPercent = 0.9;
    } else if (assetPrice < 250000) {
      flippaSuccessPercent = 0.8;
    } else if (assetPrice < 1000000) {
      flippaSuccessPercent = 0.7;
    } else {
      flippaSuccessPercent = 0.5;
    }

    const currFlippaSuccessFee = assetPrice * flippaSuccessPercent;
    setFlippaSuccessFee(currFlippaSuccessFee);
    let listingFee = 0;
    if (flippaPackage === "standard") {
      listingFee = 59;
    } else if (flippaPackage === "premium") {
      listingFee = 299;
    } else {
      listingFee = 499;
    }
    setFlippaListingFee(listingFee);
    let optionalFee = 199 * addons.length;
    console.log(optionalFee);
    currPrice =
      assetPrice -
      currBrokerFee -
      flippaSuccessFee -
      listingFee -
      optionalFee -
      escrowPrice;
    setTotalPrice(currPrice);
  };
  return (
    <>
      <article>
        <h3 className="calculator-title">
          <span className="text-flippaBlue">${totalPrice}</span>Total Profit
        </h3>
        <p className="explainer-text">
          After accounting for all expenses, this is how much you will be left
          with.
        </p>
        <p className="label-text">Here are some of the costs:</p>
        <ul className="text-left text-subtitleText">
          {brokerageBoolean == "yes" && <li>Broker: ${brokerFee}</li>}
          <li>Flippa Success Fee: ${flippaSuccessFee}</li>
          <li>Flippa Listing Fee: ${flippaListingFee}</li>
          <li>Optional Addon Fee: ${199 * addons.length}</li>
          <li>Escrow Fee: ${escrowPrice}</li>
        </ul>
      </article>
    </>
  );
};

export default CalculatorResults;
