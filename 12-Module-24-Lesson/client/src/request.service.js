export const getCat = () => {
  return fetch('api/cat', { method: 'GET' }).then(r => {
    if (r.ok) return r.json();
    console.log(r.text);
  });
};

export const getWrongCat = () => {
  return fetch('api/dog', { method: 'GET' }).then(r => {
    if (r.ok) return r.json();
    r.text().then(console.log);
    return 'error';
  });
};
