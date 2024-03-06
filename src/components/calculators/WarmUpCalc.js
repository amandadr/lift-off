import HomeLink from "../shared/HomeLink";
import React, { useState } from "react";

function WarmUpCalc() {
  const [workingSet, setWorkingSet] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("Novice");
  const [warmUpSets, setWarmUpSets] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedSets = calculateWarmUpSets(workingSet, experienceLevel);
    setWarmUpSets(calculatedSets);
  };

  const calculateWarmUpSets = (weight, level) => {
    const roundedWeight = Math.round(weight / 5) * 5;
    const emptyBar = 45;

    if (level === "Novice") {
      const noviceReps = [10, 7, 5, 3];
      const increment = (roundedWeight - emptyBar) / (noviceReps.length - 1);
      return noviceReps.map((reps, i) => ({
        reps,
        weight: Math.round((emptyBar + i * increment) / 5) * 5,
      }));
    } else {
      // Advanced
      const advancedReps = [10, 5, 3, 2, 1];
      const percentages = [0.25, 0.45, 0.75, 0.9];
      return advancedReps.map((reps, i) => ({
        reps,
        weight:
          i === 0
            ? emptyBar
            : Math.round((roundedWeight * percentages[i - 1]) / 5) * 5,
      }));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={workingSet}
          onChange={(e) => setWorkingSet(e.target.value)}
          placeholder="Enter working set weight (lbs)"
        />
        <div>
          <button type="button" onClick={() => setExperienceLevel("Novice")}>
            Novice
          </button>
          <button type="button" onClick={() => setExperienceLevel("Advanced")}>
            Advanced
          </button>
        </div>
        <button type="submit">Calculate</button>

        {warmUpSets.length > 0 && (
          <ul>
            {warmUpSets.map((set, index) => (
              <li key={index}>
                {set.reps}x - {set.weight}lbs
              </li>
            ))}
            <li>Working Sets - {workingSet}lbs</li>
          </ul>
        )}
      </form>
      <HomeLink />
    </>
  );
}

export default WarmUpCalc;
