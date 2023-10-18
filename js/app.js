console.log("SERVICE WORKER");
let swLocation = "/app/sw.js";

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/sw.js");
  if (
    window.location.href.includes("localhost") ||
    window.location.href.includes("127.0.0.1")
  ) {
    swLocation = "/sw.js";
  }
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(swLocation);
  });
}