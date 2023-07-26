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
    .then((data) => fillUsersSelect(data.users))
    .catch((error) => fillErrorMessage(error));
};
requestUsers();

const requestCommentsPost = (posts) => {
  const principalPost = document.querySelector('#featured-post-title').innerHTML;
  posts.map((post) => {
    const { id, title } = post;
    if (title === principalPost) {
      fetch(`https://dummyjson.com/posts/${id}/comments`)
        .then((response) => response.json())
        .then((data) => fillFeaturedPostComments(data.comments))
        .catch((error) => fillErrorMessage(error));
    }
    return undefined;
  });
};

const requestPostById = (id) => {
  fetch(`https://dummyjson.com/posts/user/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const { posts } = data;
      fillPosts(posts);
      requestCommentsPost(posts);
    })
    .catch((error) => fillErrorMessage(error));
};

usersSelect.addEventListener('change', (event) => {
  clearPageData();
  requestPostById(event.target.value);
});
