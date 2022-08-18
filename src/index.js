import './css/styles.css';

import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { renderCountry } from './js/marcup-country';

// import countryCard from './templates/country-card.hbs';
// import cards from './templates/country-card.hbs';

const DEBOUNCE_DELAY = 1000;

refs = {
  input: document.querySelector('input'),
  markup: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onInputchange, DEBOUNCE_DELAY));

function onInputchange(e) {
  e.preventDefault;
  const inputData = refs.input.value.trim();
  fetchCountries(inputData)
    // .then(country => {
    //   console.log(country);
    // })
    .then(countries => {
      countries.map(country => {
        const markup = renderCountry(country);
        refs.markup.innerHTML = markup;
      });
    })
    .catch(
      error => console.log(error)
      // Notiflix.Notify.warning('Oops, there is no country with that name')
    );
}
