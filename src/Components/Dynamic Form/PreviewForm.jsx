import { useContext } from "react";
import Header from "./Header";
import { StoreContext } from "./Context/ContextApi";
import { ChevronDown, Save } from "lucide-react";
import Button from "./Button";

const PreviewForm = () => {
  const {
    fieldsArr,
    currField,
    titledOnField,
    placeHolderOnField,
    requiredOnField,
  } = useContext(StoreContext);
  return (
    <>
      <div className="px-5 pt-5 flex flex-col gap-4 mb-4">
        <Header
          heading={"Form Preview"}
          textPara={"This is how your form will look"}
        />

        {fieldsArr.length === 0 && (
          <div className="bg-lightPurpleColor w-full py-4 px-4 rounded-lg border border-borderColor text-center">
            <p className="text-bodyTextColor text-sm font-medium">
              Add fields to see preview
            </p>
          </div>
        )}
        <div className="flex flex-col gap-4 mb-6">
          {fieldsArr?.map((f) => (
            <div key={f.id} className="text-black">
              {f.heading === "Text Field" && (
                <div className="flex flex-col gap-1">
                  <label className="flex items-center gap-1">
                    <p className=" pl-2 font-semibold text-headingTextColor">
                      {titledOnField[f.id]}
                    </p>
                    {requiredOnField[f.id] && (
                      <span className="text-red-600">*</span>
                    )}
                  </label>
                  <input
                    type="text"
                    className="inputCSS"
                    placeholder={placeHolderOnField[f.id]}
                  />
                </div>
              )}

              {f.heading === "Drop Down" && (
                <div className="relative">
                  <label className="flex items-center gap-1">
                    <p className=" pl-2 font-semibold text-headingTextColor">
                      {titledOnField[f.id]}
                    </p>
                    {requiredOnField[f.id] && (
                      <span className="text-red-600">*</span>
                    )}
                  </label>
                  <input
                    readOnly
                    type="text"
                    className="inputCSS"
                    placeholder={placeHolderOnField[f.id]}
                  />
                  <ChevronDown className="absolute  right-4 top-8 cursor-pointer" />
                </div>
              )}

              {f.heading === "Check Box" && (
                <div className="flex items-center gap-2 ml-4">
                  <input type="checkbox" className="" />
                  <p className="font-semibold text-headingTextColor">
                    {titledOnField[f.id]}
                  </p>
                  {requiredOnField[f.id] && (
                    <span className="text-red-600">*</span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {fieldsArr.length > 0 && (
          <Button
            text={"Save Form"}
            icon={<Save size={"20px"} color="#fff" />}
            bgcolor={"bg-btnBgPurpleColor"}
            textColor={"text-btnPurpleTextColor"}
          />
        )}
      </div>
    </>
  );
};

export default PreviewForm;
