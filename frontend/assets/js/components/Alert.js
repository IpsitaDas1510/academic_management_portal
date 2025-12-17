import { $ } from "../utils/dom.js";

// Show temporary alert message
export function showAlert(message, type = "success") {
  const container = $("alertContainer");
  if (!container) return; // safety check

  const el = document.createElement("div");

  el.className = `
    px-4 py-2 rounded shadow text-white mb-2
    ${type === "success" ? "bg-green-500" : "bg-red-500"}
  `;

  el.textContent = message;

  container.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 3000);
}
