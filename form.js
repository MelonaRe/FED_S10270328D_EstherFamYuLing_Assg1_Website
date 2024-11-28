// Get references to form steps and navigation buttons
// Elements
// Access the HTML elements for the form steps, navigation buttons, and input fields
const nextBtn = document.getElementById('next-btn'); // Next button to move forward in the form
const backBtn = document.getElementById('back-btn'); // Back button to go to the previous step
const skipBtn = document.getElementById('skip-btn'); // Skip button to skip steps 7-9
const stepIndicator = document.getElementById('step-indicator'); // Displays current step number
const emailInput = document.getElementById('email'); // Email input field
const ageInput = document.getElementById('age'); // Age input field
const profilePicture = document.getElementById('profile-picture'); // Profile picture input field
const imagePreview = document.getElementById('image-preview'); // Profile picture preview
const idProofInput = document.getElementById('id-proof'); // ID proof input field
const idPreview = document.getElementById('id-preview'); // ID proof preview
const nameInput = document.getElementById('name'); // Name input field
const passwordInput = document.getElementById('password'); // Password input field
const errorMessage = document.getElementById('error-message'); // Error message element for validation feedback

// Step Tracker
const steps = document.querySelectorAll('.form-step'); // Get all form steps to count
let currentStep = 0;

// Add event listeners for the "Find Your Love" buttons
// These buttons are used to select the user's intention for using the platform
document.getElementById('love-btn').addEventListener('click', handleIntentionsClick);
document.getElementById('friendship-btn').addEventListener('click', handleIntentionsClick);
document.getElementById('both-btn').addEventListener('click', handleIntentionsClick);

// Add event listeners for the "What's your gender?" and "Who are you looking for?" steps
// These are gender selection buttons for both the user & the person they are looking for
document.getElementById('male-btn').addEventListener('click', handleGenderSelection);
document.getElementById('female-btn').addEventListener('click', handleGenderSelection);
document.getElementById('non-binary-btn').addEventListener('click', handleGenderSelection);

document.getElementById('look-male-btn').addEventListener('click', handleGenderSelection);
document.getElementById('look-female-btn').addEventListener('click', handleGenderSelection);
document.getElementById('look-non-binary-btn').addEventListener('click', handleGenderSelection);

// Initialise the form (hide all steps except the first one)
function initialiseForm() {
  // Loop through all steps and display only the current step
  steps.forEach((step, index) => {
    step.style.display = index === currentStep ? 'block' : 'none'; // Show the current step, hide others
  });
  updateNavigationButtons(); // Update navigation buttons (next, back, skip) based on the current step
}

// Update navigation buttons based on the current step
function updateNavigationButtons() {
  // Handle "Next" button visibility - only visible for some steps
  nextBtn.style.display = (currentStep === 0 || currentStep === 4 || currentStep === 5) ? 'none' : 'inline-block';

  // Show "Skip" button only for steps 7-9 (skipping directly to step 10)
  skipBtn.style.display = (currentStep >= 6 && currentStep <= 8) ? 'inline-block' : 'none';

  // Update the step indicator text (e.g., "Step 3 of 10")
  stepIndicator.textContent = `Step ${currentStep + 1} of ${steps.length}`;
}

// Handle "Next" button click (move to the next step)
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
    errorMessage.textContent = "Please complete the required fields."; // Show error if validation fails
    errorMessage.style.display = 'block'; // Display the error message
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
  //Start with one or more non-space and non-@ characters.
  //Have an "@" symbol separating the username and domain.
  //The domain can only end with .com, .net, or .org.
  //No spaces or extra @ symbols are allowed anywhere in the email.
  return emailRegex.test(email); //returns true if email matches the regex pattern
}

// Form Validation
function validateForm() {
  const emailValid = validateEmail(emailInput.value); // Validate email format
  const ageValid = parseInt(ageInput.value) >= 40; // Validate that age is 40 or above
  const passwordValid = passwordInput.value.trim() !== ''; // Validate password (should not be empty)
  
  // Enable the "Next" button if all validations pass
  if (emailValid && ageValid && passwordValid) {
    nextBtn.disabled = false; // Enable Next button if validation passes
  } else {
    nextBtn.disabled = true; // Disable Next button if validation fails
  }
}

// Function to validate if required fields are completed for each step
function validateStep(stepIndex) {
  if (stepIndex === 1) {
    // Step 1: Validate email (should be in valid format) & password (should not be empty)
    const emailValid = validateEmail(emailInput.value.trim()); // Validating email format
    const passwordValid = passwordInput.value.trim() !== ""; // Password should not be empty
    return emailValid && passwordValid;
  }
  if (stepIndex === 2) {
    // Step 2: Validate name input (name should not be empty)
    return nameInput.value.trim() !== "";
  } 
  if (stepIndex === 3) {
    // Step 4: Validate age (should be a number and >= 40)
    return ageInput.value.trim() !== "" && ageInput.value >= 40;
    } 
  if (stepIndex === 9) {
    // Step 10: Validate ID proof (file must be uploaded)
    return idProofInput.files.length > 0;
  }
  return true; // No validation needed for other steps
}

// Handle "Find Your Love", "Friendship", and "Both" buttons (Intentions Step)
function handleIntentionsClick() {
  if (currentStep === 0) {
    currentStep = 1; // Move to the next step after selecting an intention
  }
  initialiseForm(); // Update the form display
}

// Handle gender-related steps (move to next step when a button is clicked)
function handleGenderSelection() {
  if (currentStep === 4 || currentStep === 5) {
    currentStep++; // Move to the next step after gender selection
  }
  initialiseForm(); // Update the form display
}

// Complete the signup process and display user profile
function completeSignUp() {
  // Extract data from the form inputs to complete the sign-up
  const name = nameInput.value;
  const age = ageInput.value;
  const profilePic = imagePreview.src; // Get the profile picture source (preview image)
}

// Steps 9 & 10 file upload & preview
// Handle file upload (for profile picture and ID proof) and preview the uploaded file
function handleFileUpload(event, previewElement) {
  const file = event.target.files[0]; // Get the selected file
  if (file) {
    const reader = new FileReader(); // Create a FileReader instance to read the file
    reader.onload = (e) => {
      previewElement.src = e.target.result; // Set the preview image source to the uploaded file
      previewElement.style.display = 'block'; // Show the preview element
    };
    reader.readAsDataURL(file); // Read the file as a data URL (for image files)
  } else {
    previewElement.style.display = 'none'; // Hide the preview if no file is selected
  }
}

// Profile picture upload preview
profilePicture.addEventListener("change", (event) => {
  handleFileUpload(event, imagePreview); // Call file upload handler for profile picture
});

// ID proof upload preview
idProofInput.addEventListener("change", (event) => {
  handleFileUpload(event, idPreview); // Call file upload handler for ID proof
});

// Initialisation: Call initialiseForm() to display the first step on page load
initialiseForm();