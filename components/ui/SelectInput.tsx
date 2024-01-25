/// this is an ai generated learning material not for production usage 

"use client"
import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  // Add your specific form field name here
  name: string;
  // Add any additional props you need for your forms
  label?: string;
  options: Option[];
  placeholder?: string;
  defaultValue?: string;
  error?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  label,
  options,
  placeholder = 'Choose an option',
  defaultValue = '',
  error,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const showInput = selectedOption === 'other';

  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name}>{label}</label>}
      <select
        id={name}
        name={name}
        className="block appearance-none w-full bg-white border border-gray-300 py-2 px-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        onChange={handleChange}
        value={selectedOption}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        <option value="other">Other</option>
      </select>
      {showInput && (
        <input
          type="text"
          id="otherInput"
          name={`${name}_other`} // Append "_other" for easier form handling
          className="mt-2 block w-full bg-white border border-gray-300 py-2 px-3 rounded shadow leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Specify other"
        />
      )}
      {error && <span className="text-red-500 font-sm">{error}</span>}
    </div>
  );
};

export default SelectInput;
