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

const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

function toggleDisabled(isDisabled) {
  if (isDisabled) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}

agreement.addEventListener('click', () => {
  const isDisabled = agreement.checked;

  toggleDisabled(!isDisabled);
});

toggleDisabled(true);

// const textarea = document.getElementById('textarea');
// const counter = document.getElementById('counter');
// // console.log(typeof +counter.innerText);
// // console.log(textarea);

// const incrementCounter = Number(counter.innerText);

// function characterCounter(value) {
//   value += value;
//   console.log(value);
// }

// textarea.addEventListener('keyup', () => {
//   characterCounter(incrementCounter);
// });

// submitBtn.addEventListener('click', () => {
//   console.log('Enviou!!!');
// });
