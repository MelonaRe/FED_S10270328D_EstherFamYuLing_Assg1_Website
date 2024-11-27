// Get references to form steps and navigation buttons
// Elements
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const skipBtn = document.getElementById('skip-btn');
const stepIndicator = document.getElementById('step-indicator');
const ageInput = document.getElementById('age');
const emailInput = document.getElementById('email');
const idUpload = document.getElementById('id-upload');
const idPreview = document.getElementById('id-preview');
const profilePicture = document.getElementById('profile-picture');
const imagePreview = document.getElementById('image-preview');

// Show image preview when a file is uploaded
profilePicture.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.src = e.target.result;
      imagePreview.style.display = "block";
      clearIdBtn.style.display = "block"; // Show clear button
    };
    reader.readAsDataURL(file);
  } else {
    imagePreview.style.display = "none";
    clearIdBtn.style.display = "none";
  }
});

// Step Tracker
let currentStep = 0;
const steps = document.querySelectorAll('.form-step');

// Initialise the form (hide all steps except the first one)
function initialiseForm() {
  steps.forEach((step, index) => {
    step.style.display = index === currentStep ? 'block' : 'none';
  });
  updateNavigationButtons();
}

// Update navigation buttons based on the current step
function updateNavigationButtons() {
  // Handle the "Next" button visibility and logic
  if (currentStep === 0 || currentStep === 4 || currentStep === 5) {
    nextBtn.style.display = 'none'; // Hide the Next button for the first and gender-related steps
  } else {
    nextBtn.style.display = 'inline-block'; // Show the Next button for all other steps
  }

  // Skip button visibility: show for steps 6-9, hide otherwise
  if (currentStep >= 6 && currentStep <= 8) {
    skipBtn.style.display = 'inline-block';
  } else {
    skipBtn.style.display = 'none';
  }

  // Update step indicator (e.g., "Step 1 of 10")
  stepIndicator.textContent = `Step ${currentStep + 1} of ${steps.length}`;
}

// Handle Next button click (move to the next step)
nextBtn.addEventListener('click', () => {
  if (validateStep(currentStep)) {
    // Check if we're on the last step (Step 10)
    if (currentStep === steps.length - 1) {
      window.location.href = "index.html"; // Redirect to index.page when Step 10 is reached
    } else {
      // Otherwise, move to the next step
      currentStep++;
      initialiseForm(); // Update the form to display the next step
    }
  }
});

// Handle Back button click (move to the previous step)
backBtn.addEventListener('click', () => {
  if (currentStep === 0) {
    window.location.href = "landing.html"; // Redirect to "landing.html" when the first step is reached
  } else {
    if (validateStep(currentStep)) {
      currentStep--; // Move to the previous step
      initialiseForm(); // Update the form to display the previous step
    }
  }
});

// Skip button click handler (move to next step, skipping 6-9 directly to step 10)
skipBtn.addEventListener('click', () => {
  currentStep = 9; // Skip directly to step 10
  initialiseForm();
});

// Form Validation
function validateForm() {
  const emailInput = document.getElementById('email');
  const emailValid = validateEmail(emailInput.value); // Use the validateEmail function
  const ageValid = parseInt(ageInput.value) >= 40;

  if (emailValid && ageValid) {
    nextBtn.disabled = false;
  } else {
    nextBtn.disabled = true;
  }
}

// Function to validate email format (using regex)
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Regular expression for Gmail email validation
  return emailRegex.test(email); // Returns true if the email matches the pattern
}

// Form Validation
function validateForm() {
  const emailInput = document.getElementById('email');
  const emailValid = emailInput.value.includes('@gmail.com'); // Example for email format
  const ageValid = parseInt(ageInput.value) >= 40;

  if (emailValid && ageValid) {
    nextBtn.disabled = false;
  } else {
    nextBtn.disabled = true;
  }
}

// Function to validate if required fields are completed
function validateStep(stepIndex) {
  const errorMessageContainer = document.getElementById('error-message');
  
  // For steps 1 to 6 and step 10, ensure required fields are filled out
  if (stepIndex <= 6 || stepIndex === 10) {
    const requiredFields = steps[stepIndex].querySelectorAll('[required]');
    for (const field of requiredFields) {
      if (!field.value.trim()) {
        errorMessageContainer.textContent = 'Please fill in the fields.';
        errorMessageContainer.style.display = 'block'; // Show the error message
        return false;
      }
    }
  }
  
  // Validate email (step 2)
  if (stepIndex === 1) {
    if (!validateEmail(emailInput.value)) {
      errorMessageContainer.textContent = "Please enter a valid Gmail address.";
      errorMessageContainer.style.display = 'block'; // Show the error message
      return false;
    }
  }
  
  // Validate age (step 3)
  if (stepIndex === 3) {
    if (ageInput.value < 40) {
      errorMessageContainer.textContent = "Age must be 40 or older.";
      errorMessageContainer.style.display = 'block'; // Show the error message
      return false;
    }
  }

  errorMessageContainer.textContent = ""; // Clear error if all validations pass
  errorMessageContainer.style.display = 'none'; // Hide error message
  return true;
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

// Initialiseation
initialiseForm();