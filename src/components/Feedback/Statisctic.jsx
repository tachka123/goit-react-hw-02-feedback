import React from 'react';
import T from 'prop-types';

const Statisctic = ({ label, value, percent }) => {
  return (
    <li>
      {label}: {value} {percent && <span>%</span>}
    </li>
  );
};

Statisctic.defaultProps = {
  label: 'error',
  value: 0,
  percent: false,
};

Statisctic.propTypes = {
  label: T.string,
  value: T.number,
  percent: T.bool,
};

export default Statisctic;
