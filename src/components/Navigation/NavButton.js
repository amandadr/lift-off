import React from "react";
import { useNavigate } from "react-router-dom";

const NavButton = ({ to, name }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(to);

  return (
    <button
      className="bg-blood-red text-lg text-light-silver w-64 h-12 border-solid border-2 border-silver rounded-lg hover:bg-persian-red hover:border-blood-red"
      type="button"
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default NavButton;
