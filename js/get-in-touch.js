import { disableImageDragging, blockDevToolsShortcuts, handlePreloader } from '../utils/shared.js';

disableImageDragging();
blockDevToolsShortcuts();
handlePreloader();

// Initialize EmailJS
(function () {
  emailjs.init("p2Upqh7XEc0ILtjza");
})();

const form = document.getElementById("contact-form");
const popup = document.getElementById("thankYouPopup");
const pageContent = document.getElementById("pageContent");
const closeBtn = document.getElementById("popupCloseBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm('service_dnbnkok', 'template_1b35qre', form)
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
      popup.style.display = "flex";
      pageContent.classList.add("blurred");
      form.reset();
    }, function (error) {
      console.log('FAILED...', error);
      alert("There was an error sending your message. Please try again.");
    });
});

function closePopup() {
  popup.style.display = "none";
  window.location.href = "get-in-touch.html";
}

// ✅ Safely attach click listener
if (closeBtn) {
  closeBtn.addEventListener("click", closePopup);
}
