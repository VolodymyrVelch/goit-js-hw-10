export { createCountry, createCountryList };

const createCountry = function ({
  name,
  capital,
  population,
  flags,
  languages,
}) {
  let langList = Object.values(languages);

  return `  <div class="country-main">
    <img src="${flags.svg}" alt="flag" width='30'>
    <h2 class="country-info_name">${name.official}</h2>
  </div>
  <ul class="country-info_extended">
    <li class="country-info_item">
      <p class="country-info_text">Capital: <span class="country-info_description"> ${capital} </span> </p>
    </li>
    <li class="country-info_item">
      <p class="country-info_text">Population: <span class="country-info_description"> ${population} </span> </p>
    </li>
    <li class="country-info_item">
      <p class="country-info_text">Languages: <span class="country-info_description"> ${langList} </span> </p>
    </li>
  </ul>`;
};

const createCountryList = function (countryArray) {
  return countryArray
    .map(
      country => `  <li class="country-main">
      <img src="${country.flags.svg}" alt="flag"  width='30'>
      <p class="country-info_name">${country.name.official}</p>
    </li>`
    )
    .join('');
};
