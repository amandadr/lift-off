import React from "react";
import calculators from "../../helpers/calcData";
import NavButton from "./NavButton";

const Navigation = () => {
  return (
    <nav className="mt-8">
      <ul className="flex flex-col gap-4 md:flex-row md:gap-8">
        {calculators.map((calc) => (
          <li key={calc.name}>
            <NavButton to={calc.to} name={calc.name} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
