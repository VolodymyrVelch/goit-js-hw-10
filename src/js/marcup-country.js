export function renderCountry({ name, capital, population, flags, languages }) {
  console.log(name.official, capital, population, flags, languages);
  let langList = Object.values(languages);
  //   //   let lang = langList.split(' ');
  //   console.log(langList.splite(''));

  return `  <div class="country-block">
    <img src="${flags.svg}" alt="flag" height='30' wtdth='30'>
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
}
