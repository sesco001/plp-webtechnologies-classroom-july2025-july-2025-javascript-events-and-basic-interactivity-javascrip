// ===============================
// Feature 1: Custom Form Validation
// ===============================
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page refresh

  let valid = true;

  // Get values
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Reset error messages
  document.getElementById("usernameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  // Validate username
  if (username.length < 3) {
    document.getElementById("usernameError").textContent =
      "Username must be at least 3 characters.";
    valid = false;
  }

  // Validate email (simple regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  // Validate password
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  }

  // If valid show success message
  if (valid) {
    document.getElementById("formSuccess").textContent =
      "Registration successful 🎉";
  }
});

// ===============================
// Feature 2: Click Counter
// ===============================
let count = 0;
document.getElementById("counterBtn").addEventListener("click", function () {
  count++;
  document.getElementById("clickCount").textContent = count;
});

// ===============================
// Feature 3: Dark Mode Toggle
// ===============================
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
