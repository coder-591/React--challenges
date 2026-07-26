const Button = ({ text, icon, color, textColor, border }) => {
  return (
    <>
      <button
        className={`flex items-center gap-2 px-5 py-3 rounded-xl ${color}  shadow-sm cursor-pointer hover:-translate-y-1 transition-all ${border}`}
      >
        {icon}
        <p className={`font-medium text-sm ${textColor}`}>{text}</p>
      </button>
    </>
  );
};

export default Button;
