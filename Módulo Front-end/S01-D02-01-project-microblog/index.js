import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';


const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';

const requestUsers = () => {
    fetch(USERS_API)
    .then((response) => response.json())
    .then((data) => {
      return fillUsersSelect(data.users);
    });
  }
  requestUsers();

usersSelect.addEventListener('change', () => {
  clearPageData();

  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
});
