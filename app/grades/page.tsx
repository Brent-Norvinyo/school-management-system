import { gradeRecords } from "@/lib/data";

export default function GradesPage() {
  return (
    <>
      <section className="overview-header">
        <div>
          <p className="eyebrow">Assessment</p>
          <h1>Academic performance</h1>
        </div>
        <button className="primary-btn">Publish results</button>
      </section>

      <div className="panel">
        <div className="panel-header">
          <h2>Exams & assessments</h2>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Subject</th>
              <th>Exam</th>
              <th>Score</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {gradeRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.student}</td>
                <td>{record.subject}</td>
                <td>{record.exam}</td>
                <td>{record.score}</td>
                <td>
                  <span className="badge neutral">{record.grade}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
