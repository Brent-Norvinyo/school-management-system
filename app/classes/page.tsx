import { classRooms } from "@/lib/data";

export default function ClassesPage() {
  return (
    <>
      <section className="overview-header">
        <div>
          <p className="eyebrow">Academic planning</p>
          <h1>Classes & sections</h1>
        </div>
        <button className="primary-btn">Create class</button>
      </section>

      <div className="panel">
        <div className="panel-header">
          <h2>Class schedule</h2>
        </div>

        <div className="grid-list">
          {classRooms.map((item) => (
            <article key={item.id} className="info-card">
              <div className="card-topline">
                <span className="mini-tag">{item.grade}</span>
                <span className="badge neutral">{item.section}</span>
              </div>
              <h3>{item.name}</h3>
              <p>Teacher: {item.teacher}</p>
              <p>Room: {item.room}</p>
              <p>Students: {item.studentCount}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
