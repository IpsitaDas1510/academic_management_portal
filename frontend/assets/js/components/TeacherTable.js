import { $ } from "../utils/dom.js";
import { editTeacher, deleteTeacherAction } from "../controllers/teacherController.js";

// Render teachers into table
export function renderTeacherTable(teachers) {
  const body = $("teachersTableBody");
  const noTeachers = $("noTeachers");

  body.innerHTML = "";

  if (!teachers || teachers.length === 0) {
    noTeachers.style.display = "block";
    return;
  }

  noTeachers.style.display = "none";

  teachers.forEach(teacher => {
    const row = document.createElement("tr");
    row.className = "border-b";

    row.innerHTML = `
      <td class="px-3 py-2">${teacher.id}</td>
      <td class="px-3 py-2">${teacher.name}</td>
      <td class="px-3 py-2">${teacher.email}</td>
      <td class="px-3 py-2">${teacher.subject}</td>
      <td class="px-3 py-2 flex gap-2">
        <button
          class="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded"
          data-edit>
          Edit
        </button>

        <button
          class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          data-delete>
          Delete
        </button>
      </td>
    `;

    row.querySelector("[data-edit]").onclick = () =>
      editTeacher(teacher.id);

    row.querySelector("[data-delete]").onclick = () =>
      deleteTeacherAction(teacher.id);

    body.appendChild(row);
  });
}
