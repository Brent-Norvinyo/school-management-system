import Link from "next/link";
import { announcements, feeSummary, kpis, students, teachers } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="overview-header">
        <div>
          <p className="eyebrow">School operations</p>
          <h1>AcademiaPro dashboard</h1>
        </div>
        <Link href="/admin" className="primary-btn">
          Open administration
        </Link>
      </section>

      <section className="stats-grid">
        {kpis.map((item) => (
          <article key={item.label} className="stat-card">
            <span className="stat-label">{item.label}</span>
            <strong>{item.value}</strong>
            <small>{item.change}</small>
          </article>
        ))}
      </section>

      <section className="content-grid two-columns">
        <div className="panel">
          <div className="panel-header">
            <h2>Recent student activity</h2>
            <Link href="/students">View all</Link>
          </div>
          <div className="list-stack">
            {students.slice(0, 5).map((student) => (
              <div key={student.id} className="list-item-row">
                <div>
                  <strong>{student.name}</strong>
                  <small>
                    {student.grade} · {student.section}
                  </small>
                </div>
                <span className={student.status === "Active" ? "badge success" : "badge warning"}>
                  {student.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h2>Faculty overview</h2>
            <Link href="/teachers">Manage</Link>
          </div>
          <div className="list-stack">
            {teachers.slice(0, 5).map((teacher) => (
              <div key={teacher.id} className="list-item-row">
                <div>
                  <strong>{teacher.name}</strong>
                  <small>
                    {teacher.subject} · {teacher.department}
                  </small>
                </div>
                <span className="mini-tag">{teacher.classesAssigned} classes</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-grid two-columns">
        <div className="panel">
          <div className="panel-header">
            <h2>Fee collection</h2>
            <Link href="/fees">Details</Link>
          </div>
          <div className="amount-stack">
            {feeSummary.map((item) => (
              <div key={item.label} className="amount-row">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h2>Announcements</h2>
            <Link href="/announcements">All posts</Link>
          </div>
          <div className="list-stack compact">
            {announcements.slice(0, 4).map((item) => (
              <div key={item.id} className="announcement-item">
                <strong>{item.title}</strong>
                <p>{item.message}</p>
                <small>{item.audience}</small>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
