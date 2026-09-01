const Button = ({ text, icon, func }) => {
  return (
    <>
      {text === "Next" ? (
        <button
          onClick={func}
          className=" cursor-pointer px-4 py-3 border border-borderColor flex items-center justify-center gap-2 rounded-4xl"
        >
          <p className="text-sm text-purpleColor font-semibold">{text} </p>
          {icon}
        </button>
      ) : (
        <button
          onClick={func}
          className=" cursor-pointer px-4 py-3 border border-borderColor flex items-center justify-center gap-2 rounded-4xl"
        >
          {icon}
          <p className="text-sm text-purpleColor font-semibold">{text} </p>
        </button>
      )}
    </>
  );
};

export default Button;
