import { Auth, Utils } from "./api.js";

/**
 * LOGIC FOR SIGN IN PAGE
 */
const loginForm = document.getElementById("login-form");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // 1. Get values from inputs
    // MAKE SURE your HTML inputs have these IDs: id="email" and id="password"
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorText = document.getElementById("form-error"); // Create a <p> with this ID for errors
    const submitBtn = loginForm.querySelector('button[type="submit"]');

    if (!emailInput || !passwordInput) return;

    // 2. UI Loading State
    const originalBtnText = submitBtn.innerText;
    submitBtn.innerText = "Signing in...";
    submitBtn.disabled = true;
    if (errorText) errorText.classList.add("hidden");

    try {
      // 3. Call API
      const result = await Auth.login(emailInput.value, passwordInput.value);

      if (result.success) {
        // 4. Success: Redirect based on role
        alert(`Welcome back, ${result.profile.full_name || "User"}!`);

        if (result.role === "admin") {
          // window.location.href = '/pages/admin/dashboard.html'; // Uncomment when Admin page exists
          window.location.href = "../../index.html";
        } else {
          window.location.href = "../../index.html"; // Go to Homepage
        }
      } else {
        // 5. Error handling
        if (errorText) {
          errorText.textContent = result.error; // Show error message
          errorText.classList.remove("hidden");
        } else {
          alert("Login Failed: " + result.error);
        }
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please check your connection.");
    } finally {
      // Reset Button
      submitBtn.innerText = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}

/**
 * LOGIC FOR SIGN UP PAGE
 */
const signupForm = document.getElementById("signup-form");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // 1. Get values
    // IDs: username, full-name, email, password, confirm-password
    const username = document.getElementById("username").value;
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirm-password").value;

    // 2. Basic Validation
    if (password !== confirmPass) {
      alert("Passwords do not match!");
      return;
    }

    // 3. Prepare Data for API (Matches Swagger Schema)
    const userData = {
      username: username,
      full_name: fullName,
      password: password,
      email: email,
      role: "student", // Default role for public signups
      // Optional fields (send empty strings or defaults if not in form)
      bio: "New reader",
      gender: "other",
      address: "Phnom Penh",
      profile_url: "https://placehold.co/100",
      phone_number: "",
      date_of_birth: new Date().toISOString(),
    };

    const submitBtn = signupForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerText;
    submitBtn.innerText = "Creating Account...";
    submitBtn.disabled = true;

    try {
      // 4. Call API
      const result = await Auth.register(userData);

      // API usually returns the user object or access_token on success,
      // or a 'detail' array on failure.
      if (result.access_token || result.id || result.username) {
        alert("Account created successfully! Please Login.");
        window.location.href = "signin.html";
      } else if (result.detail) {
        // Parse API Error
        const msg = Array.isArray(result.detail)
          ? result.detail.map((err) => err.msg).join(", ")
          : result.detail;
        alert("Registration Failed: " + msg);
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error.");
    } finally {
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
    }
  });
}
