import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ to, name }) => {
  return (
    <button className="bg-blood-red text-light-silver py-3 px-6 border-solid border-2 border-silver rounded-lg hover:bg-persian-red hover:border-blood-red">
      <Link to={to}>{name}</Link>
    </button>
  );
};

export default NavButton;
