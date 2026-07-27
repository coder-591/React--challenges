const Button = ({ text, icon, bgcolor, textColor, border, setIsActive }) => {
  return (
    <>
      <button
        onClick={() => setIsActive(prev => !prev)}
        className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl ${bgcolor}  shadow-sm cursor-pointer hover:-translate-y-1 transition-all ${border}`}
      >
        {icon}
        <p className={`font-medium text-sm ${textColor}`}>{text}</p>
      </button>
    </>
  );
};

export default Button;
