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
    <form>
      <p>
        Great start! Now add in whether you will be working with a broker or not
      </p>
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

      {brokerageBoolean === "yes" && (
        <input
          type="number"
          name="brokerageFees"
          id="brokerageFees"
          value={brokeragePercent}
          onChange={(event) =>
            setBrokeragePercent(parseFloat(event.target.value))
          }
        />
      )}
      {brokerageBoolean === "yes" && (
        <label htmlFor="brokerageFees">Brokerage Fee</label>
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
