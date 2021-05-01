import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from './GraveStone';

const GraveYard = ({ deadStudents }) => (
<ul>
  {deadStudents.map((student) => (
    <GraveStone key={student.id} student={student}/>
  ))}
</ul>);

GraveYard.propTypes = {
  deadStudents: PropTypes.array.isRequired
};

export default GraveYard;
