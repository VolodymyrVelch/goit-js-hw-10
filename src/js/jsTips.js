// import '../css/styles.css';
// import debounce from 'lodash.debounce';
// import CountriesApiService from './countries-api-service';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { makeCountriesListMarkup, makeCountryInfoMarkup } from './markup-funcs';

// const DEBOUNCE_DELAY = 300;
// export const NOTIFY_OPTIONS = {
//   timeout: 2000,
//   showOnlyTheLastOne: true,
//   clickToClose: true,
// };

// const refs = {
//   searchBox: document.querySelector('input#search-box'),
//   countriesContainer: document.querySelector('.country-list'),
//   countryInfoContainer: document.querySelector('.country-info'),
// };

// const countriesApiService = new CountriesApiService();

// refs.searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

// async function onSearch(e) {
//   const userInput = e.target.value.trim();

//   if (userInput === '') {
//     refs.countriesContainer.innerHTML = '';
//     refs.countryInfoContainer.innerHTML = '';
//     return;
//   }

//   countriesApiService.query = userInput;

//   const result = await countriesApiService.fetchCountries();

//   try {
//     if (result) {
//       if (result.length > 10) {
//         Notify.info(
//           'Too many matches found. Please enter a more specific name.',
//           NOTIFY_OPTIONS
//         );
//         return;
//       }

//       if (result.length > 1) {
//         const markup = makeCountriesListMarkup(result);
//         renderCountriesList(markup);
//         return;
//       }

//       const markup = makeCountryInfoMarkup(...result);
//       renderCoutryInfo(markup);
//     }
//   } catch (error) {
//     Notify.failure('Oops, there is no country with that name', NOTIFY_OPTIONS);
//   }
// }

// function renderCountriesList(markup) {
//   refs.countryInfoContainer.innerHTML = '';
//   refs.countriesContainer.innerHTML = markup;
// }

// function renderCoutryInfo(markup) {
//   refs.countriesContainer.innerHTML = '';
//   refs.countryInfoContainer.innerHTML = markup;
// }
// // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ------------------------------------------------

// const makeCountriesListMarkup = function (countriesArr) {
//   return countriesArr
//     .map(
//       country =>
//         `<li class="list-item">
//       <img src="${country.flags.svg}" alt="${country.name.official} flag" height>
//         ${country.name.official}
//         </li>`
//     )
//     .join('');
// };

// const makeCountryInfoMarkup = function ({
//   name,
//   flags,
//   capital,
//   languages,
//   population,
// }) {
//   return `<h2 class="country-header">
//       <img src="${flags.svg}" alt="${name.official} flag" >
//         ${name.official}
//         </h2>
//         <ul class='country-info-list'>
//           <li><strong>Capital: </strong>${capital}</li>
//           <li><strong>Population: </strong>${population}</li>
//           <li><strong>Languages: </strong>${Object.values(languages)}</li>
//         </ul>`;
// };

// export { makeCountriesListMarkup, makeCountryInfoMarkup };

// ===========================================================
// const BASE_URL = 'https://restcountries.com/v3.1';

// export default class CountriesApiService {
//   constructor() {
//     this.searchQuery = '';
//   }

//   async fetchCountries() {
//     const searchParams = new URLSearchParams({
//       fields: ['capital', 'name', 'population', 'flags', 'languages'],
//     });
//     const url = `${BASE_URL}/name/${this.searchQuery}?${searchParams}`;

//     const response = await fetch(url);

//     return response.json();
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
