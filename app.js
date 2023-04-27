import Github from './github.js';

const github = new Github();

console.log(github);

// htmlden alınanlar
const searchUser = document.getElementById('search-user');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', getInput);

function getInput() {
  // eğer inputun içi doluysa api isteği at
  if (searchUser.value !== '') {
    github
      .getUser(searchUser.value)
      .then((data) => console.log('USER> ', data));
  } else {
    alert('Form boş olamaz');
    // eğer input boşsa uyarı ver
  }
}
