import React, { useState } from "react";
import HomeLink from "../shared/HomeBtn";
import LinkBtn from "../shared/LinkBtn";
import { calculateOptimalReps } from "../../helpers/calcFuncs";
import roundWeight from "../../helpers/roundWeight";

const OptimalRepsCalc = () => {
  const [oneRepMax, setOneRepMax] = useState("");
  const [isLbs, setIsLbs] = useState(true);
  const [results, setResults] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation
    if (isNaN(oneRepMax)) return;

    const calculatedReps = calculateOptimalReps(oneRepMax);
    setResults(calculatedReps);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dark-midnight">
      <div className="container mx-auto p-6 rounded-md shadow-md shadow-forest bg-charcoal border-solid border-midnight-green border-2 sm:p-8 md:max-w-sm lg:max-w-md overflow-scroll scrollbar-hide">
        <h1 className="text-3xl h-12 text-light-silver underline underline-offset-4 decoration-dashed decoration-persian-red text-center font-bold bg-gradient-to-b from-blood-red to-black-twilight rounded-md mb-4">
          Optimal Rep Ranges
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 justify-between"
        >
          <input
            type="number"
            id="oneRepMax"
            value={oneRepMax}
            onChange={(e) => setOneRepMax(e.target.value)}
            placeholder={`Enter 1RM (${isLbs ? "lbs" : "kg"})`}
            className="p-2 rounded-md bg-cinereous text-light-silver font-semibold"
          />
          <div className="text-silver">
            <button
              type="button"
              onClick={(e) => {
                setIsLbs(!isLbs);
                handleSubmit(e);
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
            {oneRepMax === "" ? "Calculate" : "Recalculate"}
          </button>

          {Object.keys(results).length > 0 && (
            <div className="text-light-silver text-center text-xl">
              <div className="border-2 border-solid border-soft-green rounded-xl p-2 mb-4">
                <h2>Endurance (50%-60%):</h2>
                <p className="text-lg">
                  {roundWeight(results.endurance[0], isLbs)}
                  {isLbs ? "lbs" : "kg"} -{" "}
                  {roundWeight(results.endurance[1], isLbs)}
                  {isLbs ? "lbs" : "kg"} x 15-30 reps
                </p>
              </div>
              <div className="border-2 border-solid border-soft-green rounded-xl p-2 mb-4">
                <h2>Size (70%-80%):</h2>
                <p className="text-lg">
                  {roundWeight(results.size[0], isLbs)}
                  {isLbs ? "lbs" : "kg"} - {roundWeight(results.size[1], isLbs)}
                  {isLbs ? "lbs" : "kg"} x 8-12 reps
                </p>
              </div>
              <div className="border-2 border-solid border-soft-green rounded-xl p-2 mb-4">
                <h2>Strength (85%-95%):</h2>
                <p className="text-lg">
                  {roundWeight(results.strength[0], isLbs)}
                  {isLbs ? "lbs" : "kg"} -{" "}
                  {roundWeight(results.strength[1], isLbs)}
                  {isLbs ? "lbs" : "kg"} x 3-5 reps
                </p>
              </div>
            </div>
          )}
        </form>
        <div className="flex justify-between mt-6">
          <HomeLink />
          <LinkBtn label="Calculate 1RM" route="/one-rep-max" />
        </div>
      </div>
    </div>
  );
};

export default OptimalRepsCalc;
