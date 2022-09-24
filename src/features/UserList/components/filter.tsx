import React from 'react';
import Search from '@/components/common/Search';
import Select from '@/components/common/Select';

export type FilterProps = {
  gender?: string;
  onSearch: (value: string) => void;
  onChangeSelect: (value: string) => void;
};

function Filter({ gender, onSearch, onChangeSelect }: FilterProps) {
  const options = [
    {
      label: 'All',
      value: '',
    },
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
  ];

  return (
    <div className="flex justify-start">
      <Search title="Search" name="search" onChange={(e) => onSearch(e.target.value)} />
      <Select
        title="Gender"
        name="gender"
        value={gender}
        options={options}
        defaultValue="all"
        onChange={(e) => onChangeSelect(e.target.value)}
      />
    </div>
  );
}

Filter.defaultProps = {
  gender: '',
};

export default Filter;
