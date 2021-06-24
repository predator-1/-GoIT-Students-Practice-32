import './style.css';
import { getCat, getWrongCat } from './request.service';
import $ from 'jquery';

const CATS_COUNT = 5;
const loader = $('#loader');
const catsList = $('.cats-list');
const anchor = $('#anchor');

let isLoading = false;

const showLoader = () => {
  isLoading = true;
  loader.show();
};

const hideLoader = () => {
  isLoading = false;
  loader.hide();
};

const getCats = count => {
  const promises = [];
  for (let i = 0; i < count; i++) {
    promises.push(getCat());
  }
  return Promise.all(promises);
};

const render = () => {
  showLoader();
  getCats(CATS_COUNT).then(r => {
    r.forEach(image => {
      catsList.append(`<li><img src="${image.url}"/></li>`);
    });
    hideLoader();
  });
};

render();

const ioCallback = ([entrie], observerRef) => {
  if (isLoading) {
    if (!entrie.isIntersecting) return;

    render();
  }
};

const observer = new IntersectionObserver(ioCallback, { threshold: 0.5 });

observer.observe(anchor.get(0));

getWrongCat().then(console.log);
