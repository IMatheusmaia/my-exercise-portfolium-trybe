import Swal from 'sweetalert2';
import './style.css';

const renderPanel = (data) => {
  const title = document.querySelector('.coin-title');
  if (title) {
    title.remove();
  }
  const panel = document.querySelector('.panel');
  const coinpanel = document.querySelector('.coin-panel');
  coinpanel.innerHTML = '';
  const h3 = document.createElement('h3');
  h3.classList.add('coin-title');
  h3.innerText = `Valores referentes a 1 ${data.base}`;

  panel.appendChild(h3);
  const coins = Array.from(Object.entries(data.rates));
  coins.map((coin) => {
    return coinpanel.insertAdjacentHTML('beforeend', `<div class="mini-card">
    <div>
      <img src= "src/assets/coin-icon.svg">
      <span>${coin[0]}</span>
    </div>
    <span>${coin[1].toFixed(2)}</span>
    </div>`);
  });
};

const requestCoin = (coin) => {
  if (coin === '') {
    return Swal.fire({ icon: 'error',
      title: 'Atenção!',
      text: 'Você não digitou nenhuma moeda' });
  }
  fetch(`https://api.exchangerate.host/latest?base=${coin}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.base !== coin.toUpperCase()) {
        throw new Error('A moeda digitada não existe');
      } else {
        renderPanel(data);
      }
    })
    .catch((error) => {
      Swal.fire({ icon: 'error',
        title: 'Atenção!',
        text: error.message });
    });
};

document.querySelector('#search-button').addEventListener('click', (event) => {
  event.preventDefault();
  const input = document.querySelector('#input-coin');
  requestCoin(input.value);
});
