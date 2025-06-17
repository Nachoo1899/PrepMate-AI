
// Simulación de validación de token
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get("token");

// Lista temporal de tokens válidos (esto en producción se validaría desde Make o backend)
const validTokens = ["abc123", "def456", "ghi789"];

if (token && validTokens.includes(token)) {
  document.getElementById("chat-container").classList.remove("hidden");
} else {
  document.body.innerHTML = "<h2>Acceso denegado</h2><p>Token inválido o no proporcionado.</p>";
}
