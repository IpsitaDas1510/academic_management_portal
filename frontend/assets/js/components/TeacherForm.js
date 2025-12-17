import { $ } from "../utils/dom.js";

// Reset teacher form (Add mode)
export function resetTeacherForm() {
  $("teacherForm").reset();
  $("submitTeacherBtn").textContent = "Add Teacher";
  $("cancelTeacherBtn").style.display = "none";
}

// Fill form for Edit mode
export function fillTeacherForm(teacher) {
  $("name").value = teacher.name;
  $("email").value = teacher.email;
  $("subject").value = teacher.subject;

  $("submitTeacherBtn").textContent = "Update Teacher";
  $("cancelTeacherBtn").style.display = "inline-block";
}
