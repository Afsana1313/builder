import React from "react";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center px-4 md:px-0 bg-slate-400">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-center">
          Welcome to My Page
        </h1>
        <p className="mt-4 text-base md:text-lg">
          This is a responsive, centered section.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
