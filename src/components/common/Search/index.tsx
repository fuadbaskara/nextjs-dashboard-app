import React from 'react';

export type SearchProps = {
  title: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  defaultValue?: string;
  placeholder?: string;
};

function Search({ title, name, onChange, value, defaultValue, placeholder }: SearchProps) {
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
            className="block w-full min-w-[200px] rounded-md border-gray-300 py-2 px-2 outline-none hover:cursor-pointer sm:text-sm"
            autoComplete="off"
            value={value || defaultValue}
            placeholder={placeholder}
            onChange={(e) => {
              onChange(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}

Search.defaultProps = {
  defaultValue: '',
  placeholder: '',
};

export default Search;
