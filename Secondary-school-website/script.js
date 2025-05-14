document.getElementById('admissionForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual form submission

  // Show confirmation message
  document.getElementById('confirmation').style.display = 'block';

  // Reset the form
  this.reset();
});
