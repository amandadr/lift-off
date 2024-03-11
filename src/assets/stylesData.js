const stylesData = (unit) => {
  return {
    div1: "flex flex-col items-center justify-center h-screen bg-goku bg-no-repeat bg-cover",
    div2: "container mx-auto rounded-md bg-charcoal shadow-md shadow-forest border-solid border-midnight-green border-2 sm:p-8 md:max-w-sm lg:max-w-md overflow-scroll scrollbar-hide",
    divTitle: "relative h-[6.5em] w-full",
    barbell:
      "absolute h-full w-[90%] left-[5%] object-cover opacity-30 mx-auto",
    h1Title:
      "relative text-3xl h-fit text-light-silver text-center font-bold underline underline-offset-4 rounded-lg pt-6 mx-[-1em] h1-shadow",
    formContainer: "flex flex-col space-y-4 justify-between p-6",
    "input-field":
      "p-2 rounded-md bg-cinereous text-light-silver font-semibold",
    inputField: "p-2 rounded-md bg-cinereous text-light-silver font-semibold",
    btnUnits: `px-3 py-1 rounded-md text-charcoal hover:text-silver text-xl ${
      unit === "lbs"
        ? "bg-sky hover:bg-royal-blue"
        : "bg-soft-green hover:bg-forest"
    }`,
    btnCalculate:
      "px-4 py-2 text-xl rounded-md underline decoration-dotted underline-offset-4 bg-persian-red text-light-silver font-semibold hover:bg-crimson hover:text-2xl hover:text-soft-green hover:font-bold",
    divFooter: "flex justify-between mt-6",
  };
};

export default stylesData;
