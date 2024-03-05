import React from "react";
import { Link } from "react-router-dom";

const NavButton = ({ to, name }) => {
  return (
    <button className="bg-gray-700 text-white py-3 px-6 rounded hover:bg-gray-800 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-500">
      <Link to={to}>{name}</Link>
    </button>
  );
};

export default NavButton;
