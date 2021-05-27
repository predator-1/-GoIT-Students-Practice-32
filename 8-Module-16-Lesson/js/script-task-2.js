/**
 * Create country search
 */

const listRef = document.querySelector('.country-list');

const searchRef = document.querySelector('.search');

searchRef.addEventListener('input', _.debounce(handleInput, 500));

function handleInput(event) {
  const search = event.target.value;
  const filteredCountries = countries.filter(country => {
    if (search === '') return true;

    return country.toLowerCase().includes(search.toLowerCase());
  });
  renderFilteredCountries(filteredCountries);
}

function renderFilteredCountries(filteredCountries) {
  listRef.innerHTML = '';

  const countryRefs = filteredCountries.map(createCountryRef);

  listRef.append(...countryRefs);
}

function createCountryRef(country) {
  const countryRef = document.createElement('h2');
  countryRef.classList.add('country');
  countryRef.textContent = country;
  return countryRef;
}

renderFilteredCountries(countries);
