import React from 'react';
import PropTypes from 'prop-types';
import SingleStudent from './SingleStudent';

const StudentList = ({ studentArray, color = 'danger' }) => (
<ul>
  {studentArray.map((student) => (
    <SingleStudent color={color} key={student.id} student={student} />
  ))}
</ul>
);

StudentList.propTypes = {
  studentArray: PropTypes.array.isRequired,
  color: PropTypes.string,
};

export default StudentList;
