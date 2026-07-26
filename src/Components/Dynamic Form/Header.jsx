import React from "react";

const Header = ({heading,textPara}) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h1 className="font-semibold text-headingTextColor text-md uppercase">
         {heading}
        </h1>
        <p className="text-bodyTextColor text-sm  font-medium">
          {textPara}
        </p>
      </div>
    </>
  );
};

export default Header;
