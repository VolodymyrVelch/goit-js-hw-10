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
