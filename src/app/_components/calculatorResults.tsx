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
  useEffect(() => {
    calculate();
  }, []);
  const calculate = (): void => {
    let currPrice = assetPrice;
    const brokerFee =
      brokerageBoolean === "yes" ? currPrice * brokeragePercent * 0.01 : 0;

    console.log(brokerFee);
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

    const flippaSuccessFee = assetPrice * flippaSuccessPercent;
    console.log(flippaSuccessFee);
    let listingFee = 0;
    if (flippaPackage === "standard") {
      listingFee = 59;
    } else if (flippaPackage === "premium") {
      listingFee = 299;
    } else {
      listingFee = 499;
    }
    console.log(listingFee);
    let optionalFee = 199 * addons.length;
    console.log(optionalFee);
    currPrice =
      assetPrice -
      brokerFee -
      flippaSuccessFee -
      listingFee -
      optionalFee -
      escrowPrice;
    setTotalPrice(currPrice);
  };
  return <>${totalPrice}</>;
};

export default CalculatorResults;
