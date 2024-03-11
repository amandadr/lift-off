import React from "react";
import logo from "../../assets/images/logo.svg";
import Navigation from "../Navigation/Navigation";

const Homepage = () => {
  return (
    <div className="bg-charcoal w-[100vw] bg-charcoal">
      <header className="flex items-center justify-center w-full h-[25vh] bg-slate">
        <img src={logo} alt="Lift Off Logo" className="h-[7em]" />
        <h2 className="text-4xl font-semibold text-black ml-[.5em]">
          Lift Off
        </h2>
      </header>
      <main className="flex items-top justify-center w-full h-[75vh] bg-dark-navy">
        <Navigation />
      </main>
    </div>
  );
};

export default Homepage;
