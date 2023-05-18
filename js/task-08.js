const refs = {
  form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const userEmail = event.target.elements.email.value;
  const userPassword = event.target.elements.password.value;
  const userData = { email: userEmail, password: userPassword };
  if (userEmail === '' || userPassword === '') {
    alert('Please complete all fields!');
  } else {
    console.log(userData);
    refs.form.reset();
  }

  // ===== OPTION 2 =========== //

  //   const formData = new FormData(event.target);
  //   const user = {};

  //   formData.forEach((value, name) => {
  //     user[name] = value;
  //     if (Object.values(user).some(value => value === '')) {
  //       alert('Please complete all field!');
  //     } else {
  //       console.log(user);
  //       refs.form.reset();
  //     }
  //   });
}
