const Header = ({ heading, textPara }) => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="font-semibold text-headingTextColor text-md capitalize">
          {heading}
        </h1>
        <p className="text-bodyTextColor text-sm  font-medium">{textPara}</p>
      </div>
    </>
  );
};

export default Header;
