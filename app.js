window.addEventListener('load', function () {
  login();
});

// popup login box
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

// removes popup login box
function cancel () {
  let login = document.querySelector('.login_box');
  let cover = document.querySelector('.cover');
  login.style.display = 'none';
  cover.style.display = 'none';
};

// switches between sidebar tabs
function tabSwitch (val) {
  let news = document.querySelector('.news_container');
  let archive = document.querySelector('.archive_container');
  if (val === 'archive') {
    news.style.display = 'none';
    archive.style.display = 'block';
    } else {
      news.style.display = 'block';
      archive.style.display = 'none';
    }
}

//highlights selected nav links
function highlight (val) {
  document.querySelector('.one').style.background = 'none';
  document.querySelector('.two').style.background = 'none';
  document.querySelector('.three').style.background = 'none';
  document.querySelector('.four').style.background = 'none';
  document.querySelector('.five').style.background = 'none';

  let value = document.querySelector('.' + val);
  value.style.background = '#296896';
}


let request = new XMLHttpRequest();
request.open('GET', 'code-test.json');
request.addEventListener('load', function() {
  let response = JSON.parse(request.responseText);
  console.log(response);

  for (let i = 0; i < response.length; i++) {
    document.querySelector('#name' + i).innerHTML = response[i].name;
    document.querySelector('#apy' + i).innerHTML = response[i].apy + '%';
    document.querySelector('#earnings' + i).innerHTML = '$' + response[i].earnings.toFixed(2);
  };

});
request.send();
