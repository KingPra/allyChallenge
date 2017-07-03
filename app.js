window.addEventListener('load', function() {
  login();
});

// popup login box
function login() {
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
function cancel() {
  let login = document.querySelector('.login_box');
  let cover = document.querySelector('.cover');
  login.style.display = 'none';
  cover.style.display = 'none';
};

// switches between sidebar tabs
function tabSwitch(val) {
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
function highlight(val) {
  document.querySelector('.one').style.background = 'none';
  document.querySelector('.two').style.background = 'none';
  document.querySelector('.three').style.background = 'none';
  document.querySelector('.four').style.background = 'none';
  document.querySelector('.five').style.background = 'none';

  let value = document.querySelector('.' + val);
  value.style.background = '#296896';
}


function sortResponse(arr) {
  let sorted = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name.match(/urbank/i)) {
      sorted.push(arr[i]);
      arr.splice(i, 1);
      arr.map(x => sorted.push(x));
    }
  }
  return sorted;
}



let request = new XMLHttpRequest();
request.open('GET', 'code-test.json');

request.addEventListener('load', () => {
  let response = JSON.parse(request.responseText);

  let table = document.querySelector('#table_row_2');
  let arr = sortResponse(response);

  for (let i = 0; i < arr.length; i++) {
    let row = document.createElement('tr');

    for (let j = 0; j < 3; j++) {
      let call = [`${arr[i].name}`, `${arr[i].apy}%`, `$ ${arr[i].earnings.toFixed(2)}`];

      let cell = document.createElement('td');
      let cellText = call[j];
      cell.append(cellText);
      row.append(cell);
    }
    table.append(row);
  }
});
request.send();

//bold letters for first data row
function bold () {
  let number = 0;
  let tables = document.querySelector('#table_row_2').rows
  let fontWeight = 'font-weight';
  console.log(tables);
  //tables.style.fontWeight = 'bold';
}

bold()
