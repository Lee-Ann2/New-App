const form = document.getElementById('form');
const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const emails = document.getElementById('emails');
const passwords = document.getElementById('passwords');
const authPassword = document.getElementById('auth-password');
const miss = document.getElementById('miss');
const mr = document.getElementById('mr');
const mrs = document.getElementById('mrs');
const other = document.getElementById('other');
const birth = document.getElementById('birth');
const submit = document.getElementById('submitbtn');
const error = document.getElementById('errors');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const names = element.parentElement;
  const errorDisplay = names.querySelector('.error');
  errorDisplay.innerText = message;
  names.classList.add('error');
  names.classList.remove('success');
};
const setSuccess = (element) => {
    const names = element.parentElement;
    const errorDisplay = names.querySelector('.error');
    errorDisplay.innerText = '';
    names.classList.add('success');
    names.classList.remove('error');
  };
  
  const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
  };
  
 const validateInputs = () => {
    const nameValue = name.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailsValue = emails.value.trim();
    const passwordsValue = passwords.value.trim();
    const authPasswordValue = authPassword.value.trim();
  
    if (nameValue === '') {
      setError(name, 'Name is required');
    } else {
      setSuccess(name);
    }
    if (lastnameValue === '') {
        setError(lastname, 'Last name is required');
      } else {
        setSuccess(lastname);
      }
    
      if (emailsValue === '') {
        setError(emails, 'Email is required');
      } else if (!isValidEmail(emailsValue)) {
        setError(emails, 'Invalid email');
      } else {
        setSuccess(emails);
      }
    
      if (passwordsValue === '') {
        setError(passwords, 'Password is required');
      } else if (passwordsValue.length < 8) {
        setError(passwords, 'Password length must be 8 characters long');
      } else {
        setSuccess(passwords);
      }
    
      if (authPasswordValue !== passwordsValue || authPasswordValue === '') {
        setError(authPassword, 'Invalid password or passwords do not match');
      } else {
        setSuccess(authPassword);
      }
    
      if (miss.checked === false && mr.checked === false && mrs.checked === false && other.checked === false) {
        setError(miss, 'Title is required');
      } else {
        setSuccess(miss);
      }
    
      if (birth.value === '') {
        setError(birth, 'Birthdate is required');
      } else {
        setSuccess(birth);
      }
    };

        