import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { renderCountry, renderCountryList } from './js/marcup-country';

const DEBOUNCE_DELAY = 300;

const NOTIFY_OPTIONS = {
  timeout: 2000,
  showOnlyTheLastOne: true,
  clickToClose: true,
};

const refs = {
  input: document.querySelector('input'),
  adMarkup: document.querySelector('.country-info'),
};
// const input = document.querySelector('input');
// const markUp = document.querySelector('.country-info');

refs.input.addEventListener('input', debounce(onInputchange, DEBOUNCE_DELAY));

function onInputchange(e) {
  e.preventDefault;
  const inputData = refs.input.value.trim();
  fetchCountries(inputData)
    .then(countries => {
      countries.map(country => {
        const markup = renderCountry(country);
        const markupList = renderCountryList(countries);
        let arrayLength = countries.length;
        if (arrayLength === 1) {
          refs.adMarkup.innerHTML = markup;
        } else if (arrayLength > 10) {
          tooManyMatches();
        } else if (1 < arrayLength) {
          refs.adMarkup.innerHTML = markupList;
        }
      });
    })
    .catch(onFetchError);
}

function tooManyMatches() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.',
    NOTIFY_OPTIONS
  );
}

function onFetchError(error) {
  Notiflix.Notify.warning(
    'Oops, there is no country with that name',
    NOTIFY_OPTIONS
  );
}
