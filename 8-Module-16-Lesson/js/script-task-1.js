/**
 * Create infinity scroll of countries
 */

let handlerCallCount = 0;
let startIndex = 0;
const COUNTRY_SEGMENT_COUNT = 10;

const listRef = document.querySelector('.country-list');

function scrollHandler() {
  console.log(++handlerCallCount);
  if (!isScrollToBottom()) return;

  renderPartOfCountries();

  if (startIndex >= countries.length) {
    window.removeEventListener('scroll', scrollHandler);
  }
}

window.addEventListener('scroll', scrollHandler);

function isScrollToBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

function createCountryRef(country) {
  const countryRef = document.createElement('h2');
  countryRef.classList.add('country');
  countryRef.textContent = country;
  return countryRef;
}

function renderPartOfCountries() {
  const partOfCountries = countries.slice(
    startIndex,
    startIndex + COUNTRY_SEGMENT_COUNT,
  );
  const countryRefs = partOfCountries.map(createCountryRef);
  listRef.append(...countryRefs);
  startIndex += COUNTRY_SEGMENT_COUNT;
}
renderPartOfCountries();
