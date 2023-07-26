import React from "react";

export const InputType = ({
  labelText,
  labelFor,
  inputType,
  value,
  onChange,
  name,
}) => {
  return (
    <>
      <div className="block mb-2">
        <label
          htmlFor={labelFor}
          className="block text-sm font-medium text-gray-700"
        >
          {labelText}
        </label>
      </div>
      <div className="mb-2">
        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          className="appearance-none block  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    </>
  );
};
