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

// Dasabilita botão enviar se o checkbox não estriver marcado.

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

// Conta os caracteres disponiveis no text area.

const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

textarea.addEventListener('keyup', () => {
  const valueCounter = 500;
  const textLength = textarea.value.length;
  const value = valueCounter - textLength;

  counter.innerText = value;
});

// enviar Fomulario.

const inputFirstName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const houseSelect = document.getElementById('house');
const select = document.querySelectorAll('input[name="agree"]');
const form = document.getElementById('evaluation-form');

submitBtn.addEventListener('click', () => {
  const famylyCheckbox = document.querySelector('input[name="family"]:checked');
  const radioChecked = document.querySelector('input[name="rate"]:checked');
  const materias = [];
  for (let index = 1; index < select.length; index += 1) {
    if (select[index].checked) {
      materias.push(select[index].value);
    }
  }

  form.innerText = `
    Nome: ${inputFirstName.value} ${inputLastName.value}
    Email: ${inputEmail.value}
    Casa: ${houseSelect.value}
    Família: ${famylyCheckbox?.value}
    Matérias: ${materias.toString().replace(/,/g, ', ')}
    Avaliação: ${radioChecked?.value}
    Observações: ${textarea.value}
  `;
});
