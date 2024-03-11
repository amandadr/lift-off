import React, { useState } from "react";
import HomeLink from "../shared/HomeBtn";
import LinkBtn from "../shared/LinkBtn";
import { calculateORM } from "../../helpers/calcFuncs";
import roundWeight from "../../helpers/roundWeight";
import barbell from "../../assets/images/barbell.png";
import stylesData from "../../assets/stylesData";

const ORMCalc = () => {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [oneRepMax, setOneRepMax] = useState("");
  const [unit, setUnit] = useState("lbs");
  const [change, setChange] = useState(false);
  const isLbs = unit === "lbs";
  const styles = stylesData(unit);

  const toggleUnit = () => {
    setUnit(unit === "lbs" ? "kg" : "lbs");
  };

  const addBorder = () => {
    return "border-2 border-solid border-soft-green";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedORM = calculateORM(weight, reps);
    // Validation
    if (
      weight <= 0 ||
      reps <= 0 ||
      weight === "" ||
      reps === "" ||
      calculatedORM <= 0 ||
      isNaN(calculatedORM)
    ) {
      return;
    } else {
      setOneRepMax(roundWeight(calculatedORM, isLbs));
      setChange(false);
    }
  };

  return (
    <div className={styles.div1}>
      <div className={styles.div2}>
        <div className={styles.divTitle}>
          <img src={barbell} alt="Barbell" className={styles.barbell} />
          <h1 className={styles.h1Title}>One Rep Max</h1>
        </div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
              setChange(true);
            }}
            placeholder={`Enter weight (${isLbs ? "lbs" : "kg"})`}
            className={styles.inputField}
          />
          <input
            type="number"
            id="reps"
            value={reps}
            onChange={(e) => {
              setReps(e.target.value);
              setChange(true);
            }}
            placeholder="Enter rep count"
            className={styles.inputField}
          />

          <div className="text-silver">
            <button
              type="button"
              onClick={(e) => {
                toggleUnit();
                if (oneRepMax !== "") setChange(true);
              }}
              className={styles.btnUnits}
            >
              {isLbs ? "Use kg" : "Use lbs"}
            </button>
          </div>
          <button
            type="submit"
            className={`${styles.btnCalculate} ${
              change ? "border-2 border-sky" : null
            }`}
          >
            {oneRepMax === "" ? "Calculate" : "Recalculate"}
          </button>

          {oneRepMax && (
            <div className="text-light-silver text-center text-xl border-2 border-solid border-soft-green rounded-xl p-2">
              <div>Estimated 1RM:</div>{" "}
              <div className="underline underline-offset-4 font-bold text-2xl">
                {`${oneRepMax}${isLbs ? "lbs" : "kg"}`}
              </div>
            </div>
          )}
        </form>
        <div className={styles.divFooter}>
          <HomeLink />
          <LinkBtn label="Calculate Reps" route="/optimal-reps" />
        </div>
      </div>
    </div>
  );
};

export default ORMCalc;
