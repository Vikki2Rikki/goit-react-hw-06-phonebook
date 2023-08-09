import React from 'react';
import { FilterWrap, FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const inputFilter = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue.toLowerCase()));
  };
  return (
    <FilterWrap>
      <FilterLabel>Find contacts by name</FilterLabel>
      <input type="text" name="filter" value={filter} onChange={inputFilter} />
    </FilterWrap>
  );
};

export default Filter;
