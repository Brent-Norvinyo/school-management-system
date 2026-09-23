import { attendanceRecords } from "@/lib/data";

export default function AttendancePage() {
  return (
    <>
      <section className="overview-header">
        <div>
          <p className="eyebrow">Monitoring</p>
          <h1>Attendance tracking</h1>
        </div>
        <button className="primary-btn">Mark attendance</button>
      </section>

      <div className="panel">
        <div className="panel-header">
          <h2>Today</h2>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Class</th>
              <th>Date</th>
              <th>Status</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.student}</td>
                <td>{record.className}</td>
                <td>{record.date}</td>
                <td>
                  <span className={record.status === "Present" ? "badge success" : "badge warning"}>
                    {record.status}
                  </span>
                </td>
                <td>{record.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
