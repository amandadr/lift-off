import React from "react";
import { Link } from "react-router-dom";

const HomeLink = () => {
  return (
    <Link
      to="/"
      className="bg-cinereous hover:bg-blood-red text-white font-bold py-2 px-4 rounded mt-4 inline-block"
    >
      Go Home
    </Link>
  );
};

export default HomeLink;
