import Swal from 'sweetalert2';
import requestHeroById from './requests';
import './style.css';

const renderHero = (data) => {
  const img = document.querySelector('#hero-image');
  const heroName = document.querySelector('#hero-name');
  img.src = `${data.images.lg}`;
  img.alt = 'Any image of a Super Hero';
  heroName.innerHTML = `${data.name}`;
};

document.querySelector('#randomize').addEventListener('click', () => {
  requestHeroById()
    .then((data) => renderHero(data))
    .catch((error) => Swal.fire({
      icon: 'error',
      title: 'Oops..',
      text: error.message,
    }));
});
