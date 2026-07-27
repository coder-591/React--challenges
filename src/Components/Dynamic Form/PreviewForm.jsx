import React from "react";
import Header from "./Header";

const PreviewForm = () => {
  return (
    <>
      <div className="px-5 pt-5 flex flex-col gap-4">
        <Header
          heading={"Form Preview"}
          textPara={"This is how your form will look"}
        />

        <div className="bg-lightPurpleColor w-full py-4 px-4 rounded-lg border border-borderColor text-center">
          <p className="text-bodyTextColor text-sm font-medium">Add fields to see preview</p>
        </div>
      </div>
    </>
  );
};

export default PreviewForm;
