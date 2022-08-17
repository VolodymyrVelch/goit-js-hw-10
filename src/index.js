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

// refs.input.addEventListener('input', debounce(onInputchange, DEBOUNCE_DELAY));
refs.input.addEventListener('change', onInputchange);

function onInputchange(e) {
  const inputData = e.currentTarget.value.trim();
  fetchCountries(inputData).then(country => console.log(country[2]));
}
