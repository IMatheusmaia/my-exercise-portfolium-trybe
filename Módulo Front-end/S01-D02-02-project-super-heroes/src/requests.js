const BASE_URL = 'https://akabab.github.io/superhero-api/api';

function requestHeroById() {
  const randomId = Math.floor((Math.random() * 100) + 1);
  return fetch(`${BASE_URL}/id/${randomId}.json`)
    .then((response) => response.json());
}

export default requestHeroById;
