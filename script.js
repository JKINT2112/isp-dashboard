async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  error.innerText = "";

  // 🔁 Replace this with your real backend
  if (username === "admin" && password === "1234") {
    localStorage.setItem("user", username);

    window.location.href = "dashboard.html";
  } else {
    error.innerText = "Invalid username or password";
  }
}