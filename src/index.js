import './css/styles.css';

import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

// import countryCard from './templates/country-card.hbs';
// import cards from './templates/country-card.hbs';

const DEBOUNCE_DELAY = 300;

refs = {
  input: document.querySelector('input'),
};

refs.input.addEventListener('input', debounce(onInputchange, DEBOUNCE_DELAY));

function onInputchange(e) {
  const inputData = refs.input.value.trim();
  fetchCountries(inputData).then(country => {
    console.log(country);
    renderCountry(country);
  });
}

function renderCountry({ name, capital, population, flags, languages }) {
  console.log(name, capital, population, flags, languages);
  // console.log(
  //   `name ${name.official} capital ${capital} population ${population} flags ${flags.svg}`
  // );
}
