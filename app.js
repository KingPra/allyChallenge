console.log('well hello there');
window.addEventListener('load', function () {
  login();
  cancel();
});

function login () {
  let login = document.querySelector('.login_box');
  let cover = document.querySelector('.cover');
  if (login.style.display === 'none') {
    login.style.display = 'block';
    cover.style.display = 'block'
  } else {
    login.style.display = 'none';
    cover.style.display = 'none';
  }
};

  function cancel () {
    let login = document.querySelector('.login_box');
    let cover = document.querySelector('.cover');
    login.style.display = 'none';
    cover.style.display = 'none';
  };
