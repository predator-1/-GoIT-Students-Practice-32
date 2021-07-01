'use strict';

// https://developer.mozilla.org/ru/docs/Learn/JavaScript/Asynchronous/Async_await
// https://learn.javascript.ru/async-await

const email = 'abc@gmail.com';
const password = '12345';
const baseUrl = 'http://localhost:3030';

(async () => {
  //   const getToken = async () => {
  //     const tokenResponse = await fetch(`${baseUrl}/signin`, {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         email,
  //         password,
  //       }),
  //       headers: {
  //         'Content-type': 'Application/json',
  //       },
  //     });

  //     if (tokenResponse.ok) {
  //       const { accessToken } = await tokenResponse.json();
  //       return { token: accessToken };
  //     }

  //     throw new Error(await tokenResponse.text());
  //   };

  //   const getPosts = async ({ token }) => {
  //     const postsReponse = await fetch(`${baseUrl}/posts`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     if (postsReponse.ok) {
  //       return await postsReponse.json();
  //     }

  //     throw new Error(await postsReponse.text());
  //   };
  const getToken = async () => {
    const tokenResponse = await axios.post(`${baseUrl}/signin`, {
      email,
      password,
    });
    const { accessToken } = tokenResponse.data;
    return { token: accessToken };
  };

  const getPosts = async ({ token }) => {
    const { data } = await axios.get(`${baseUrl}/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  };

  try {
    const { token } = await getToken();
    console.log('token', token);
    const posts = await getPosts({ token });
    console.log('posts', posts);
  } catch (e) {
    console.log('error', e);
  }

  //   getToken()
  //     .then(({ token }) => {
  //       console.log('token', token);
  //       return getPosts({ token });
  //     })
  //     .then(posts => {
  //       console.log('posts', posts);
  //     })
  //     .catch(e => console.log('error', e));
})();
