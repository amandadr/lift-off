import HomeLink from "../shared/HomeBtn";
import React, { useState } from "react";

function WarmUpCalc() {
  const [workingSet, setWorkingSet] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("Novice");
  const [warmUpSets, setWarmUpSets] = useState([]);
  const [unit, setUnit] = useState("lbs"); // new state for unit toggle
  const isLbs = unit === "lbs";

  const toggleUnit = () => {
    setUnit(unit === "lbs" ? "kg" : "lbs");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedSets = calculateWarmUpSets(
      workingSet,
      experienceLevel,
      isLbs
    );
    setWarmUpSets(calculatedSets);
  };

  const calculateWarmUpSets = (weight, level, isLbs) => {
    const emptyBar = isLbs ? 45 : 20; // kg equivalent of 45lbs is roughly 20.4kg
    const roundingFactor = isLbs ? 5 : 0.5;
    // Round weight based on units
    const roundedWeight = (weight) =>
      Math.round(weight / roundingFactor) * roundingFactor;

    if (level === "Novice") {
      const increment = (roundedWeight(weight) - emptyBar) / 4;
      return [
        { reps: 10, weight: emptyBar },
        { reps: 7, weight: roundedWeight(emptyBar + increment) },
        { reps: 5, weight: roundedWeight(emptyBar + 2 * increment) },
        { reps: 3, weight: roundedWeight(emptyBar + 3 * increment) },
      ];
    } else {
      // Advanced
      const advancedReps = [10, 5, 3, 2, 1];
      const percentages = [1, 0.25, 0.45, 0.75, 0.9];

      return advancedReps.map((reps, index) => {
        let load;
        index === 0 && (load = emptyBar);
        index !== 0 && (load = roundedWeight(weight * percentages[index]));
        return { reps, weight: load };
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate">
      <div className="container mx-auto p-6 rounded-md shadow-md shadow-midnight bg-charcoal border-solid border-midnight border-2 sm:p-8 md:max-w-sm lg:max-w-md">
        <h1 className="text-3xl text-light-silver underline underline-offset-4 decoration-dashed decoration-persian-red text-center font-bold bg-gradient-to-b from-blood-red to-transparent rounded-md mb-4">
          Warm Up Set Calculator
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="number"
            value={workingSet}
            onChange={(e) => setWorkingSet(e.target.value)}
            placeholder="Enter working set weight (lbs)"
            className="p-2 rounded-md bg-cinereous text-light-silver font-semibold"
          />
          <div className="text-silver">
            <button
              type="submit"
              onClick={toggleUnit}
              className="px-4 py-2 rounded-md text-charcoal bg-sky hover:bg-royal-blue hover:text-silver"
            >
              {unit === "lbs" ? "Switch to kg" : "Switch to lbs"}
            </button>
          </div>
          <div className="flex space-x-2">
            <button
              type="submit"
              onClick={() => setExperienceLevel("Novice")}
              className={`px-4 py-2 rounded-md text-light-silver 
                        ${
                          experienceLevel === "Novice"
                            ? "bg-blood-red"
                            : "bg-cinereous hover:bg-persian-red"
                        }`}
            >
              Novice
            </button>
            <button
              type="submit"
              onClick={() => setExperienceLevel("Advanced")}
              className={`px-4 py-2 rounded-md text-light-silver 
                        ${
                          experienceLevel === "Advanced"
                            ? "bg-blood-red"
                            : "bg-cinereous hover:bg-persian-red"
                        }`}
            >
              Advanced
            </button>
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-persian-red text-light-silver hover:bg-crimson"
          >
            Calculate
          </button>

          {warmUpSets.length > 0 && (
            <div className="flex flex-col w-full justify-center content-center text-silver mt-4">
              {warmUpSets.map((set, index) => (
                <div key={index} className="mb-2">
                  {set.reps}x - {set.weight}
                  {isLbs ? "lbs" : "kg"}
                </div>
              ))}
              <div className="font-bold">
                Working Sets - {workingSet}
                {isLbs ? "lbs" : "kg"}
              </div>
            </div>
          )}
        </form>
        <HomeLink />
      </div>
    </div>
  );
}

export default WarmUpCalc;
