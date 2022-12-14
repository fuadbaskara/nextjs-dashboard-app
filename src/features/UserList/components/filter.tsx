import React from 'react';
import Search from '@/components/common/Search';
import Select from '@/components/common/Select';
import Button from '@/components/common/Button';

export type FilterProps = {
  gender?: string;
  searchValue: string;
  onSearch: (value: string) => void;
  onSelect: (value: string) => void;
  onResetFilter: () => void;
};

function Filter({
  gender,
  searchValue,
  onSearch,
  onSelect,
  onResetFilter,
}: FilterProps) {
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
    <div className="flex flex-col space-y-4 md:flex-row md:items-end md:space-y-0 md:space-x-4">
      <Search
        title="Search"
        name="search"
        placeholder="Search by keyword"
        value={searchValue}
        onChange={(e) => onSearch(e.target.value)}
      />
      <Select
        title="Gender"
        name="gender"
        value={gender}
        options={options}
        defaultValue="all"
        onChange={(e) => onSelect(e.target.value)}
      />
      <Button
        className="font-small hover:bg-white-100 items-center rounded-md border border-blue-100 bg-white px-2 py-2 text-sm text-gray-500 hover:border-blue-300 hover:text-blue-400 focus:border-blue-400"
        type="button"
        onClick={onResetFilter}
      >
        Reset Filter
      </Button>
    </div>
  );
}

Filter.defaultProps = {
  gender: '',
};

export default Filter;
