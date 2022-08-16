import './css/styles.css';

import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

refs = {
  input: document.querySelector('input'),
};
console.log(refs.input);

refs.input.addEventListener('input', onInputchange);
function onInputchange(e) {
  const inputData = e.currentTarget;
  console.log(inputData.value);
}

fetch('https://restcountries.com/v3.1/name/ukraine')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

//   Тобі потрібні тільки наступні властивості:

// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов
