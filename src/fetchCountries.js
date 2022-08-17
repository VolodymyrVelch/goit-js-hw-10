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

// export default function murckupForCountry({
//   name: { official },
//   capital,
//   population,
//   flags: { svg },
//   languages,
// }) {
//   const langList = Object.values(languages);
//   return `  <div class='country-info__name-thumb'><img src="${svg}" alt="flag" width="30" height="30" class="country-info__img" /><span
//   class="country-info__name"
// >${official}</span></div>
// <ul class="country-info__list">
//   <li class="country-info__item">
//     <p class="country-info__text">Capital: <span class="country-info__text-description">${capital}</span></p>
//   </li>
//   <li class="country-info__item">
//     <p class="country-info__text">Population: <span class="country-info__text-description">${population}</span></p>
//   </li>
//   <li class="country-info__item">
//     <p class="country-info__text">Languages: <span class="country-info__text-description">${langList}</span></p>
//   </li>
// </ul>`;
// }
