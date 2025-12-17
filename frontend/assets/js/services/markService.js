const API_URL = window.ENV.API_BASE_URL + "/marks";

async function safeJson(res) {
  try { return await res.json(); } catch { return null; }
}

export function addMark(data) {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

export async function getMarksByStudent(studentId) {
  const res = await fetch(`${API_URL}/student/${studentId}`);
  return res.ok ? safeJson(res) : [];
}

export function updateMark(id, data) {
  return fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

export function deleteMark(id) {
  return fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
