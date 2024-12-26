import React from "react";
import { useStudentStore, useTemStudentStore } from "../store";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function StudentLists() {
  const students = useStudentStore((state) => state.getStudents());
  const { deleteStudent } = useStudentStore((state) => state);
  const { setTemStudent, temStudent } = useTemStudentStore((state) => state);
return (
    <div className="mt-4">
        <h2 className="text-uppercase font-monospace text-center">Student List</h2>
        <table className="table table-hover table-striped table-bordered table-responsive-sm">
            <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id.slice(-4)}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.phone}</td>
                        <td>{student.address}</td>
                        <td>
                            <FaEdit
                                className="fs-3 me-2 text-success"
                                style={{ cursor: "pointer" }}
                                onClick={() => setTemStudent(student)}
                            />
                            <FaTrash
                                className="fs-3 text-danger"
                                style={{ cursor: "pointer" }}
                                onClick={() => deleteStudent(student.id)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
}
