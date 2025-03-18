// Initialize EmailJS
(function () {
  emailjs.init("FmQS-vKA60PYHGpf-"); // Replace with your EmailJS Public Key
})();

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");
  const submitButton = document.querySelector(".contact-btn");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (name === "" || email === "" || message === "") {
      showAlert("Please fill in all required fields.", "error");
      return;
    }

    // Change button text to show loading state
    submitButton.innerHTML = "Sending...";
    submitButton.disabled = true;

    // EmailJS parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      phone_number: phone || "Not provided",
      message: message,
    };

    emailjs
      .send("service_yw5qgrh", "template_ddnltyg", templateParams)
      .then(function (response) {
        showAlert("Message sent successfully!", "success");
        contactForm.reset();
      })
      .catch(function (error) {
        showAlert("Something went wrong. Please try again.", "error");
      })
      .finally(function () {
        submitButton.innerHTML = "Send Message";
        submitButton.disabled = false;
      });
  });

  // Function to show success or error messages
  function showAlert(message, type) {
    const alertBox = document.createElement("div");
    alertBox.textContent = message;
    alertBox.className = `alert ${type}`;
    contactForm.appendChild(alertBox);

    setTimeout(() => {
      alertBox.remove();
    }, 4000); // Remove after 4 seconds
  }
});
