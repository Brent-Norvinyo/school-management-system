export const students = [
  { id: 1, name: "Aisha Patel", grade: "Grade 10", section: "A", guardian: "Raj Patel", attendance: 96, status: "Active" },
  { id: 2, name: "Liam Johnson", grade: "Grade 9", section: "B", guardian: "Emma Johnson", attendance: 92, status: "Active" },
  { id: 3, name: "Sophia Nguyen", grade: "Grade 11", section: "A", guardian: "Hoang Nguyen", attendance: 89, status: "At risk" },
  { id: 4, name: "Noah Williams", grade: "Grade 8", section: "C", guardian: "Claire Williams", attendance: 94, status: "Active" },
  { id: 5, name: "Mila Chen", grade: "Grade 12", section: "B", guardian: "Wei Chen", attendance: 97, status: "Active" },
  { id: 6, name: "Lucas Brown", grade: "Grade 10", section: "D", guardian: "Sarah Brown", attendance: 88, status: "At risk" },
];

export const teachers = [
  { id: 1, name: "Ms. Olivia Clark", subject: "Mathematics", department: "Science", classesAssigned: 3, email: "olivia.clark@academiapro.edu" },
  { id: 2, name: "Mr. Daniel Smith", subject: "Biology", department: "Science", classesAssigned: 2, email: "daniel.smith@academiapro.edu" },
  { id: 3, name: "Ms. Grace Lee", subject: "English", department: "Humanities", classesAssigned: 4, email: "grace.lee@academiapro.edu" },
  { id: 4, name: "Mr. Henry Gomez", subject: "History", department: "Humanities", classesAssigned: 2, email: "henry.gomez@academiapro.edu" },
  { id: 5, name: "Ms. Sana Khan", subject: "Physics", department: "Science", classesAssigned: 3, email: "sana.khan@academiapro.edu" },
];

export const classRooms = [
  { id: 1, name: "Grade 10 - Mathematics", grade: "Grade 10", section: "A", teacher: "Ms. Olivia Clark", room: "Room 202", studentCount: 28 },
  { id: 2, name: "Grade 9 - Biology", grade: "Grade 9", section: "B", teacher: "Mr. Daniel Smith", room: "Room 104", studentCount: 24 },
  { id: 3, name: "Grade 11 - Literature", grade: "Grade 11", section: "A", teacher: "Ms. Grace Lee", room: "Room 308", studentCount: 26 },
  { id: 4, name: "Grade 12 - Physics", grade: "Grade 12", section: "B", teacher: "Ms. Sana Khan", room: "Room 121", studentCount: 19 },
];

export const attendanceRecords = [
  { id: 1, student: "Aisha Patel", className: "Grade 10-A", date: "2026-09-23", status: "Present", remarks: "On time" },
  { id: 2, student: "Liam Johnson", className: "Grade 9-B", date: "2026-09-23", status: "Present", remarks: "Excused lateness" },
  { id: 3, student: "Sophia Nguyen", className: "Grade 11-A", date: "2026-09-23", status: "Absent", remarks: "Medical leave" },
  { id: 4, student: "Noah Williams", className: "Grade 8-C", date: "2026-09-23", status: "Present", remarks: "Participated" },
];

export const gradeRecords = [
  { id: 1, student: "Aisha Patel", subject: "Mathematics", exam: "Midterm", score: 94, grade: "A" },
  { id: 2, student: "Liam Johnson", subject: "Biology", exam: "Quiz 2", score: 88, grade: "B+" },
  { id: 3, student: "Sophia Nguyen", subject: "English", exam: "Essay", score: 76, grade: "B" },
  { id: 4, student: "Mila Chen", subject: "Physics", exam: "Final", score: 97, grade: "A+" },
];

export const feeRecords = [
  { id: 1, student: "Aisha Patel", amount: 850, dueDate: "2026-10-05", status: "Paid" },
  { id: 2, student: "Liam Johnson", amount: 640, dueDate: "2026-10-12", status: "Pending" },
  { id: 3, student: "Sophia Nguyen", amount: 720, dueDate: "2026-09-28", status: "Overdue" },
  { id: 4, student: "Mila Chen", amount: 910, dueDate: "2026-10-16", status: "Paid" },
];

export const announcements = [
  { id: 1, title: "Parent orientation scheduled", message: "The school will host a parent orientation on Friday at 4:00 PM in the auditorium.", audience: "Parents", date: "2026-09-23" },
  { id: 2, title: "Science fair registration open", message: "Students in grades 9-12 may register for the annual science fair until October 3rd.", audience: "Students", date: "2026-09-21" },
  { id: 3, title: "Transport update", message: "Bus routes have been updated for the new academic term. Please check the portal.", audience: "All", date: "2026-09-19" },
  { id: 4, title: "Exam timetable released", message: "The term-end exam schedule is now available on the portal and dashboard.", audience: "Students", date: "2026-09-18" },
];

export const kpis = [
  { label: "Total students", value: "1,286", change: "+120 this term" },
  { label: "Teachers", value: "92", change: "+4 this year" },
  { label: "Attendance rate", value: "94.6%", change: "+1.8%" },
  { label: "Fee collection", value: "89.2%", change: "+6.4%" },
];

export const feeSummary = [
  { label: "Collected", value: "$184,200" },
  { label: "Outstanding", value: "$23,400" },
  { label: "Waivers", value: "$8,900" },
];
