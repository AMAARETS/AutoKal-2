// ===================================================================
// ==  SHARED UTILITY FUNCTION (Used by both forms)
// ===================================================================

/**
 * Validates if a string is a valid Israeli phone number OR a valid email.
 * @param {string} value The string to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
function validateEmailOrPhone(value) {
  // Simple regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Regex for Israeli phone numbers (landline or mobile)
  const phoneRegex = /^(0\d{1,2}-?\d{7})$/;

  if (emailRegex.test(value)) {
    return true; // It's a valid email
  }
  // Test phone number after removing potential hyphens
  if (phoneRegex.test(value.replace(/-/g, ""))) {
    return true; // It's a valid phone number
  }
  return false; // It's neither
}


// ===================================================================
// ==  1. LOGIC FOR THE POPUP CONTACT FORM
// ===================================================================

function initializeContactForm() {
  const formWrapper = document.getElementById('contact-form-popup-wrapper');
  // If the popup wrapper doesn't exist on this page, stop this function immediately.
  if (!formWrapper) {
    return;
  }

  const toggleButton = document.getElementById('contact-toggle-button');
  const fabButton = document.getElementById('fab-contact-button');
  const contactForm = document.getElementById('contact-form');
  const closeButton = document.getElementById('contact-close-btn');

  if (contactForm.dataset.initialized) {
    return;
  }
  contactForm.dataset.initialized = "true";

  const openForm = () => formWrapper.classList.add('is-visible');
  const closeForm = () => formWrapper.classList.remove('is-visible');

  // Event Listeners for opening the form
  if (toggleButton) {
    toggleButton.addEventListener('click', (event) => {
      event.stopPropagation();
      formWrapper.classList.toggle('is-visible');
    });
  }
  if (fabButton) {
    fabButton.addEventListener('click', openForm);
  }

  // Event Listeners for closing the form
  if (closeButton) {
    closeButton.addEventListener('click', closeForm);
  }
  document.addEventListener('click', (event) => {
    if (formWrapper.classList.contains('is-visible') && !formWrapper.contains(event.target) && event.target !== toggleButton && event.target !== fabButton && !fabButton.contains(event.target)) {
      closeForm();
    }
  });
  
  const submitButton = document.getElementById('contact-submit-btn');
  const formStatus = document.getElementById('contact-form-status');
  const emailOrPhoneInput = document.getElementById('contact-email');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Validation Logic
    const contactValue = emailOrPhoneInput.value.trim();
    if (!validateEmailOrPhone(contactValue)) {
      formStatus.textContent = 'אנא הזן כתובת מייל או מספר טלפון תקין.';
      formStatus.className = 'error';
      emailOrPhoneInput.style.borderColor = '#e53935';
      return;
    }
    
    formStatus.textContent = '';
    formStatus.className = '';
    emailOrPhoneInput.style.borderColor = '';

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    submitButton.disabled = true;
    submitButton.textContent = 'שולח...';
    
    fetch("https://formsubmit.co/ajax/click.go.script@gmail.com", { 
      method: "POST",
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
      formStatus.textContent = 'ההודעה נשלחה בהצלחה! בע"ה נחזור אליכם בהקדם';
      formStatus.classList.add('success');
      contactForm.reset();
      setTimeout(() => {
        closeForm();
        setTimeout(() => { formStatus.textContent = ''; formStatus.className = ''; }, 350);
      }, 2500);
    })
    .catch(error => {
      formStatus.textContent = 'אירעה שגיאה בשליחה.';
      formStatus.classList.add('error');
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.textContent = 'שליחה';
    });
  });
}


// ===================================================================
// ==  2. LOGIC FOR THE DEDICATED CONTACT PAGE FORM
// ===================================================================

function initializeDedicatedContactForm() {
  const contactForm = document.getElementById('contact-page-form');
  // If the dedicated form doesn't exist on this page, stop this function immediately.
  if (!contactForm) {
    return;
  }

  if (contactForm.dataset.initialized) {
    return;
  }
  contactForm.dataset.initialized = "true";
  
  const submitButton = document.getElementById('contact-page-submit-btn');
  const formStatus = document.getElementById('contact-page-form-status');
  const emailOrPhoneInput = document.getElementById('contact-page-email');
  
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Validation Logic
    const contactValue = emailOrPhoneInput.value.trim();
    if (!validateEmailOrPhone(contactValue)) {
      formStatus.textContent = 'אנא הזן כתובת מייל או מספר טלפון תקין.';
      formStatus.className = 'error';
      emailOrPhoneInput.style.borderColor = '#e53935';
      return;
    }

    formStatus.textContent = '';
    formStatus.className = '';
    emailOrPhoneInput.style.borderColor = '';

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    submitButton.disabled = true;
    submitButton.textContent = 'שולח...';
    
    fetch("https://formsubmit.co/ajax/click.go.script@gmail.com", { 
      method: "POST",
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
      formStatus.textContent = 'ההודעה נשלחה בהצלחה! בע"ה נחזור אליכם בהקדם';
      formStatus.classList.add('success');
      contactForm.reset();
    })
    .catch(error => {
      formStatus.textContent = 'אירעה שגיאה בשליחה. נסו שוב או השתמשו בדרכי ההתקשרות האחרות.';
      formStatus.classList.add('error');
    })
    .finally(() => {
      submitButton.disabled = false;
      submitButton.textContent = 'שליחה';
    });
  });
}


// ===================================================================
// ==  MAIN EXECUTION HOOK
// ===================================================================

// Run both initialization functions on every page load and navigation.
// Each function is smart enough to run only if its specific HTML elements exist.
document$.subscribe(function() {
  initializeContactForm();
  initializeDedicatedContactForm();
});