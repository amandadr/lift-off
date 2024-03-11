import React, { useState } from "react";
import HomeLink from "../shared/HomeBtn";
import LinkBtn from "../shared/LinkBtn";
import { calculateOptimalReps } from "../../helpers/calcFuncs";
import roundWeight from "../../helpers/roundWeight";
import barbell from "../../assets/images/barbell.png";
import stylesData from "../../assets/stylesData";

const OptimalRepsCalc = () => {
  const [optimalReps, setOptimalReps] = useState({});
  const [oneRepMax, setOneRepMax] = useState("");
  const [unit, setUnit] = useState("lbs");
  const isLbs = unit === "lbs";
  const styles = stylesData(unit);

  const toggleUnit = () => {
    setUnit(unit === "lbs" ? "kg" : "lbs");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (isNaN(oneRepMax) || oneRepMax <= 0 || oneRepMax === "") {
      return alert("Invalid input: Please enter a positive number for 1RM.");
    }

    const calculatedReps = calculateOptimalReps(oneRepMax);
    setOptimalReps(calculatedReps);
  };

  return (
    <div className={styles.div1}>
      <div className={styles.div2}>
        <div className={styles.divTitle}>
          <img src={barbell} alt="Barbell" className={styles.barbell} />
          <h1 className={styles.h1Title}>Optimal Rep Ranges</h1>
        </div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <input
            type="number"
            id="oneRepMax"
            value={oneRepMax}
            onChange={(e) => setOneRepMax(e.target.value)}
            placeholder={`Enter 1RM (${isLbs ? "lbs" : "kg"})`}
            className={styles.inputField}
          />
          <div className="text-silver">
            <button
              type="button"
              onClick={(e) => {
                toggleUnit();
                if (oneRepMax !== "") handleSubmit(e);
              }}
              className={styles.btnUnits}
            >
              {isLbs ? "Use kg" : "Use lbs"}
            </button>
          </div>
          <button type="submit" className={styles.btnCalculate}>
            {oneRepMax === "" ? "Calculate" : "Recalculate"}
          </button>

          {Object.keys(optimalReps).length > 0 && (
            <div className="text-light-silver text-center text-xl">
              <div className="border-2 border-solid border-soft-green rounded-xl p-2 mb-4">
                <h2>Endurance (50%-60%):</h2>
                <p className="text-lg">
                  {roundWeight(optimalReps.endurance[0], isLbs)}
                  {isLbs ? "lbs" : "kg"} -{" "}
                  {roundWeight(optimalReps.endurance[1], isLbs)}
                  {isLbs ? "lbs" : "kg"} x 15-30 reps
                </p>
              </div>
              <div className="border-2 border-solid border-soft-green rounded-xl p-2 mb-4">
                <h2>Size (70%-80%):</h2>
                <p className="text-lg">
                  {roundWeight(optimalReps.size[0], isLbs)}
                  {isLbs ? "lbs" : "kg"} -{" "}
                  {roundWeight(optimalReps.size[1], isLbs)}
                  {isLbs ? "lbs" : "kg"} x 8-12 reps
                </p>
              </div>
              <div className="border-2 border-solid border-soft-green rounded-xl p-2 mb-4">
                <h2>Strength (85%-95%):</h2>
                <p className="text-lg">
                  {roundWeight(optimalReps.strength[0], isLbs)}
                  {isLbs ? "lbs" : "kg"} -{" "}
                  {roundWeight(optimalReps.strength[1], isLbs)}
                  {isLbs ? "lbs" : "kg"} x 3-5 reps
                </p>
              </div>
            </div>
          )}
        </form>
        <div className={styles.divFooter}>
          <HomeLink />
          <LinkBtn label="Calculate 1RM" route="/one-rep-max" />
        </div>
      </div>
    </div>
  );
};

export default OptimalRepsCalc;
