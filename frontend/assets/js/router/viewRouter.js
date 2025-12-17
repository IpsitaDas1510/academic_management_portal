import { initStudentController } from "../controllers/studentController.js";
import { initTeacherController } from "../controllers/teacherController.js";
import { initMarksController } from "../controllers/marksController.js";

// Load HTML into #app
async function loadView(path) {
  const res = await fetch(path);
  const html = await res.text();
  document.querySelector("#app").innerHTML = html;
}

// Router
export async function router() {
  const path = window.location.pathname;

  // HOME
  if (path === "/" || path === "/home") {
    await loadView("/frontend/pages/index.html");
  }

  // STUDENTS LIST
  else if (path === "/students") {
    await loadView("/frontend/pages/students.html");
    initStudentController();
  }

  // STUDENT DETAIL
  else if (path.startsWith("/student")) {
    await loadView("/frontend/pages/student-detail.html");
    initStudentController();
  }

  // MARKS
  else if (path === "/marks") {
    await loadView("/frontend/pages/marks.html");
    initMarksController();
  }

  // TEACHERS
  else if (path === "/teachers") {
    await loadView("/frontend/pages/teachers.html");
    initTeacherController();
  }

  // 404
  else {
    await loadView("/frontend/pages/404.html");
  }
}

// Enable SPA navigation
export function initRouterEvents() {
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link]");
    if (!link) return;

    e.preventDefault();
    history.pushState(null, "", link.getAttribute("href"));
    router();
  });

  window.addEventListener("popstate", router);
}
