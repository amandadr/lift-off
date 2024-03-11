import React from "react";
import { Link } from "react-router-dom";

const HomeLink = () => {
  return (
    <Link
      to="/"
      className="bg-cinereous hover:bg-blood-red text-light-silver text-lg font-semibold py-1 px-3 rounded mt-4 inline-block"
    >
      Home
    </Link>
  );
};

export default HomeLink;
