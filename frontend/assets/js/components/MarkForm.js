import { $ } from "../utils/dom.js";

// Reset marks form (Add mode)
export function resetMarkForm() {
  $("markForm").reset();
  $("submitBtn").textContent = "Add Mark";
  $("cancelBtn").style.display = "none";
}

// Fill form for Edit mode
export function fillMarkForm(mark) {
  $("student_id").value = mark.student_id;
  $("year").value = mark.year;
  $("subject").value = mark.subject;
  $("marks").value = mark.marks;

  $("submitBtn").textContent = "Update Mark";
  $("cancelBtn").style.display = "inline-block";
}
