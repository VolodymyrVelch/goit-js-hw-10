export function fetchCountries(name) {
  const mainUrl = 'https://restcountries.com/v3.1/name/';
  const fiilterCountryData = 'fields=name,capital,population,flags,languages';
  return fetch(`${mainUrl}${name}?${fiilterCountryData}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
