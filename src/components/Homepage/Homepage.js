import React from "react";
import logo from "../../assets/images/logo.svg";
import Navigation from "../Navigation/Navigation";

const Homepage = () => {
  return (
    <div className="container mx-auto bg-charcoal">
      <header className="flex items-center justify-center h-32 bg-light-silver">
        <img src={logo} alt="Lift Off Logo" className="h-16" />
      </header>
      <main className="flex items-top justify-center h-screen bg-charcoal">
        <Navigation />
      </main>
    </div>
  );
};

export default Homepage;
