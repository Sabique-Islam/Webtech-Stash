const modal = document.getElementById("size-guide-modal");
const btn = document.getElementById("size-guide-btn");
const span = document.querySelector(".close");

btn.onclick = () => modal.style.display = "block";

span.onclick = () => modal.style.display = "none";

window.onclick = (event) => {
  if (event.target == modal) modal.style.display = "none";
};

const form = document.querySelector('form.form-table');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const sizeInput = document.getElementById('tshirt-size');

function createSummaryModal(values) {
  let modalDiv = document.createElement('div');
  modalDiv.id = 'summary-modal';
  modalDiv.style.position = 'fixed';
  modalDiv.style.top = '50%';
  modalDiv.style.left = '50%';
  modalDiv.style.transform = 'translate(-50%, -50%)';
  modalDiv.style.background = '#fff';
  modalDiv.style.color = '#000';
  modalDiv.style.border = '2px solid #000';
  modalDiv.style.borderRadius = '12px';
  modalDiv.style.padding = '32px';
  modalDiv.style.zIndex = '9999';
  modalDiv.style.boxShadow = '0 4px 24px rgba(0,0,0,0.5)';
  modalDiv.innerHTML = `
    <h2 style="margin-top:0;">Submitted Values</h2>
    <table style="width:100%; border-collapse:collapse;">
      <tr><td><b>Name</b></td><td>${values.name}</td></tr>
      <tr><td><b>Email</b></td><td>${values.email}</td></tr>
      <tr><td><b>Age</b></td><td>${values.age}</td></tr>
      <tr><td><b>T-Shirt Size</b></td><td>${values.size}</td></tr>
    </table>
    <button id="close-summary" style="margin-top:24px; padding:10px 24px; font-size:1rem; border-radius:8px; border:2px solid #000; background:#000; color:#fff; cursor:pointer;">Close</button>
  `;
  document.body.appendChild(modalDiv);
  document.getElementById('close-summary').onclick = () => {
    modalDiv.remove();
  };
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  // AFLL :) regex validation
  const nameRegex = /^[A-Za-z\s]{2,50}$/;
  const emailRegex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
  const ageRegex = /^(1[89]|[2-9][0-9]|1[0-1][0-9]|120)$/;
  let valid = true;
  if (!nameRegex.test(nameInput.value)) {
    alert('Invalid name! Only letters and spaces, 2-50 characters.');
    nameInput.focus();
    valid = false;
  }
  if (!emailRegex.test(emailInput.value)) {
    alert('Invalid email address!');
    emailInput.focus();
    valid = false;
  }
  if (!ageRegex.test(ageInput.value)) {
    alert('Invalid age! Must be between 18 and 120.');
    ageInput.focus();
    valid = false;
  }
  if (!sizeInput.value) {
    alert('Please select a T-Shirt Size!');
    sizeInput.focus();
    valid = false;
  }
  if (!valid) return;
  const values = {
    name: nameInput.value,
    email: emailInput.value,
    age: ageInput.value,
    size: sizeInput.options[sizeInput.selectedIndex].text
  };
  createSummaryModal(values);
});
