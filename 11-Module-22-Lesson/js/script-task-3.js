/**
 * Wait when all 3 images will be downloaded
 */

 const images = [
    'https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/hoto-1622495546323-5dac33dedb01?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
    'https://images.unsplash.com/photo-1623405076123-cab57d53f7ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  ];

const getImage = src => {
    const image = document.createElement('img');
    image.src = src;
    image.width = 500;
    image.height = 300;

    return new Promise((resolve, reject) => {
        image.onload = () => resolve(image);
        image.onerror = () => reject('Load aborted');
    });
}

Promise.allSettled(images.map(getImage))
.then(imgList => imgList.filter(img => img.status === 'fulfilled'))
.then(imgList => imgList.map(img => img.value))
.then(imgList => document.body.append(...imgList))
.catch((e) => console.log(e));

// Promise.all(images.map(getImage))
// .then(imgList => document.body.append(...imgList))
// .catch((e) => console.log(e));