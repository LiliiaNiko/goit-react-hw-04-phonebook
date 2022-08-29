import React from 'react';
import { FilterWrap } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <FilterWrap>
      <label>Find contacts by name</label>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </FilterWrap>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
};
