import React from 'react';

export type SelectProps = {
  title: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
};

export type SelectOption = {
  label: string;
  value: string;
};

function Select({ title, name, onChange, options, value, defaultValue, placeholder }: SelectProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <select
        id={name}
        name={name}
        className="mt-1 block w-full min-w-[200px] rounded-md border-gray-300 py-2 pl-3 pr-10 text-base shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        value={value || defaultValue}
        placeholder={placeholder}
        onChange={onChange}
      >
        {(options || []).map((option: SelectOption) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.defaultProps = {
  value: '',
  defaultValue: '',
  placeholder: '',
};

export default Select;
