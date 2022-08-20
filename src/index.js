import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { createCountry, createCountryList } from './js/marcup-country';

const DEBOUNCE_DELAY = 300;

const NOTIFY_OPTIONS = {
  timeout: 1000,
  showOnlyTheLastOne: true,
  clickToClose: true,
};

const refs = {
  input: document.querySelector('input'),
  countryMarkup: document.querySelector('.country-info'),
  couuntryListMarkup: document.querySelector('.country-list'),
};

refs.input.addEventListener('input', debounce(onInputchange, DEBOUNCE_DELAY));

function onInputchange(e) {
  e.preventDefault;
  const inputData = refs.input.value.trim();
  if (inputData === '') {
    refs.countryMarkup.innerHTML = '';
    refs.couuntryListMarkup.innerHTML = '';
  }
  fetchCountries(inputData)
    .then(countries => {
      countries.map(country => {
        let arrayLength = countries.length;
        if (arrayLength === 1) {
          const markup = createCountry(country);
          renderCountryInfo(markup);
          return;
        } else if (arrayLength > 10) {
          tooManyMatches();
          return;
        } else if (arrayLength > 1) {
          const markupList = createCountryList(countries);
          renderCountryList(markupList);
        }
      });
    })
    .catch(onFetchError);
}

function renderCountryList(markupList) {
  refs.countryMarkup.innerHTML = '';
  refs.couuntryListMarkup.innerHTML = markupList;
}

function renderCountryInfo(markup) {
  refs.couuntryListMarkup.innerHTML = '';
  refs.countryMarkup.innerHTML = markup;
}

function tooManyMatches() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.',
    NOTIFY_OPTIONS
  );
}

function onFetchError(error) {
  Notiflix.Notify.failure(
    'Oops, there is no country with that name',
    NOTIFY_OPTIONS
  );
}
