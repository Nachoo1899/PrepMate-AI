
// Validación de token para activar el chat (sin bloquear la página entera)
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get("token");
const validTokens = ["abc123", "def456", "ghi789"];

if (token && validTokens.includes(token)) {
  document.getElementById("chat-container").classList.remove("hidden");
}
