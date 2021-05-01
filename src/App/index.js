import React, { useEffect, useState } from 'react';
import './App.scss';
import { Button } from 'reactstrap';
import {
  getLiveStudents,
  getDeadStudents,
  killStudent
} from '../helpers/data/studentData';
import SharkTank from '../components/tank/SharkTank';
import GraveYard from '../components/grave/Graveyard';

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
      <SharkTank livinStudents={livinStudents} />
      <h2>Dead Students</h2>
      <GraveYard deadStudents={deadStudents}/>
    </div>
  );
}

export default App;
