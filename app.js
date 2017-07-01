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

  //highlights selected nav Anchors
  function highlight (val) {
    document.querySelector('.one').style.background = 'none';
    document.querySelector('.two').style.background = 'none';
    document.querySelector('.three').style.background = 'none';
    document.querySelector('.four').style.background = 'none';
    document.querySelector('.five').style.background = 'none';
    let value = document.querySelector('.' + val);
    value.style.background = '#296896';
  }

fetch('code-test.json').then(function(response) {
  return response.json();
}).then(function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let cellName = document.querySelector('#name' + i).innerHTML = arr[i].name;
    document.querySelector('#apy' + i).innerHTML = arr[i].apy + '%';
    document.querySelector('#earnings' + i).innerHTML = '$' + arr[i].earnings.toFixed(2);

    // had issues with separating cells when dynamically building table rows.

    // let table = document.querySelector('#table_row');
    // let tblbody = document.createElement('tbody');
    // let row = document.createElement('tr');
    // let cell = document.createElement('td');
    // let data = document.createTextNode(arr[i].name);
    // let apy = document.createTextNode(arr[i].apy);
    // let earnings = document.createTextNode(arr[i].earnings);
    // console.log(`data: ${data}`)
    // cell.appendChild(data);
    // cell.appendChild(apy);
    // cell.appendChild(earnings);
    // row.appendChild(cell);
    // tblbody.appendChild(row);
    // table.appendChild(tblbody);
  }
});
