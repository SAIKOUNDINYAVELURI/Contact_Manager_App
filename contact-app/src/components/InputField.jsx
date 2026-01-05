import React from "react";
const InputField = ({ label, type = "text", value, onChange }) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const floatLabel = isFocused || value; // directly compute instead of useEffect

  return (
    <div className="relative w-full mb-6">
      <input
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder=" " // enable :placeholder-shown
        className="peer w-full bg-gray-800/80 text-white rounded-md px-3 pt-5 pb-2
                   border-b-2 border-gray-600 focus:border-indigo-500
                   outline-none transition-all duration-200"
      />
      <label
        className={`absolute left-3 text-gray-400 text-sm
                    transition-all duration-200
                    ${floatLabel ? "top-1 text-xs text-indigo-400" : "top-5 text-gray-500 text-base"}`}
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
