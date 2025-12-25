// const API_URL = window.API_BASE_URL + "/marks";

// async function safeJson(res) {
//   try {
//     return await res.json();
//   } catch {
//     return null;
//   }
// }

// export async function getAllMarks() {
//   const res = await fetch(API_URL);
//   return res.ok ? safeJson(res) : [];
// }

// export function createMark(data) {
//   return fetch(API_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data)
//   });
// }

// export function updateMark(id, data) {
//   return fetch(`${API_URL}/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data)
//   });
// }

// export function deleteMark(id) {
//   return fetch(`${API_URL}/${id}`, { method: "DELETE" });
// }


// services/markService.js

const API_URL = "/api/marks";

async function safeJson(res) {
  try {
    return await res.json();
  } catch {
    return null;
  }
}

export async function getAllMarks() {
  const res = await fetch(API_URL);
  return res.ok ? safeJson(res) : [];
}

export function createMark(data) {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export function updateMark(id, data) {
  return fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

export function deleteMark(id) {
  return fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
