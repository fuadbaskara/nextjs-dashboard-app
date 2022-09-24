import React, { useState } from 'react';

export type SearchProps = {
  title: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
};

function Search({ title, name, onChange, value, defaultValue, placeholder }: SearchProps) {
  const [keyword, setKeyword] = useState('');

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex flex-grow items-stretch focus-within:z-10">
          <input
            type="text"
            name={name}
            id={name}
            className="block w-full min-w-[200px] rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            autoComplete="off"
            value={value || keyword || defaultValue}
            placeholder={placeholder}
            onChange={(e) => {
              setKeyword(e.target.value);
              onChange(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}

Search.defaultProps = {
  value: '',
  defaultValue: '',
  placeholder: '',
};

export default Search;
