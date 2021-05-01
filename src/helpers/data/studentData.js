const students = [
  {
    id: 1,
    firstName: 'Trinity',
    lastName: 'Christiana',
    isDead: false
  },
  {
    id: 2,
    firstName: 'Aja',
    lastName: 'W',
    isDead: false
  },
  {
    id: 3,
    firstName: 'Dr.',
    lastName: 'T',
    isDead: false
  },
];

const getLiveStudents = () => students.filter((student) => !student.isDead);
const getDeadStudents = () => students.filter((student) => student.isDead);

const killStudent = () => {
  const currentLiveStudents = getLiveStudents();
  const randomStudent = currentLiveStudents[Math.floor(Math.random() * currentLiveStudents.length)];

  const index = students.indexOf(randomStudent);

  students[index].isDead = true;

  return [getLiveStudents(), getDeadStudents()];
};

export {
  getLiveStudents,
  getDeadStudents,
  killStudent,
  students
};
