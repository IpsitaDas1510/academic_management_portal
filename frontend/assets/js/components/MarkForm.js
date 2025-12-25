// import { $ } from "../utils/dom.js";

// // Reset form to default (Add mode)
// export function resetForm() {
//   $("markForm").reset();

//   // Change submit button text
//   $("submitBtn").textContent = "Add Mark";

//   // Hide cancel button
//   $("cancelBtn").style.display = "none";
// }

// // Fill form for edit mode
// export function fillForm(mark) {
//   $("student_id").value = mark.student_id;
//   $("subject").value = mark.subject;
//   $("year").value = mark.year;
//   $("marks").value = mark.marks;

//   // Change submit button text
//   $("submitBtn").textContent = "Update Mark";

//   // Show cancel button
//   $("cancelBtn").style.display = "inline-block";
// }




// import { $ } from "../utils/dom.js";

// export function resetForm() {
//   $("markForm").reset();
//   $("submitBtn").textContent = "Add Marks";
//   $("cancelBtn").style.display = "none";
// }

// export function fillForm(mark) {
//   $("student_id").value = mark.student_id;
//   $("subject").value = mark.subject;
//   $("year").value = mark.year;
//   $("marks").value = mark.marks;

//   $("submitBtn").textContent = "Update Marks";
//   $("cancelBtn").style.display = "inline-block";
// }



import { $ } from "../utils/dom.js";

export function resetForm() {
  $("markForm").reset();
  $("submitBtn").textContent = "Add Marks";
  $("cancelBtn").classList.add("hidden");
}

export function fillForm(mark) {
  $("student_id").value = mark.student_id;
  $("year").value = mark.year;
  $("subject").value = mark.subject;
  $("marks").value = mark.marks;

  $("submitBtn").textContent = "Update Marks";
  $("cancelBtn").classList.remove("hidden");
}
