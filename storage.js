const contactCard = document.getElementById('contact-card');
const nameField = contactCard.elements.fullName;
const emailField = contactCard.elements.email;
const messageField = contactCard.elements.message;

function userLocalStorage() {
  const dataUser = {
    fullName: nameField.value,
    emailAddress: emailField.value,
    message: messageField.value,
  };
  localStorage.setItem('formData', JSON.stringify(dataUser));
}

function inputForm() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData !== null) {
    nameField.value = formData.fullName;
    emailField.value = formData.emailAddress;
    messageField.value = formData.message;
  }
}

window.addEventListener('load', inputForm);

for (let n = 0; n < contactCard.length; n += 1) {
  contactCard[n].addEventListener('change', () => {
    userLocalStorage();
  });
}
