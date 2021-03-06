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

// rearranges json, puts 'urbank' at index 0
function sortResponse(arr) {
  let sorted = [];
  arr.map((item, index) => {
    if (item.name.match(/urbank/i)) {
      sorted.push(item);
      arr.splice(index, 1);
      arr.map(x => sorted.push(x));
    }
  })
  return sorted;
}

// gets json and creates a <table>
let request = new XMLHttpRequest();
request.open('GET', 'code-test.json');
request.addEventListener('load', () => {
  let response = JSON.parse(request.responseText);
  let table = document.querySelector('#table_row_2');
  let arr = sortResponse(response);

  arr.map(list => {
    let row = document.createElement('tr');
    let call = [`${list.name}`, `${list.apy}%`, `$${list.earnings.toFixed(2)}`];

    call.map(item => {
      let cell = document.createElement('td');
      cell.append(item);
      row.append(cell);
    })
    table.append(row);
  })
  bold();
  login();
});
request.send();

//bold font for first data row
function bold() {
  let tables = document.querySelector('#table_row_2').getElementsByTagName('tr')
  let fontWeight = 'font-weight';
  tables[1].style.fontWeight = 'bold';

  for (let i = 1; i < tables.length; i++) {
    let cell = tables[i].getElementsByTagName('td');

    for (let j = 1; j < cell.length; j++) {
      let textAlign = 'text-align';
      cell[j].style.textAlign = 'right';
      console.log(cell)
    }
  }
}
