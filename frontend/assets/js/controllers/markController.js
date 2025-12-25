// import {
//   getAllMarks,
//   createMark,
//   updateMark,
//   deleteMark,
//   getMark
// } from "../services/markService.js";

// import { renderMarkTable } from "../components/MarkTable.js";
// import { resetForm, fillForm } from "../components/MarkForm.js";
// import { setState, getState } from "../state/store.js";
// import { $ } from "../utils/dom.js";

// export function initMarkController() {
//   loadMarks();

//   $("markForm").addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const data = {
//       student_id: $("student_id").value.trim(),
//       subject: $("subject").value.trim(),
//       year: $("year").value.trim(),
//       marks: $("marks").value.trim()
//     };

//     const { editingId } = getState();

//     editingId
//       ? await updateMark(editingId, data)
//       : await createMark(data);

//     setState({ editingId: null });
//     resetForm();
//     loadMarks();
//   });

//   $("cancelBtn").addEventListener("click", () => {
//     setState({ editingId: null });
//     resetForm();
//   });
// }

// async function loadMarks() {
//   const marks = await getAllMarks();
//   setState({ marks });
//   renderMarkTable(marks);
// }

// export async function editMark(id) {
//   const mark = await getMark(id);
//   setState({ editingId: id });
//   fillForm(mark);
// }

// export async function deleteMarkAction(id) {
//   if (!confirm("Delete mark?")) return;
//   await deleteMark(id);
//   loadMarks();
// }



// import {
//   getAllMarks,
//   getMark,
//   createMark,
//   updateMark,
//   deleteMark
// } from "../services/markService.js";

// import { renderMarkTable } from "../components/MarkTable.js";
// import { resetForm, fillForm } from "../components/MarkForm.js";
// import { setState, getState } from "../state/store.js";
// import { $ } from "../utils/dom.js";

// export function initMarkController() {
//   loadMarks();

//   $("markForm").addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const data = {
//       student_id: $("student_id").value.trim(),
//       subject: $("subject").value.trim(),
//       year: $("year").value.trim(),
//       marks: $("marks").value.trim()
//     };

//     const { editingId } = getState();

//     if (editingId) {
//       await updateMark(editingId, data);
//     } else {
//       await createMark(data);
//     }

//     setState({ editingId: null });
//     resetForm();
//     loadMarks();
//   });

//   $("cancelBtn").addEventListener("click", () => {
//     setState({ editingId: null });
//     resetForm();
//   });
// }

// async function loadMarks() {
//   const marks = await getAllMarks();
//   setState({ marks });
//   renderMarkTable(marks);
// }

// export async function editMark(id) {
//   const mark = await getMark(id);
//   setState({ editingId: id });
//   fillForm(mark);
// }

// export async function deleteMarkAction(id) {
//   if (!confirm("Delete mark?")) return;
//   await deleteMark(id);
//   loadMarks();
// }



import {
  getAllMarks,
  createMark,
  updateMark,
  deleteMark
} from "../services/markService.js";

import { renderMarkTable } from "../components/MarkTable.js";
import { resetForm, fillForm } from "../components/MarkForm.js";
import { setState, getState } from "../state/store.js";
import { $ } from "../utils/dom.js";

export function initMarkController() {
  loadMarks();

  // $("markForm").addEventListener("submit", async (e) => {
  //   e.preventDefault();

  //   const data = {
  //     student_id: $("student_id").value.trim(),
  //     year: $("year").value,
  //     subject: $("subject").value.trim(),
  //     marks: $("marks").value.trim()
  //   };

  //   const { editingId } = getState();

  //   editingId
  //     ? await updateMark(editingId, data)
  //     : await createMark(data);

  //   setState({ editingId: null });
  //   resetForm();
  //   loadMarks();
  // });
  $("markForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const rawYear = $("year").value.trim();

  const yearMap = {
    "1st year": 1,
    "2nd year": 2,
    "3rd year": 3
  };

  const data = {
    student_id: Number($("student_id").value),
    year: yearMap[rawYear] ?? Number(rawYear),
    subject: $("subject").value.trim(),
    marks: Number($("marks").value),
  };

  const { editingId } = getState();

  editingId
    ? await updateMark(editingId, data)
    : await createMark(data);

  setState({ editingId: null });
  resetForm();
  loadMarks();
});


  $("cancelBtn").onclick = () => {
    setState({ editingId: null });
    resetForm();
  };
}

async function loadMarks() {
  const marks = await getAllMarks();
  setState({ marks });
  renderMarkTable(marks);
}

export function editMark(mark) {
  setState({ editingId: mark.id });
  fillForm(mark);
}

export async function deleteMarkAction(id) {
  if (!confirm("Delete mark?")) return;
  await deleteMark(id);
  loadMarks();
}


