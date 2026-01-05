const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                  text-white font-semibold py-2 px-6 rounded-xl shadow-md
                  hover:scale-105 hover:shadow-xl transition-transform duration-300
                  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
