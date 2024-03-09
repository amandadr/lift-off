import React, { useState } from "react";
import HomeLink from "../shared/HomeBtn";
import { calculateWarmUpSets } from "../../helpers/calcFuncs";

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
    if (workingSet.length === 0) {
      return;
    } else {
      const calculatedSets = calculateWarmUpSets(
        workingSet,
        experienceLevel,
        isLbs
      );
      setWarmUpSets(calculatedSets);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dark-midnight">
      <div className="container mx-auto p-6 rounded-md shadow-md shadow-forest bg-charcoal border-solid border-midnight-green border-2 sm:p-8 md:max-w-sm lg:max-w-md overflow-scroll scrollbar-hide">
        <h1 className="flex text-3xl h-14 justify-center items-center text-light-silver underline underline-offset-4 decoration-dashed decoration-persian-red text-center font-bold bg-gradient-to-b from-blood-red to-black-twilight rounded-md mb-4">
          Warm Up Sets
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="number"
            value={workingSet}
            onChange={(e) => {
              setWorkingSet(e.target.value);
              handleSubmit(e);
            }}
            placeholder={`Enter working set weight (${unit})`}
            className="p-2 rounded-md bg-cinereous text-light-silver font-semibold"
          />
          <div className="text-silver">
            <button
              type="submit"
              onClick={toggleUnit}
              className={`px-4 py-2 rounded-md text-charcoal hover:text-silver text-xl
                        ${
                          unit === "lbs"
                            ? "bg-sky hover:bg-royal-blue"
                            : "bg-soft-green hover:bg-forest"
                        }
              `}
            >
              {unit === "lbs" ? "Use kg" : "Use lbs"}
            </button>
          </div>
          <div className="flex space-x-2">
            <button
              type="submit"
              onClick={() => setExperienceLevel("Novice")}
              className={`px-4 py-2 rounded-md text-light-silver 
                        ${
                          experienceLevel === "Novice"
                            ? "bg-blood-red underline decoration-wavy underline-offset-2"
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
                            ? "bg-blood-red underline decoration-wavy underline-offset-2"
                            : "bg-cinereous hover:bg-persian-red"
                        }`}
            >
              Advanced
            </button>
          </div>
          {workingSet.length === 0 && (
            <button
              type="submit"
              className="px-4 py-2 text-xl rounded-md underline decoration-dotted underline-offset-4 bg-persian-red text-light-silver font-semibold hover:bg-crimson hover:text-2xl hover:text-soft-green hover:font-bold"
            >
              Input to Calculate
            </button>
          )}

          {workingSet.length > 0 && (
            <div className="flex flex-col w-full justify-center content-center mt-4 text-light-silver text-center text-xl border-2 border-solid border-soft-green rounded-xl p-2">
              {warmUpSets.map((set, index) => (
                <div key={index}>
                  {set.reps}x - {set.weight}
                  {isLbs ? "lbs" : "kg"}
                </div>
              ))}
              <div className="text-light-silver text-center text-md border-2 border-solid border-sky rounded-lg px-2 py-1">
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
