import { teachers } from "@/lib/data";

export default function TeachersPage() {
  return (
    <>
      <section className="overview-header">
        <div>
          <p className="eyebrow">People</p>
          <h1>Teacher directory</h1>
        </div>
        <button className="primary-btn">Invite teacher</button>
      </section>

      <div className="panel">
        <div className="panel-header">
          <h2>Faculty</h2>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Department</th>
              <th>Classes</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.name}</td>
                <td>{teacher.subject}</td>
                <td>{teacher.department}</td>
                <td>{teacher.classesAssigned}</td>
                <td>{teacher.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
