import React from 'react';
import { FilterWrap } from './Filter.styled';

const Filter = () => {
  return (
    <FilterWrap>
      <label>Find contacts by name</label>
      <input type="text" name="filter" />
    </FilterWrap>
  );
};

export default Filter;
