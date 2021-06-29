'use strict';
/**
 * https://swagger.io/
 * https://www.uuidgenerator.net/version4
 * JWT
 */

const baseUrl = 'http://localhost:3030';

// const url = `${baseUrl}/posts`;

// const payload = {
//   title: 'some new title',
//   author: 'alex g',
// };

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-type': 'Application/json',
//   },
//   body: JSON.stringify(payload),
// };

// const url = `${baseUrl}/posts/6`;

// const payload = {
//   title: 'some new new new title',
// };

// const options = {
//   method: 'PUT',
//   headers: {
//     'Content-type': 'Application/json',
//   },
//   body: JSON.stringify(payload),
// };

// const url = `${baseUrl}/posts/6`;

// const payload = {
//   title: 'some new new new title',
// };

// const options = {
//   method: 'PATCH',
//   headers: {
//     'Content-type': 'Application/json',
//   },
//   body: JSON.stringify(payload),
// };

const url = `${baseUrl}/posts`;

const payload = {
  title: 'some new title',
  author: 'alex g',
};

const options = {
  method: 'POST',
  headers: {
    'Content-type': 'Application/json',
  },
  body: JSON.stringify(payload),
};

const getAuthToken = () => {
  return fetch(`${baseUrl}/signin`, {
    body: JSON.stringify({
      email: 'abc@gmail.com',
      password: '12345',
    }),
    method: 'POST',
    headers: {
      'Content-type': 'Application/json',
    },
  }).then(res => res.json());
};

getAuthToken()
  .then(({ accessToken }) => {
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  })
  .then(console.log);

// const options = {
//   method: 'DELETE',
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.log);
