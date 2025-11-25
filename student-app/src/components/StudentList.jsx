import "./StudentList.css";

const StudentList = () => {
  const students = [
    { id: 1, name: "Nguyễn Văn A", age: 20, major: "CNTT" },
    { id: 2, name: "Trần Thị B", age: 21, major: "Marketing" },
    { id: 3, name: "Lê Văn C", age: 19, major: "Kinh tế" }
  ];

  return (
    <div className="student-container">
      <h2 className="title"> Danh sách sinh viên</h2>

      <div className="student-grid">
        {students.map((sv) => (
          <div className="student-card" key={sv.id}>
            <h3>{sv.name}</h3>
            <p><strong>Tuổi:</strong> {sv.age}</p>
            <p><strong>Ngành:</strong> {sv.major}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
