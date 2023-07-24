import validator from 'validator';
import './style.css';

const defaultClass = 'default-message';
const redClass = 'red-message';
const greenClass = 'green-message';

document.querySelector('#info').addEventListener('input', (e) => {
  if (e.target.value.length === 0) {
    const message = document.querySelector('#message');
    message.innerHTML = '';
    message.classList.remove(greenClass, redClass);
    message.classList.add(defaultClass);
    message.innerHTML = 'Digite um valor, escolha uma opção e clique em validar.';
  }
});

const printMessage = (result) => {
  const message = document.querySelector('#message');
  if (result) {
    message.innerHTML = '';
    message.classList.remove(redClass, defaultClass);
    message.classList.add(greenClass);
    message.innerHTML = 'A informação digitada é válida';
  }
  if (!result) {
    message.innerHTML = '';
    message.classList.remove(greenClass, defaultClass);
    message.classList.add(redClass);
    message.innerHTML = 'A informação digitada é inválida';
  }
};

const isCPF = (value) => {
  return validator.isTaxID(value, ['pt-BR']);
};

const isEmail = (value) => {
  return validator.isEmail(value);
};

const isAdress = (value) => {
  return validator.isPostalCode(value, ['BR']);
};

const isPhoneNumber = (value) => {
  return validator.isMobilePhone(value, ['pt-BR']);
};

const isBirthDate = (value) => {
  return validator.isDate(value, { format: 'DD/MM/YYYY', strictMode: true });
};

const validation = (value) => {
  const selected = document.querySelector('#dropDown');
  if (selected.value === 'CPF') {
    const result = isCPF(value);
    printMessage(result);
  }
  if (selected.value === 'E-mail') {
    const result = isEmail(value);
    printMessage(result);
  }
  if (selected.value === 'CEP') {
    const result = isAdress(value);
    printMessage(result);
  }
  if (selected.value === 'Telefone') {
    const result = isPhoneNumber(value);
    printMessage(result);
  }
  if (selected.value === 'Data de Nascimento') {
    const result = isBirthDate(value);
    printMessage(result);
  }
};

const submitAndValidate = () => {
  const button = document.querySelector('#button-submit');
  button.addEventListener('click', (e) => {
    const input = document.querySelector('#info');
    if (input.value !== '') {
      e.preventDefault();
      validation(input.value);
    }
  });
};
submitAndValidate();
