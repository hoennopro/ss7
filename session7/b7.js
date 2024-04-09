var Student = /** @class */ (function () {
    function Student(id, name, className) {
        this.id = id;
        this.name = name;
        this.className = className;
    }
    return Student;
}());
function filterStudentsByClass(students, className) {
    return students.filter(function (student) { return student.className === className; });
}
var students = [
    new Student(1, "hoang", "A"),
    new Student(2, "hoen", "B"),
    new Student(3, "bunn", "A"),
    new Student(4, "huhu", "C"),
    new Student(5, "kkkk", "A"),
];
var classNameToFilter = "A";
var filteredStudents = filterStudentsByClass(students, classNameToFilter);
console.log("Sinh vi\u00EAn trong l\u1EDBp ".concat(classNameToFilter, ":"));
filteredStudents.forEach(function (student) { return console.log(student); });
