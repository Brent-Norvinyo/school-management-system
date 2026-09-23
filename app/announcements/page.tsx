import { announcements } from "@/lib/data";

export default function AnnouncementsPage() {
  return (
    <>
      <section className="overview-header">
        <div>
          <p className="eyebrow">Communication</p>
          <h1>Announcements</h1>
        </div>
        <button className="primary-btn">New announcement</button>
      </section>

      <div className="panel">
        <div className="panel-header">
          <h2>Latest updates</h2>
        </div>

        <div className="announcement-list">
          {announcements.map((item) => (
            <article key={item.id} className="announcement-card">
              <div className="card-topline">
                <span className="mini-tag">{item.audience}</span>
                <span className="muted">{item.date}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.message}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
