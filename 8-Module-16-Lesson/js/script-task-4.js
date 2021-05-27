/**
 * Add lazy loading to images
 */

const refs = {
  progress: document.querySelector('.progress'),
  sections: document.querySelector('.sections'),
  sectionsList: document.querySelectorAll('.section'),
};

refs.progress.value = refs.sections.clientHeight;
refs.progress.max = refs.sections.scrollHeight;

refs.sections.addEventListener('scroll', handleScroll);

function handleScroll(e) {
  refs.progress.value = e.target.scrollTop + refs.sections.clientHeight;
}

const options = {
  threshold: 0.2,
};

const sectionsObserver = new IntersectionObserver(onEntry, options);

refs.sectionsList.forEach(section => sectionsObserver.observe(section));

function onEntry(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const { id } = entry.target.dataset;
      const prev = document.querySelector('li.active');
      const menuItem = document.querySelector(`li[data-id="${id}"]`);

      if (prev) {
        prev.classList.remove('active');
      }
      menuItem.classList.add('active');

      const img = entry.target.querySelector('img');

      const { url } = img.dataset;

      img.src = url;
    }
  });
}
