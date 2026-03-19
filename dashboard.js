// 🔐 Protect page (must login first)
const user = localStorage.getItem("user");

if (!user) {
  window.location.href = "index.html";
}

// 👤 Show username
document.getElementById("user").innerText = user;

// 🚪 Logout
function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}
// 🔄 Switch sections
function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");

  sections.forEach(sec => sec.style.display = "none");

  document.getElementById(sectionId).style.display = "block";
}

// 📋 Copy script
function copyScript(id) {
  const text = document.getElementById(id).innerText;

  navigator.clipboard.writeText(text).then(() => {
    alert("Copied!");
  });
}
