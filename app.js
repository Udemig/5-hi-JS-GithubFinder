import Github from './github.js';
import UI from './ui.js';

// github ve ui class larının bir örneğini oluşturma
const github = new Github();
const ui = new UI();

// htmlden alınanlar
const searchUser = document.getElementById('search-user');
const searchButton = document.getElementById('search-button');

// eğer ara butonuna tıklanırsa
searchButton.addEventListener('click', getInput);
// eğer enter tuşuna  tıklanırsa
searchUser.addEventListener('keypress', (e) => {
  if (e.code === 'Enter') {
    getInput();
  }
});

function getInput() {
  // eğer inputun içi doluysa api isteği at
  if (searchUser.value !== '') {
    github.getUser(searchUser.value).then((data) => {
      // eğer gelen verideki mesaj 'Not Found' ise
      if (data.profile.message === 'Not Found') {
        // hata mesajı göster
        ui.showAlert('Aradığınız Kullanıcı Bulunamadı', 'alert alert-danger');
      } else {
        ui.showAlert('Kullanıcı başarıyla bulundu', 'alert alert-success');
        // kullanıcıyı göster
        ui.showProfile(data.profile);
        // projelerini göster
        ui.showRepos(data.repos);
      }
    });
  } else {
    // eğer input boşsa uyarı ver
    ui.showAlert('Form alanı boş olamaz', 'alert alert-info');
    ui.clearProfile();
  }

  searchUser.value = '';
}

// tema
const themeBtn = document.getElementById('theme');

themeBtn.addEventListener('click', changeTheme);

function changeTheme() {
  const body = document.querySelector('body');
  body.classList.toggle('bg-dark');
  body.classList.toggle('text-bg-dark');

  if (body.classList.contains('bg-dark')) {
    themeBtn.innerText = 'Açık Mod';
  } else {
    themeBtn.innerText = 'Koyu Mod';
  }
}
