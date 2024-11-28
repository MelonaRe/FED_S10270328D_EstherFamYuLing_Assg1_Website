// Get references to form steps and navigation buttons
// Elements
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const skipBtn = document.getElementById('skip-btn');
const stepIndicator = document.getElementById('step-indicator');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const profilePicture = document.getElementById('profile-picture');
const imagePreview = document.getElementById('image-preview');
const idProofInput = document.getElementById('id-proof');
const idPreview = document.getElementById('id-preview');
const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
// Step Tracker
const steps = document.querySelectorAll('.form-step');
let currentStep = 0;

// Add event listeners for the "Find Your Love" buttons
document.getElementById('love-btn').addEventListener('click', handleIntentionsClick);
document.getElementById('friendship-btn').addEventListener('click', handleIntentionsClick);
document.getElementById('both-btn').addEventListener('click', handleIntentionsClick);

// Add event listeners for the "What's your gender?" and "Who are you looking for?" steps
document.getElementById('male-btn').addEventListener('click', handleGenderSelection);
document.getElementById('female-btn').addEventListener('click', handleGenderSelection);
document.getElementById('non-binary-btn').addEventListener('click', handleGenderSelection);

document.getElementById('look-male-btn').addEventListener('click', handleGenderSelection);
document.getElementById('look-female-btn').addEventListener('click', handleGenderSelection);
document.getElementById('look-non-binary-btn').addEventListener('click', handleGenderSelection);

// Initialise the form (hide all steps except the first one)
function initialiseForm() {
  steps.forEach((step, index) => {
    step.style.display = index === currentStep ? 'block' : 'none';
  });
  updateNavigationButtons();
}

// Update navigation buttons based on the current step
function updateNavigationButtons() {
  // Handle "Next" visibility
  nextBtn.style.display = (currentStep === 0 || currentStep === 4 || currentStep === 5) ? 'none' : 'inline-block';

  // Show "Skip" only for steps 6-8
  skipBtn.style.display = (currentStep >= 6 && currentStep <= 8) ? 'inline-block' : 'none';

  // Update step indicator
  stepIndicator.textContent = `Step ${currentStep + 1} of ${steps.length}`;
}

// Handle Next button click (move to the next step)
nextBtn.addEventListener('click', () => {
  if (validateStep(currentStep)) {
    // Hide error message when the step is valid
    errorMessage.style.display = 'none';
    if (currentStep === steps.length - 1) {
      completeSignUp();
      window.location.href = "index.html"; // Redirect to index.page on the last step
    } else {
      currentStep++; // Move to next step
      initialiseForm(); // Update the form to display the next step
    }
  } else {
    errorMessage.textContent = "Please complete the required fields.";
    errorMessage.style.display = 'block';
  }
});

// Handle Back button click (move to the previous step)
backBtn.addEventListener('click', () => {
  if (currentStep === 0) {
    window.location.href = "landing.html"; // Redirect to "landing.html" when the first step is reached
  } else {
    currentStep--; // Move to the previous step
    initialiseForm(); // Update the form to display the previous step
  }
});

// Skip button click handler (move to next step, skipping 6-9 directly to step 10)
skipBtn.addEventListener('click', () => {
  currentStep = 9; // Skip directly to step 10
  initialiseForm();
});

// Function to validate email format (using regex)
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org)$/;

  return emailRegex.test(email);
}

// Form Validation
function validateForm() {
  const emailValid = validateEmail(emailInput.value); // Validate email
  const ageValid = parseInt(ageInput.value) >= 40; // Validate age
  const passwordValid = passwordInput.value.trim() !== ''; // Validate password

  if (emailValid && ageValid && passwordValid) {
    nextBtn.disabled = false; // Enable Next button if validation passes
  } else {
    nextBtn.disabled = true; // Disable Next button if validation fails
  }
}

// Function to validate if required fields are completed
function validateStep(stepIndex) {
  if (stepIndex === 1) {
    // Step 1: Validate email (should not be empty and should be in proper .com format) and password
    const emailValid = validateEmail(emailInput.value.trim()); // Validating email format
    const passwordValid = passwordInput.value.trim() !== ""; // Password should not be empty
    return emailValid && passwordValid;
  }
  if (stepIndex === 2) {
    // Step 2: Validate name input (name should not be empty)
    return nameInput.value.trim() !== "";
  } 
  if (stepIndex === 3) {
    // Validate age input for Step 4
    return ageInput.value.trim() !== "" && ageInput.value >= 40;
    } 
  if (stepIndex === 10) {
    // Validate 10
    return idProofInput.files.length > 0;
  }
  return true; // No validation needed for other steps
}

// Handle "Find Your Love", "Friendship", and "Both" buttons (Intentions Step)
function handleIntentionsClick() {
  if (currentStep === 0) {
    currentStep = 1; // Move to the next step after selecting an intention
  }
  initialiseForm();
}

// Handle gender-related steps (move to next step when a button is clicked)
function handleGenderSelection() {
  if (currentStep === 4 || currentStep === 5) {
    currentStep++;
  }
  initialiseForm();
}

// Complete the signup process and display user profile
function completeSignUp() {
  const name = nameInput.value;
  const age = ageInput.value;
  const profilePic = imagePreview.src;
}

// Steps 9 & 10 file upload & preview
// Handle file upload for profile picture and ID proof
function handleFileUpload(event, previewElement) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      previewElement.src = e.target.result;
      previewElement.style.display = 'block'; // Show the preview
    };
    reader.readAsDataURL(file);
  } else {
    previewElement.style.display = 'none'; // Hide the preview if no file is selected
  }
}

// Profile picture upload preview
profilePicture.addEventListener("change", (event) => {
  handleFileUpload(event, imagePreview); // Call without success/failure messages
});

// ID proof upload preview
idProofInput.addEventListener("change", (event) => {
  handleFileUpload(event, idPreview); // Call without success/failure messages
});

// Initialisation
initialiseForm();