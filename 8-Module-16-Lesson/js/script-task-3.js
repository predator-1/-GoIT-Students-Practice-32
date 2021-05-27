/**
 * Create infinity scroll of countries with IntersectionObserver
 */

let startIndex = 0;
const COUNTRY_COUNT = 10;

const listRef = document.querySelector('.country-list');
const anchorRef = document.querySelector('.anchor');

const observer = new IntersectionObserver(observerCallback, {
  threshold: 0,
});

observer.observe(anchorRef);

function observerCallback([entrie], observerRef) {
  if (!entrie.isIntersecting) return;

  renderPartOfCountries();

  if (startIndex >= countries.length) {
    observerRef.unobserve(anchorRef);
  }
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
    startIndex + COUNTRY_COUNT,
  );
  const contryRefs = partOfCountries.map(createCountryRef);

  listRef.append(...contryRefs);

  startIndex += COUNTRY_COUNT;
}

renderPartOfCountries();
