// Formulario de Login

const email = document.getElementById('email');
const password = document.getElementById('password');

const login = document.querySelector('#login');

login.addEventListener('click', (event) => {
  event.preventDefault();

  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
  console.log(email.value);
  console.log(password.value);
});
