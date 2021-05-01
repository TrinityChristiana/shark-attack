import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudent';

const SharkTank = ({ livinStudents }) => (
<ul>
  {livinStudents.map((student) => (
    <LiveStudent key={student.id} student={student} />
  ))}
</ul>);

SharkTank.propTypes = {
  livinStudents: PropTypes.array.isRequired
};

export default SharkTank;
