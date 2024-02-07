import React, { useState } from "react";

type props = {
  step: number;
  brokerageBoolean: string;
  brokeragePercent: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setBrokerageBoolean: React.Dispatch<React.SetStateAction<string>>;
  setBrokeragePercent: React.Dispatch<React.SetStateAction<number>>;
};

const CalculatorBrokerage = ({
  step,
  setStep,
  brokerageBoolean,
  setBrokerageBoolean,
  brokeragePercent,
  setBrokeragePercent,
}: props) => {
  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();
    if ((event.target as HTMLFormElement).checkValidity()) {
      setStep(step + 1);
    }
  };

  return (
    <form className="calculator-form">
      <h3 className="calculator-title">Brokerage services</h3>
      <p className="explainer-text">
        Great start! Now add in whether you will be working with a broker or not
      </p>
      <fieldset className="col-span-2 flex flex-row gap-2">
        <input
          type="radio"
          name="brokerage-yes"
          id="brokerage-yes"
          value={"yes"}
          checked={brokerageBoolean === "yes"}
          onChange={(event) => setBrokerageBoolean(event.target.value)}
        />
        <label htmlFor="brokerage-yes">Yes</label>
        <input
          type="radio"
          name="brokerage-yes"
          id="brokerage-yes"
          value={"no"}
          checked={brokerageBoolean === "no"}
          onChange={(event) => setBrokerageBoolean(event.target.value)}
        />
        <label htmlFor="brokerage-yes">No</label>
      </fieldset>
      {brokerageBoolean === "yes" && (
        <label htmlFor="brokerageFees">Brokerage Fee</label>
      )}
      {brokerageBoolean === "yes" && (
        <input
          className="input-primary"
          type="number"
          name="brokerageFees"
          id="brokerageFees"
          value={brokeragePercent}
          onChange={(event) =>
            setBrokeragePercent(parseFloat(event.target.value))
          }
        />
      )}
      <button
        className="btn-primary"
        onClick={(event) => {
          event.preventDefault();
          setStep(step + 1);
        }}
      >
        Next
      </button>
    </form>
  );
};

export default CalculatorBrokerage;
