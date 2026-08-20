const Button = ({ text, icon }) => {
  return (
    <>
      {text === "Next" ? (
        <button
          o
          className=" cursor-pointer px-4 py-3 border border-borderColor flex items-center justify-center gap-2 rounded-4xl"
        >
          <p className="text-sm text-purpleColor font-semibold">{text} </p>
          {icon}
        </button>
      ) : (
        <button className=" cursor-pointer px-4 py-3 border border-borderColor flex items-center justify-center gap-2 rounded-4xl">
          {icon}
          <p className="text-sm text-purpleColor font-semibold">{text} </p>
        </button>
      )}
    </>
  );
};

export default Button;
