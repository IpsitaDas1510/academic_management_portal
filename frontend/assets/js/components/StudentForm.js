import { $ } from "../utils/dom.js";

// Reset student form (Add mode)
export function resetForm() {
  $("studentForm").reset();
  $("submitBtn").textContent = "Add Student";
  $("cancelBtn").style.display = "none";
}

// Fill form for Edit mode
export function fillForm(student) {
  $("name").value = student.name;
  $("email").value = student.email;
  $("course").value = student.course;
  $("year").value = student.year;

  $("submitBtn").textContent = "Update Student";
  $("cancelBtn").style.display = "inline-block";
}
