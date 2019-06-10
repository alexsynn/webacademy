var url = 'http://api.icndb.com/jokes/random';
// var jokeHTML = document.querySelector('#joke');
//
// function getJoke() {
//
//     jokeHTML.innerHTML = 'Loading...';
//     var request = new XMLHttpRequest();
//     request.open('GET', url);
//     request.send();
//     request.addEventListener('load', function () {
//
//         var data = JSON.parse(request.response);
//
//         jokeHTML.innerHTML = data.value.joke;
//         //console.log(data);
//         //console.log(typeof request.response);
//     });
// }

//request.open('GET', url, false);
//console.log(request.response);

// function fetchJoke() {
//         jokeHTML.innerHTML = 'Loading...';
//
//     fetch(url)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             jokeHTML.innerHTML = data.value.joke;
//         })
//         .catch(function () {
//             jokeHTML.innerHTML = 'Error';
//         });
// }
// //--------------
// // document.getElementById('update-joke')
// //     .addEventListener('click', getJoke);
// // getJoke();
// //-----------------
// document.getElementById('update-joke')
//     .addEventListener('click', fetchJoke);
// fetchJoke();
//------------------------
var elements = $('div');

//console.log(elements);
elements.css({
    color: 'red'
});

elements.on('click', function (e) {
    console.log(e.target);
})

elements.addClass('active');
$.get(url, function (data) {
    $('div:eq(0)').html(data.value.joke);
});

var h1 = $('<h1>Header</h1>');
$(document.body.prepend());

// $('div:eq(3)').

