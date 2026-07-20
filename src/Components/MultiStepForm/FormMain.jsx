import React from "react";

const FormMain = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex items-center px-6 mt-6 gap-5">
          <label className="flex flex-col items-start gap-1">
            <h3 className=" text-[#374151] font-semibold text-sm pl-2">
              First Name
            </h3>

            <input
              type="text"
              placeholder="Afaq"
              className="border outline-0 border-[#e5e7eb] pl-3 p-2 rounded-xl text-sm shadow-md focus:border-[#37c6ab]  focus:shadow-[#37c6ab]"
            />
          </label>

          <label className="flex flex-col items-start gap-1">
            <h3 className=" text-[#374151] font-semibold text-sm pl-2">
              Last Name
            </h3>
            <input
              type="text"
              placeholder="Ali"
              className="border outline-0 border-[#e5e7eb] pl-3 p-2 rounded-xl text-sm shadow-md focus:border-[#37c6ab]  focus:shadow-[#37c6ab]"
            />
          </label>
        </div>

        <div className="flex flex-col items-start px-6 mt-6 gap-5">
          <label className="flex flex-col items-start gap-1">
            <h3 className=" text-[#374151] font-semibold text-sm pl-2">
              Work email
            </h3>
            <input
              type="email"
              placeholder="afaq@company.com"
              className="border outline-0 border-[#e5e7eb] pl-3 p-2 rounded-xl text-sm w-104 shadow-md focus:border-[#37c6ab]  focus:shadow-[#37c6ab]"
            />
          </label>
          <label className="flex flex-col items-start gap-1">
            <h3 className=" text-[#374151] font-semibold text-sm pl-2">
              Password
            </h3>
            <input
              type="password"
              placeholder="Min. 8 character"
              className="border outline-0 border-[#e5e7eb] pl-3 p-2 rounded-xl text-sm w-104 shadow-md focus:border-[#37c6ab]  focus:shadow-[#37c6ab]"
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default FormMain;
