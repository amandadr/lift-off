import React from "react";
import { Link } from "react-router-dom";

const LinkBtn = ({ label, route }) => {
  return (
    <Link to={route}>
      <button className="bg-persian-red text-light-silver border-solid border-2 border-silver rounded-lg hover:bg-blood-red hover:border-crimson text-lg font-semibold py-1 px-3 rounded mt-4 inline-block">
        {label}
      </button>
    </Link>
  );
};

export default LinkBtn;
