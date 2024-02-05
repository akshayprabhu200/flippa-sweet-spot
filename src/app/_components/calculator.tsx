import React, { useState } from "react";
import CalculatorPrice from "./calculatorPrice";
import CalculatorBrokerage from "./calculatorBrokerage";
import CalculatorPackage from "./calculatorPackage";
import CalculatorAddons from "./calculatorAddons";
import CalculatorEscrow from "./calculatorEscrow";
import CalculatorResults from "./calculatorResults";

const Calculator = () => {
  const [assetPrice, setAssetPrice] = useState(0);
  const [brokeragePercent, setBrokeragePercent] = useState(0);
  const [brokerageBoolean, setBrokerageBoolean] = useState("no");
  const [flippaPackage, setFlippaPackage] = useState("standard");
  const [addons, setAddons] = useState<string[]>([]);
  const [escrowPrice, setEscrowPrice] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <>
      {step === 1 && (
        <CalculatorPrice
          step={step}
          setStep={setStep}
          assetPrice={assetPrice}
          setAssetPrice={setAssetPrice}
        />
      )}
      {step === 2 && (
        <CalculatorBrokerage
          step={step}
          setStep={setStep}
          brokerageBoolean={brokerageBoolean}
          setBrokerageBoolean={setBrokerageBoolean}
          brokeragePercent={brokeragePercent}
          setBrokeragePercent={setBrokeragePercent}
        />
      )}
      {step === 3 && (
        <CalculatorPackage
          step={step}
          flippaPackage={flippaPackage}
          setStep={setStep}
          setFlippaPackage={setFlippaPackage}
        />
      )}
      {step === 4 && (
        <CalculatorAddons
          step={step}
          setStep={setStep}
          addons={addons}
          setAddons={setAddons}
        />
      )}
      {step === 5 && (
        <CalculatorEscrow
          step={step}
          setStep={setStep}
          escrowPrice={escrowPrice}
          setEscrowPrice={setEscrowPrice}
        />
      )}
      {step === 6 && (
        <CalculatorResults
          step={step}
          escrowPrice={escrowPrice}
          assetPrice={assetPrice}
          brokeragePercent={brokeragePercent}
          brokerageBoolean={brokerageBoolean}
          flippaPackage={flippaPackage}
          addons={addons}
        />
      )}
    </>
  );
};

export default Calculator;
