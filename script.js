const registerForm = document.querySelector('#register-form');

// Exibe as informções do formulário depois de preenchido
function personalData() {
  const rightContent = document.querySelector('.right-content');
  const firstName = document.querySelector('.firstname').value;
  const lastName = document.querySelector('.lastname').value;
  const phoneEmail = document.querySelector('input[name="phone_email"]').value;
  const birthdate = document.querySelector('input[name="birthdate"]').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  const hello = document.createElement('p');
  hello.innerText = `Olá, ${firstName} ${lastName}
                     Celular ou E-mail: ${phoneEmail}
                     Data de nscimento: ${birthdate}
                     Gênero: ${gender}
                    `;

  rightContent.innerHTML = '';

  rightContent.appendChild(hello);
}

// Validação do campo e-mail
function isValidEmail() {
  const phone_email = document.querySelector('#phone_email').value;
  const testValidation = /[a-z|0-9|\.\_]*@[a-z|0-9]*[\.][a-z]*|[(][0-9]{2}[)][0-9]*/;
  if (phone_email.match(testValidation)) {
    return true;
  } else {
    return false;
  }
}

// Validação dos campos referentes a data


// Validação dos campos
function isvalidField() {
  let inputRequired = document.querySelectorAll('[required]');
  let invalidField = false;
  for (let index = 0; index < inputRequired.length; index += 1) {
    if (!inputRequired[index].value) {
      inputRequired[index].parentNode.querySelector('.error').innerText = 'Campo inválido';
      inputRequired[index].style.borderBottom = '2px solid red';
    } else {
      inputRequired[index].parentNode.querySelector('.error').innerText = '';
      inputRequired[index].style.borderBottom = '2px solid var(--var-blueface)';
      invalidField = true;
    }
  }

  if (isValidEmail()) {
    inputRequired[2].parentNode.querySelector('.error').innerText = '';
    inputRequired[2].style.borderBottom = '2px solid var(--var-blueface)';
  } else {
    inputRequired[2].parentNode.querySelector('.error').innerText = 'Campo inválido';
    inputRequired[2].style.borderBottom = '2px solid red';
  }

  return invalidField;
}

// Remove campos do lado direito
function removeContent() {
  document.querySelector('.right-content').innerText = '';
}

// Adiciona o texto de boas vindas
function addWellcome() {
  const div = document.createElement('div');
  const greeting = document.createElement('p');
  const fullName = document.createElement('p');
  const ask = document.createElement('p');
  div.className = 'box-wellcome';
  greeting.className = 'greeting';
  greeting.innerText = 'Olá!!';
  fullName.className = 'full-name';
  fullName.innerText = `${document.querySelector('#firstname').value} ${document.querySelector('#lastname').value}`;
  ask.className = 'ask';
  ask.innerText = 'Podemos iniciar suas conexões?';

  removeContent();

  document.querySelector('.right-content').appendChild(div);
  document.querySelector('.box-wellcome').appendChild(greeting);
  document.querySelector('.box-wellcome').appendChild(fullName);
  document.querySelector('.box-wellcome').appendChild(ask);
};

// Adiciona um evento no botão "Cadastre-se"
document.querySelector('#facebook-register').addEventListener('click', () => {
  if (isvalidField() && isValidEmail()) {
    addWellcome();
    document.querySelector('.right-content').classList.add('wellcome');
  } else {
    isvalidField();
    document.querySelector('.right-content').classList.remove('wellcome');
  }
});

// Adiciona um evento no botão "Entrar"
document.querySelector('#button-login').addEventListener('click', (event) => {
  event.preventDefault();
  alert(document.querySelector('#user-email-phone').value);
});

// Adiciona ou remove o campo de gênero personalizado
function customFieldBehavior() {
  const genderCustom = document.querySelector('.hide')
  const radios = document.querySelectorAll('input[name="gender"]');

  for (let i = 0; i < radios.length; i += 1) {
    radios[i].addEventListener('click', (event) => {
      if (event.target.value === 'Personalizado') {
        genderCustom.style.display = 'block';
      } else {
        genderCustom.style.display = 'none';
      }
    });
  }
}

window.onload = function() {
  customFieldBehavior();
}
