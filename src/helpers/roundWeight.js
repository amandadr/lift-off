const roundWeight = (weight, isLbs) => {
  // lbs to nearest 5lb increment
  if (isLbs) {
    return Math.round(weight / 5) * 5;
  } else {
    // kg to nearest 0.5kg increment
    return (Math.round(weight * 2) / 2).toFixed(1);
  }
};

export default roundWeight;
