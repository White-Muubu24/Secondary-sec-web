
document.getElementById('certificateForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const admissionNumber = document.getElementById('admissionNumber').value.trim();

  if (admissionNumber !== "") {
    document.getElementById('studentName').textContent = "Student #" + admissionNumber;
    document.getElementById('certificateSection').style.display = 'block';
  }
});
