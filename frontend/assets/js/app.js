// Main entrypoint for frontend
import { router, initRouterEvents } from "./router/viewRouter.js";

// Initialize app on page load
window.addEventListener("DOMContentLoaded", () => {
  initRouterEvents(); // enable SPA navigation
  router();           // load correct page
});
