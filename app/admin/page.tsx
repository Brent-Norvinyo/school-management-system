export default function AdminPage() {
  return (
    <>
      <section className="overview-header">
        <div>
          <p className="eyebrow">Operations</p>
          <h1>Administration center</h1>
        </div>
        <button className="primary-btn">Create report</button>
      </section>

      <section className="content-grid three-columns">
        <article className="panel admin-metric">
          <h3>Enrollment</h3>
          <strong>1,286</strong>
          <span>+8.4% this term</span>
        </article>

        <article className="panel admin-metric">
          <h3>Teacher attendance</h3>
          <strong>96.7%</strong>
          <span>Above target</span>
        </article>

        <article className="panel admin-metric">
          <h3>Fee collection</h3>
          <strong>89.2%</strong>
          <span>Target: 92%</span>
        </article>
      </section>

      <div className="panel">
        <div className="panel-header">
          <h2>Admin actions</h2>
        </div>
        <div className="action-list">
          <button className="secondary-btn">Review applicants</button>
          <button className="secondary-btn">Approve fee waivers</button>
          <button className="secondary-btn">Publish timetable</button>
          <button className="secondary-btn">Audit payroll</button>
        </div>
      </div>
    </>
  );
}
