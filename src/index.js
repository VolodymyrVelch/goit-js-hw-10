import './css/styles.css';

import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { renderCountry } from './js/marcup-country';

// import countryCard from './templates/country-card.hbs';
// import cards from './templates/country-card.hbs';

const DEBOUNCE_DELAY = 1000;

// refs = {
//   input: document.querySelector('input'),
//   markUp: document.querySelector('.country-info'),
//   extendedInfo: document.querySelector('.country-info_extended')
// };
const input = document.querySelector('input');
const markUp = document.querySelector('.country-info');
const extendedInfo= document.querySelector('.country-info_extended');

console.log(extendedInfo)

input.addEventListener('input', debounce(onInputchange, DEBOUNCE_DELAY));

function onInputchange(e) {
  e.preventDefault;
  const inputData = input.value.trim();
  fetchCountries(inputData)
    // .then(country => {
    //   console.log(country);
    // })
    .then(countries => {

      console.log(countries.length)
      countries.map(country => {
        const markup = renderCountry(country);
        switch(true){
          case (countries.length===1):
          markUp.innerHTML = markup;
          break;
          case (countries.length>10):
            
             Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
             break;
          case (1<countries.length<10):
            markUp.innerHTML = markup;
            // extendedInfo.classList.add('hide');
            extendedInfo.classList.toggle('hide');
            break;

        }

      });
    })
    .catch(
      error => console.log(error)
      // Notiflix.Notify.warning('Oops, there is no country with that name')
    );
}
