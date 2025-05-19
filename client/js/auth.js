// Signup
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("signmail").value;
    const password = document.getElementById("signpass").value;

    const res = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert(data.message || data.error);
    if (res.ok) window.location.href = "login.html";
  });
}

// Login
const loginForm = document.getElementById("loginmail");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginmail").value;
    const password = document.getElementById("logpass").value;

    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    alert(data.message || data.error);
    if (res.ok) {
      localStorage.setItem("token", data.token);
      window.location.href = "chats.html"; // your chats page
    }
  });
}
