# Faculty Proxy Assignment System

A full-stack web application to automate faculty proxy assignment and management in educational institutions. Built with **HTML, CSS, JavaScript (Frontend)** and **Node.js, Express.js, MongoDB (Backend)**.

---

## Features

- **Faculty Proxy Assignment:**
  - Faculty can mark themselves absent and request a proxy.
  - Next available faculty with <5 proxy loads is auto-assigned.
  - Auto-rejection email if proxy has ≥5 lectures.

- **HOD Controls:**
  - HOD can override proxy assignments for any faculty (except self).
  - View today's and historical proxy assignments.

- **Role-Based Access:**
  - Faculty and HOD roles with secure *JWT authentication*.
  - Permissions differ by role.

- **Notifications:**
  - In-app alerts for proxy updates.
  - HTML Email notifications for assignments, rejections, and updates.

- **Design & Theme:**
  - Orange and White color scheme.
  - Dark mode support.
---

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Email Service:** Nodemailer (HTML email support)

---

## Installation
  To run the faculty-proxy-app, perform the following steps in Command Prompt (Windows) or Terminal (Linux OR MacOS)
```bash
git clone https://github.com/Harshit10880/website.git
cd .\website
npm install express mongoose nodemon```
