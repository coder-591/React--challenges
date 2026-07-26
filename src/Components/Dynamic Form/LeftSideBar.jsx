import Fields from "./Fields";
import Header from "./Header";

const LeftSideBar = () => {
  return (
    <div className="flex flex-col px-5 pt-5 gap-6">
      <Header heading={"Add Fields"} textPara={"Drag & Drop fields to the form"} />
      <Fields />
    </div>
  );
};

export default LeftSideBar;
