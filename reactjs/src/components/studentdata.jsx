import React, { useEffect, useState } from 'react';

const Studentdata = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
     const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/students/get_student');
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };
    fetchStudents();
  }, []);

 
  console.log(students)

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Registered Students</h2>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Gender</th>
              <th className="border px-4 py-2">Course</th>
              <th className="border px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">{student.email}</td>
                <td className="border px-4 py-2">{student.phone}</td>
                <td className="border px-4 py-2">{student.gender}</td>
                <td className="border px-4 py-2">{student.course}</td>
                <td className="border px-4 py-2">{student.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Studentdata;
