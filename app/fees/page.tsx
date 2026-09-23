import { feeRecords } from "@/lib/data";

export default function FeesPage() {
  return (
    <>
      <section className="overview-header">
        <div>
          <p className="eyebrow">Finance</p>
          <h1>Fee management</h1>
        </div>
        <button className="primary-btn">Generate invoice</button>
      </section>

      <div className="panel">
        <div className="panel-header">
          <h2>Collections</h2>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Amount</th>
              <th>Due date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {feeRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.student}</td>
                <td>${record.amount.toLocaleString()}</td>
                <td>{record.dueDate}</td>
                <td>
                  <span
                    className={
                      record.status === "Paid"
                        ? "badge success"
                        : record.status === "Pending"
                        ? "badge warning"
                        : "badge danger"
                    }
                  >
                    {record.status}
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
