import { $ } from "../utils/dom.js";

// Reset marks form (Add mode)
export function resetMarkForm() {
  $("markForm").reset();
  $("submitMarkBtn").textContent = "Add Mark";
  $("cancelMarkBtn").style.display = "none";
}

// Fill form for Edit mode
export function fillMarkForm(mark) {
  $("student_id").value = mark.student_id;
  $("year").value = mark.year;
  $("subject").value = mark.subject;
  $("marks").value = mark.marks;

  $("submitMarkBtn").textContent = "Update Mark";
  $("cancelMarkBtn").style.display = "inline-block";
}
