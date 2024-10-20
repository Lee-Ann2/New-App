const form = document.getElementById('form');
const name = document.getElementById('name');
const lastname = document.getElementById('lastname');
const emails = document.getElementById('emails');
const passwords = document.getElementById('passwords');
const authPassword = document.getElementById('auth-password');
const miss = document.getElementById('female');
const mr = document.getElementById('male');
const other = document.getElementById('other');
const birth = document.getElementById('birth');
const submit = document.getElementById('submitbtn');
const error = document.getElementById('errors');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});

/*auth.createWithUserEmailAndPassword(emails, passwords)
.then(function() {
  const user = auth.user
//add user to firebase database
const database_ref = database_ref()

//add user data 

const data_ref = {
 name : name,
 lastname : lastname,
 emails : emails,
 passwords : passwords,
 authPassword : authPassword,
 last_login : Date.now()  //last time the user loged in
}

data_ref.child('users/' + user.uid).set(user_data)

})

.catch(function(error) {
  const error = error.code
  const message = error.message
  alert(message)
});
*/

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
    
      if (female.checked === false && male.checked === false && other.checked === false) {
        setError(female, 'Title is required');
      } else {
        setSuccess(female);
      }
    
      if (birth.value === '') {
        setError(birth, 'Birthdate is required');
      } else {
        setSuccess(birth);
      }

      submit.addEventListener('click', () => {
        window.open('home.html', '_self');
      });

};


// sign part


