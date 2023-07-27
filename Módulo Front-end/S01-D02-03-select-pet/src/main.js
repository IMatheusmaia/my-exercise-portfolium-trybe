import './style.css';

const renderImage = (address) => {
  const img = document.querySelector('#image-random');
  img.src = address;
  return img;
};

const requestDogs = () => {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => renderImage(data.message));
};

const requestCats = () => {
  return fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((data) => renderImage(data[0].url));
};

document.querySelector('#dog-btn').addEventListener('click', () => {
  requestDogs();
});

document.querySelector('#cat-btn').addEventListener('click', () => {
  requestCats();
});

document.querySelector('#surprise-btn').addEventListener('click', () => {
  Promise.any([requestDogs(), requestCats()])
    .then((response) => renderImage(response));
});
