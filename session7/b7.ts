class Student {
  constructor(
    public id: number,
    public name: string,
    public className: string
  ) {}
}

function filterStudentsByClass(
  students: Student[],
  className: string
): Student[] {
  return students.filter((student) => student.className === className);
}

let students: Student[] = [
  new Student(1, "hoang", "A"),
  new Student(2, "hoen", "B"),
  new Student(3, "bunn", "A"),
  new Student(4, "huhu", "C"),
  new Student(5, "kkkk", "A"),
];

let classNameToFilter: string = "A";
let filteredStudents: Student[] = filterStudentsByClass(
  students,
  classNameToFilter
);

console.log(`Sinh viên trong lớp ${classNameToFilter}:`);
filteredStudents.forEach((student) => console.log(student));
