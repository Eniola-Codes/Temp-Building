import React, { ReactNode } from "react";

const AutoplaySlider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="relative overflow-hidden logos">
      <span className=" space-x-10 sm:space-x-20 logos-slide">
        {children}
      </span>
    </div>
  );
};

export default AutoplaySlider;