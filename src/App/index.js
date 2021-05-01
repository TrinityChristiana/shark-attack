import React, { useEffect, useState } from 'react';
import './App.scss';
import { Button } from 'reactstrap';
import {
  getLiveStudents,
  getDeadStudents,
  killStudent
} from '../helpers/data/studentData';

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
    console.warn('dfsfsdfsdf');
  };

  return (
    <div className='App'>
      {/* Kill student button */}
      <Button color='danger' onClick={killEmDead}>Kill em Dead</Button>
      <h2>Living Students</h2>
      <ul>
        {livinStudents.map((liveStudent) => (
          <li key={liveStudent.id}>
            {`${liveStudent.firstName} ${liveStudent.lastName}`}
          </li>
        ))}
      </ul>
      <h2>Dead Students</h2>
      <ul>
        {deadStudents.map((liveStudent) => (
          <li key={liveStudent.id}>
            {`${liveStudent.firstName} ${liveStudent.lastName}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
