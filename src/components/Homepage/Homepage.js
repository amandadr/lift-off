import React from "react";
import logo from "../../assets/images/logo.svg";
import Navigation from "../Navigation/Navigation";

const Homepage = () => {
  return (
    <div className="container mx-auto">
      {" "}
      {/* Example Tailwind for layout */}
      <header className="flex items-center justify-center py-8">
        <img src={logo} alt="Lift Off Logo" className="h-16" />
      </header>
      <main>
        <Navigation />
      </main>
    </div>
  );
};

export default Homepage;
