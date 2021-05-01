import React from 'react';
import PropTypes from 'prop-types';

const LiveStudent = ({ student }) => (
<li>
  {`${student.firstName} ${student.lastName}`}
</li>
);

LiveStudent.propTypes = {
  student: PropTypes.object.isRequired
};

export default LiveStudent;
