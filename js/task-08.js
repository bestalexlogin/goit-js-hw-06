const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  const userData = {};

  formData.forEach((value, key) => {
    userData[key] = value;
  });

  if (userData.email === '' || userData.password === '') {
    alert('Всі поля повинні бути заповнені!');
  } else {
    console.log(userData);
    form.reset();
  }
});

