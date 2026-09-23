import Link from "next/link";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Students", href: "/students" },
  { label: "Teachers", href: "/teachers" },
  { label: "Classes", href: "/classes" },
  { label: "Attendance", href: "/attendance" },
  { label: "Grades", href: "/grades" },
  { label: "Fees", href: "/fees" },
  { label: "Announcements", href: "/announcements" },
  { label: "Admin", href: "/admin" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">AcademiaPro</div>

        <nav className="nav-section" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                typeof window === "undefined"
                  ? "nav-link"
                  : "nav-link active"
              }
            >
              <span>{item.label}</span>
              <span>→</span>
            </Link>
          ))}
        </nav>
      </aside>

      <main className="content-panel">
        <header className="topbar">
          <input className="search-box" type="text" placeholder="Search students, teachers, classes..." />
          <div className="user-pill">👤 Admin User</div>
        </header>

        {children}
      </main>
    </div>
  );
}
