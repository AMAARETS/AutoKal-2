    function initializeContactForm() {
      const toggleButton = document.getElementById('contact-toggle-button');
      const formWrapper = document.getElementById('contact-form-popup-wrapper');
      const contactForm = document.getElementById('contact-form');
      const closeButton = document.getElementById('contact-close-btn');

      // If the elements don't exist on the page, do nothing.
      if (!toggleButton || !formWrapper || !contactForm || !closeButton) {
        return; 
      }
      
      // A flag to prevent attaching listeners multiple times
      if (toggleButton.dataset.initialized) {
        return;
      }
      toggleButton.dataset.initialized = "true";

      const openForm = () => formWrapper.classList.add('is-visible');
      const closeForm = () => formWrapper.classList.remove('is-visible');

      toggleButton.addEventListener('click', (event) => {
        event.stopPropagation();
        formWrapper.classList.toggle('is-visible');
      });

      closeButton.addEventListener('click', closeForm);

      document.addEventListener('click', (event) => {
        if (formWrapper.classList.contains('is-visible') && !formWrapper.contains(event.target) && event.target !== toggleButton) {
          closeForm();
        }
      });
      
      const submitButton = document.getElementById('contact-submit-btn');
      const formStatus = document.getElementById('contact-form-status');
      contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        submitButton.disabled = true;
        submitButton.textContent = 'שולח...';
        formStatus.textContent = '';
        formStatus.className = '';
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

    // 2. Use the official MkDocs-Material hook to run our function
    // on every page load and navigation.
document$.subscribe(function() {
      initializeContactForm();
});