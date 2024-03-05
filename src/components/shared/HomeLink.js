import React from "react";
import { Link } from "react-router-dom";

const HomeLink = () => {
  return (
    <Link
      to="/"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Go Home
    </Link>
  );
};

export default HomeLink;
