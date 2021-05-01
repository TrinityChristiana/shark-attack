import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import {
  getLiveStudents,
  getDeadStudents,
  killStudent
} from '../helpers/data/studentData';
import StudentList from '../components/StudentList';

function App() {
  const [livinStudents, setLivinStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);

  useEffect(() => {
    setLivinStudents(getLiveStudents());
    setDeadStudents(getDeadStudents());
  }, []);

  const killEmDead = () => {
    const [living, dead] = killStudent();
    setLivinStudents(living);
    setDeadStudents(dead);
  };

  return (
    <div className='App'>
      <Button
        color='danger'
        onClick={killEmDead}
        disabled={livinStudents.length <= 0}
      >
        Kill em Dead
      </Button>
      <h2>Living Students</h2>
      <StudentList color='info' studentArray={livinStudents} />
      <h2>Dead Students</h2>
      <StudentList color='secondary' studentArray={deadStudents}/>
    </div>
  );
}

export default App;
