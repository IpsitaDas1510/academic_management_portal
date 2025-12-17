const API_URL = window.ENV.API_BASE_URL + "/teachers";

async function safeJson(res) {
  try { return await res.json(); } catch { return null; }
}

export async function getAllTeachers() {
  const res = await fetch(API_URL);
  return res.ok ? safeJson(res) : [];
}

export async function getTeacher(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.ok ? safeJson(res) : null;
}

export function createTeacher(data) {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

export function updateTeacher(id, data) {
  return fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

export function deleteTeacher(id) {
  return fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
