(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.addEventListener('load', function() {
  login();
});

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

function cancel() {
  let login = document.querySelector('.login_box');
  let cover = document.querySelector('.cover');
  login.style.display = 'none';
  cover.style.display = 'none';
};

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
});
request.send();

function bold () {
  let number = 0;
  let tables = document.querySelector('#table_row_2')
  let fontWeight = 'font-weight';
  console.log(tables.cellIndex);
}

bold()

},{}]},{},[1]);
