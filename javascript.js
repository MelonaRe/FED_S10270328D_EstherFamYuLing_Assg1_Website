// Signup Steps Data
const steps = [
    { id: 1, question: "Enter your email", inputType: "email", placeholder: "Email", key: "email" },
    { id: 2, question: "Set your password", inputType: "password", placeholder: "Password", key: "password" },
    { id: 3, question: "What's your name?", inputType: "text", placeholder: "Full Name", key: "name" },
    { id: 4, question: "How old are you?", inputType: "number", placeholder: "Age", key: "age" },
    { id: 5, question: "What's your gender?", inputType: "select", options: ["Female", "Male", "Non-Binary"], key: "gender" },
    { id: 6, question: "Who are you looking for?", inputType: "select", options: ["Female", "Male", "Non-Binary"], key: "looking_for" },
    { id: 7, question: "What 's your ethnicity?", inputType: "text", placeholder: "Ethnicity", key: "ethnicity" },
    { id: 8, question: "Show us your smile!", inputType: "file", placeholder: "Upload Picture", key: "profile_picture" },
    { id: 9, question: "Verify your ID", inputType: "file", placeholder: "Upload ID", key: "id_verification" },
    { id: 10, question: "About You (Optional)", inputType: "text", placeholder: "Tell us more...", key: "about" }
  ];
  
  // DOM Elements for Signup
  const formStep = document.getElementById("form-step");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  
  // Variables to Track Steps
  let currentStep = 0;
  let formData = {};
  
  // Render Step
  function renderStep() {
    const step = steps[currentStep];
    formStep.innerHTML = `
      <p><strong>Step ${currentStep + 1} of ${steps.length}</strong></p>
      <label>${step.question}</label>
      ${
        step.inputType === "select"
          ? `<select id="step-input">${step.options.map(option => `<option>${option}</option>`).join("")}</select>`
          : `<input id="step-input" type="${step.inputType}" placeholder="${step.placeholder}" ${
              step.inputType === "file" ? 'accept="image/*"' : ""
            } />`
      }
    `;
    prevBtn.disabled = currentStep === 0;
    nextBtn.textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
  }
  
  // Handle Navigation
  prevBtn?.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      renderStep();
    }
  });
  
  nextBtn?.addEventListener("click", () => {
    const input = document.getElementById("step-input");
    if (!input.value && steps[currentStep].inputType !== "file") {
      alert("Please fill out this field.");
      return;
    }
    formData[steps[currentStep].key] = input.value;
    if (currentStep < steps.length - 1) {
      currentStep++;
      renderStep();
    } else {
      // Store Email and Password in Local Storage
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push({ email: formData.email, password: formData.password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("Signup complete! Redirecting to login...");
      window.location.href = "login.html";
    }
  });
  
  // Initialize Signup
  if (formStep) renderStep();
  
  // Handle Login
  const loginForm = document.getElementById("login-form");
  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(user => user.email === email && user.password === password);
    if (validUser) {
      alert("Login successful!");
      // Redirect to homepage or dashboard
      window.location.href = "index.html";
    } else {
      document.getElementById("error-message").style.display = "block";
    }
  });
  






  
  