import React, { useState } from "react";
import HomeLink from "../shared/HomeBtn";

function calculateORM(weight, reps, isLbs) {
  // Validation
  if (isNaN(weight) || isNaN(reps) || weight <= 0 || reps <= 0) {
    return alert(
      "Invalid input: Please enter positive numbers for weight and reps."
    );
  }
  // Convert to lbs for formula accuracy
  const weightInLbs = isLbs ? weight : weight * 2.20462;

  const brzyckiORM = weightInLbs / (1.0278 - 0.0278 * reps);
  const epleyORM = weightInLbs * (1 + 0.0333 * reps);
  const landerORM = (100 * weightInLbs) / (101.3 - 2.67123 * reps);

  const averageORM = (brzyckiORM + epleyORM + landerORM) / 3;

  // Convert back to kgs, and round the value
  const roundedORM = isLbs
    ? Math.round(averageORM)
    : Math.round(averageORM / 2.20462);

  // Add unit string
  const unit = isLbs ? "lbs" : "kgs";
  return `${roundedORM}${unit}`;
}

const ORMCalc = () => {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [isLbs, setIsLbs] = useState(true);
  const [oneRepMax, setOneRepMax] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedORM = calculateORM(weight, reps, isLbs);
    if (typeof calculatedORM !== "string") {
      return;
    } else {
      setOneRepMax(calculatedORM);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dark-midnight">
      <div className="container mx-auto p-6 rounded-md shadow-md shadow-forest bg-charcoal border-solid border-midnight-green border-2 sm:p-8 md:max-w-sm lg:max-w-md">
        <h1 className="text-3xl h-12 text-light-silver underline underline-offset-4 decoration-dashed decoration-persian-red text-center font-bold bg-gradient-to-b from-blood-red to-black-twilight rounded-md mb-4">
          One Rep Max
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="number"
            id="reps"
            value={reps}
            onChange={(e) => {
              setReps(e.target.value);
            }}
            placeholder="Enter rep count" // You may customize this placeholder
            className="p-2 rounded-md bg-cinereous text-light-silver font-semibold"
          />
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            placeholder={`Enter weight (${isLbs ? "lbs" : "kg"})`}
            className="p-2 rounded-md bg-cinereous text-light-silver font-semibold"
          />
          <div className="text-silver">
            <button
              type="button"
              onClick={(e) => {
                setIsLbs(!isLbs);
              }}
              className={`px-3 py-1 rounded-md text-charcoal hover:text-silver text-xl ${
                isLbs
                  ? "bg-sky hover:bg-royal-blue"
                  : "bg-soft-green hover:bg-forest"
              }`}
            >
              {isLbs ? "Use kg" : "Use lbs"}
            </button>
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-xl rounded-md underline decoration-dotted underline-offset-4 bg-persian-red text-light-silver font-semibold hover:bg-crimson hover:text-2xl hover:text-soft-green hover:font-bold"
          >
            {oneRepMax.length > 0 ? "Recalculate" : "Calculate"}
          </button>

          {oneRepMax && (
            <div className="text-light-silver text-center text-xl border-2 border-solid border-soft-green rounded-xl p-2">
              <div>Estimated 1RM:</div>{" "}
              <div className="underline underline-offset-4 font-bold text-2xl">
                {oneRepMax}
              </div>
            </div>
          )}
        </form>
        <HomeLink />
      </div>
    </div>
  );
};

export default ORMCalc;
