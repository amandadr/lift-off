import React, { useState } from "react";
import HomeLink from "../shared/HomeBtn";
import LinkBtn from "../shared/LinkBtn";
import { calculatePlates } from "../../helpers/calcFuncs";
import barbell from "../../assets/images/barbell.png";
import stylesData from "../../assets/stylesData";

const PlatesCalc = () => {
  const [barbellHalf, setbarbellHalf] = useState({});
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("lbs");
  const [change, setChange] = useState(false);
  const isLbs = unit === "lbs";
  const styles = stylesData(unit);

  // const toggleUnit = () => {
  //   setUnit(unit === "lbs" ? "kg" : "lbs");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (weight < 50 || weight === "") {
      return;
    } else {
      setbarbellHalf(calculatePlates(weight));
      setChange(false);
    }
  };

  return (
    <div className={styles.div1}>
      <div className={styles.div2}>
        <div className={styles.divTitle}>
          <img src={barbell} alt="Barbell" className={styles.barbell} />
          <h1 className={styles.h1Title}>Plates / Side</h1>
          <title>Plates per Side (Barbell)</title>
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
            onKeyUpCapture={(e) => {
              handleSubmit(e);
            }}
            placeholder={`Enter weight (${isLbs ? "lbs" : "kg"})`}
            className={styles.inputField}
          />

          {/* <div className="text-silver">
            <button
              type="button"
              onClick={(e) => {
                toggleUnit();
                if (Object.keys(barbellHalf).length > 0) setChange(true);
              }}
              className={styles.btnUnits}
            >
              {isLbs ? "Use kg" : "Use lbs"}
            </button>
          </div> */}
          <button
            type="submit"
            className={`${styles.btnCalculate} ${
              change ? "border-2 border-sky" : null
            }`}
          >
            {!change ? "Calculate" : "Recalculate"}
          </button>

          {Object.keys(barbellHalf).length > 0 && weight >= 50 ? (
            <div>
              <div className="flex flex-row justify-around border-2 border-solid border-soft-green rounded-xl p-4 mb-2">
                {Object.keys(barbellHalf)
                  .sort((a, b) => b - a)
                  .map((plate, index) => (
                    <div key={index} className="text-light-silver text-center">
                      <p className="text-xl font-bold border-2 border-solid border-sky rounded-xl p-2 px-4 mb-[.1em]">
                        {plate}
                      </p>
                      <p className="text-2xl">x {barbellHalf[plate]}</p>
                    </div>
                  ))}
              </div>
              <p className="text-light-silver text-center text-xl mb-[-2em]">
                {Math.round(weight / 5) * 5}lbs Total Weight
              </p>
            </div>
          ) : null}
        </form>
        <div className={styles.divFooter}>
          <HomeLink />
          <LinkBtn label="Calculate Warm Up" route="/warm-up-sets" />
        </div>
      </div>
    </div>
  );
};

export default PlatesCalc;
