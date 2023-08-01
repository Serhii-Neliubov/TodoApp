import React from "react";

const MySelect = ({ defaultOptionName, options, optionValue, onChange }) => {
  return (
    <select value={optionValue} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="">
        {defaultOptionName}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
