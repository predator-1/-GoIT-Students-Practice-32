/**
 * Create list of 3 random images
 * List should be enumerated
 */

 const images = [
    'https://i.picsum.photos/id/952/200/200.jpg?hmac=6jMF0yOT214qb0hW6aUyexMo9flTRxyQbV8jYPcVolM',
    'https://i.picsum.photos/id/658/200/200.jpg?hmac=f24wxXCkgtH72eZ6mY95KRxTyvEG-_3ysR9z-R0a1QM',
    'https://i.picsum.photos/id/230/200/200.jpg?hmac=8tI9ISupCMivMI7f7Q6i24FcYAg812XUEYJFZtaXp_8'
];

const ol = document.createElement('ol');
for(const image of images) {
    const li = document.createElement('li');
    const imageTag = document.createElement('img');
    ol.appendChild(li);
    li.appendChild(imageTag);


    imageTag.setAttribute('alt', 'random image');
    imageTag.src = image;
}

document.body.appendChild(ol);