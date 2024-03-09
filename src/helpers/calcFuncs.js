import roundWeight from "./roundWeight";

export function calculateORM(weight, reps) {
  // Validation
  if (isNaN(weight) || isNaN(reps) || weight <= 0 || reps <= 0) {
    return alert(
      "Invalid input: Please enter positive numbers for weight and reps."
    );
  }

  const brzyckiORM = weight / (1.0278 - 0.0278 * reps);
  const epleyORM = weight * (1 + 0.0333 * reps);
  const landerORM = (100 * weight) / (101.3 - 2.67123 * reps);
  const lombardiORM = weight * Math.pow(reps, 0.1);
  const wathenORM = (100 * weight) / (48.8 + 53.8 * Math.exp(-0.075 * reps));
  const mayhewORM = (100 * weight) / (52.2 + 41.9 * Math.exp(-0.055 * reps));
  const oConnerORM = weight * (1 + 0.025 * reps);

  const averageORM =
    (brzyckiORM +
      epleyORM +
      landerORM +
      lombardiORM +
      wathenORM +
      mayhewORM +
      oConnerORM) /
    7;
  return averageORM;
}

export const calculateWarmUpSets = (weight, level, isLbs) => {
  // Validation
  if (isNaN(weight) || weight <= 0) {
    return alert("Invalid input: Please enter a positive number for weight.");
  }

  const emptyBar = isLbs ? 45 : 20; // kg equivalent of 45lbs is roughly 20.4kg

  if (level === "Novice") {
    const increment = (roundWeight(weight, isLbs) - emptyBar) / 4;
    return [
      { reps: 10, weight: emptyBar },
      { reps: 7, weight: roundWeight(emptyBar + increment, isLbs) },
      { reps: 5, weight: roundWeight(emptyBar + 2 * increment, isLbs) },
      { reps: 3, weight: roundWeight(emptyBar + 3 * increment, isLbs) },
    ];
  } else {
    // Advanced
    const advancedReps = [10, 5, 3, 2, 1];
    const percentages = [1, 0.25, 0.45, 0.75, 0.9];

    return advancedReps.map((reps, index) => {
      let load;
      index === 0 && (load = emptyBar);
      index !== 0 && (load = roundWeight(weight * percentages[index], isLbs));
      return { reps, weight: load };
    });
  }
};