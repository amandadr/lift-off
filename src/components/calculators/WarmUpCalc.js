import React, { useState } from "react";
import HomeLink from "../shared/HomeBtn";
import LinkBtn from "../shared/LinkBtn";
import { calculateWarmUpSets } from "../../helpers/calcFuncs";
import barbell from "../../assets/images/barbell.png";
import stylesData from "../../assets/stylesData";

function WarmUpCalc() {
  const [workingSet, setWorkingSet] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("Novice");
  const [warmUpSets, setWarmUpSets] = useState([]);
  const [unit, setUnit] = useState("lbs");
  const isLbs = unit === "lbs";
  const styles = stylesData(unit);

  const toggleUnit = () => {
    setUnit(unit === "lbs" ? "kg" : "lbs");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (workingSet <= 0 || isNaN(workingSet)) {
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
    <div className={styles.div1}>
      <div className={styles.div2}>
        <div className={styles.divTitle}>
          <img src={barbell} alt="Barbell" className={styles.barbell} />
          <h1 className={styles.h1Title}>Warm Up Sets</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className={`${styles.formContainer} mb-[-2em]`}
        >
          <input
            type="number"
            value={workingSet}
            onChange={(e) => {
              setWorkingSet(e.target.value);
              handleSubmit(e);
            }}
            placeholder={`Enter working set weight (${unit})`}
            className={styles.inputField}
          />
          <div className="text-silver">
            <button
              type="submit"
              onClick={toggleUnit}
              className={styles.btnUnits}
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
            <button type="submit" className={styles.btnCalculate}>
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
        <div className={styles.divFooter}>
          <HomeLink />
          <LinkBtn label="Calculate Plates" route="/barbell" />
        </div>
      </div>
    </div>
  );
}

export default WarmUpCalc;
