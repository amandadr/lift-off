import React from "react";
import calculators from "../../helpers/calcData";
import NavButton from "./NavButton";

const Navigation = () => {
  return (
    <nav className="mt-8">
      <ul className="flex flex-col flex-wrap items-top justify-center mt-8 gap-4 md:flex-row md:gap-8">
        {calculators.map((calc) => (
          <li key={calc.name} className="flex-2">
            <NavButton to={calc.to} name={calc.name} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
