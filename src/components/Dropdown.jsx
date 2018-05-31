import Select from 'react-select';
import 'react-select/dist/react-select.css'
import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({value, handleSelectChange, options}) => (
  <Select
      multi
      onChange={handleSelectChange}
      options={options}
      placeholder="Select your favourite(s)"
      simpleValue
      matchPos='start'
      value={value}
    />
);

Dashboard.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default Dashboard;
