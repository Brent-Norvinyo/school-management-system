# School Management System

A modern school management system built with Next.js, Prisma, and SQLite.

## Features

- Student directory and enrollment dashboard
- Teacher management and department views
- Class and timetable planning
- Attendance tracking
- Grade and assessment management
- Fee collection monitoring
- Announcements portal
- Admin dashboard overview

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Prisma ORM
- SQLite

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure environment:

   ```bash
   cp .env.example .env
   ```

3. Generate Prisma client:

   ```bash
   npx prisma generate
   ```

4. Create the SQLite database:

   ```bash
   npx prisma db push
   ```

5. Start the app:

   ```bash
   npm run dev
   ```

6. Open the app in your browser:

   ```bash
   http://localhost:3000
   ```

## Project structure

- `app/` — Next.js pages and views
- `components/` — shared UI components
- `lib/` — mock data and app logic
- `prisma/` — Prisma schema and database config

## Notes

This is an MVP scaffold designed for quick iteration. You can extend it with real authentication, API routes, role-based access control, file uploads, and reporting.
