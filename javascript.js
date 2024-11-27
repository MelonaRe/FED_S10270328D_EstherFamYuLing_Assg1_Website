// Get references to form steps and navigation buttons
// Elements
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const skipBtn = document.getElementById('skip-btn');
const stepIndicator = document.getElementById('step-indicator');
const ageInput = document.getElementById('age');
const preferredAgeInput = document.getElementById('preferred-age');
const idUpload = document.getElementById('id-upload');
const idPreview = document.getElementById('id-preview');
const clearIdBtn = document.getElementById('clear-id-btn');

// Show image preview when a file is uploaded
document.getElementById("profile-picture").addEventListener("change", (event) => {
  const file = event.target.files[0];
  const preview = document.getElementById("image-preview");

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  } else {
    preview.style.display = "none";
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
  updateStepIndicator();
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

  // Enable or disable the Back button
  if (currentStep === 0) {
    backBtn.disabled = false;
    backBtn.innerHTML = '<a href="landing.html" style="color: inherit; text-decoration: none;">Back</a>';
  } else {
    backBtn.disabled = currentStep === 0;
  }

  // Update step indicator (e.g., "Step 1 of 10")
  stepIndicator.textContent = `Step ${currentStep + 1} of ${steps.length}`;
}

// Handle Next button click (move to the next step)
nextBtn.addEventListener('click', () => {
  if (currentStep < steps.length - 1 && validateStep(currentStep)) {
      currentStep++;
    initialiseForm();
  }
});

// Handle Back button click (move to the previous step)
backBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    initialiseForm();
  }
});

// Skip button click handler (move to next step, skipping 6-9 directly to step 10)
skipBtn.addEventListener('click', () => {
  currentStep = 9; // Skip directly to step 10
  initialiseForm();
});

// Function to validate if required fields are completed
function validateStep(stepIndex) {
  const errorMessageContainer = document.getElementById('signup-error-message');
  
  // Clear any previous error message
  errorMessageContainer.textContent = '';
  errorMessageContainer.style.display = 'none';

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