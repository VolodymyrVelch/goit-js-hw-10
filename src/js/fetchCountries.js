export function fetchCountries(name) {
  const mainUrl = 'https://restcountries.com/v3.1/name/';
  const fiilterCountryData = 'fields=name,capital,population,flags,languages';
  return fetch(`${mainUrl}${name}?${fiilterCountryData}`).then(response =>
    response.json()
  );
}

//   Тобі потрібні тільки наступні властивості:

// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов

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
