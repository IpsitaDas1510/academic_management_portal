const API_URL = window.ENV.API_BASE_URL + "/students";

async function safeJson(res) {
  try { return await res.json(); } catch { return null; }
}

export async function getAllStudents() {
  const res = await fetch(API_URL);
  return res.ok ? safeJson(res) : [];
}

export async function getStudent(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.ok ? safeJson(res) : null;
}

export function createStudent(data) {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

export function updateStudent(id, data) {
  return fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

export function deleteStudent(id) {
  return fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
