import Link from "next/link";
import { students } from "@/lib/data";

export default function StudentsPage() {
  return (
    <>
      <section className="overview-header">
        <div>
          <p className="eyebrow">Directory</p>
          <h1>Student management</h1>
        </div>
        <button className="primary-btn">Add student</button>
      </section>

      <div className="panel">
        <div className="panel-header">
          <h2>Students</h2>
          <Link href="/">Return home</Link>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Grade</th>
              <th>Section</th>
              <th>Guardian</th>
              <th>Attendance</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.grade}</td>
                <td>{student.section}</td>
                <td>{student.guardian}</td>
                <td>{student.attendance}%</td>
                <td>
                  <span className={student.status === "Active" ? "badge success" : "badge warning"}>
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
