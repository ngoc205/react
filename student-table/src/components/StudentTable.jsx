// StudentTable.jsx
import React from "react";

function StudentTable() {
  const students = [
    { id: "SV001", name: "Ngọc Bùi", age: 19, major: "CNTT" },
    { id: "SV002", name: "Minh Hoàng", age: 20, major: "Kinh tế" },
    { id: "SV003", name: "Lan Anh", age: 19, major: "Thiết kế" },
    { id: "SV004", name: "Hải Nam", age: 21, major: "CNTT" },
    { id: "SV005", name: "Thùy Dương", age: 20, major: "Tài chính" },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
        BẢNG THÔNG TIN SINH VIÊN
      </h2>
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "80%", margin: "0 auto", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "#f2f2f2" }}>
          <tr>
            <th>Mã SV</th>
            <th>Họ và Tên</th>
            <th>Tuổi</th>
            <th>Ngành học</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.major}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
