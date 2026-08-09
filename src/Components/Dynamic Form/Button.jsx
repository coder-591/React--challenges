const Button = ({ text, icon, bgcolor, textColor, border, setterFunc }) => {
  return (
    <>
      <button
        onClick={() => setterFunc(prev => !prev)}
        className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl ${bgcolor} shadow-sm cursor-pointer hover:-translate-y-1 transition-all ${border}`}
      >
        <span className="text-iconColor">
          {icon}
        </span>
        <p className={`font-medium text-sm ${textColor || "text-btnTextColor"}`}>
          {text}
        </p>
      </button>
    </>
  );
};

export default Button;
