// Alert on button click
function showAlert() {
    alert("Welcome to Zed Fakaxa Photography!");
}

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
    this.reset();
});
