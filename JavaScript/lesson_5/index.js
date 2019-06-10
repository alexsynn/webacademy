//1
// function askPassword(str, successFn, errorFn) {
//     var correctPassword = '13';
//     str === correctPassword ? successFn() : errorFn();
// }
//
// askPassword('55', function () {
//     console.log('success');
// }, function () {
//     console.log('error');
// });

//--------------------------------

//1 1 2 3 5 8 13 21

// function fibonacci(n) {
//
//     var res = [1, 1];
//     if (n < res.length) {
//         return n === 0 ? [] : res.slice(n);
//     }
//
//     for (var i = 2; i < n; i++) {
//         res.push(res[i - 1] + res[i - 2]);
//
//     }
//     return res;
// }
//
// console.log(fibonacci(8));
//---------------------
//
// function fibonacci(n, i, result) {
//
//     if (!result) {
//         result = [1, 1];
//     }
//
//     if (n <= result.length) {
//         return result.slice(n);
//     }
//
//     if (n === result.length) {
//         return result;
//     }
//
//     if (!i) {
//         i = 2;
//     }
//
//     result.push(result[i - 1] + result[i - 2]);
//     return fibonacci(n, ++i, result);
// }
// console.log(fibonacci(8, 0));
//
// var el = document.ElementById('app');
// document.
// document.getElementsByName();
// document.getElementsByName();
// document.getElementsByTagName()
// var el  = document.querySelector('html > body > #app');
// var el  = document.querySelectorAll('div');
// console.dir(el);
// el.style.color = 'red';
// console.dir(el);

//------------------------------------

// function createCounter(element, initialValue) {
//
// if (!initialValue) {
//     initialValue = 0;
// }
// var decreaseButton = element.children[0],
//     valueHTML = element.children[1],
//     increaseButton = element.children[2];
//
// valueHTML.innerText = initialValue;
// decreaseButton.onclick = function () {
//     var val = parseInt(valueHTML.innerText);
//     valueHTML.innerText = val - 1;
// }
//
//     increaseButton.onclick = function () {
//         var val = parseInt(valueHTML.innerText);
//         valueHTML.innerText = val + 1;
//     }
// }
//
// var c = document.getElementById('counter');
// createCounter(c, 100);
//------------------------------------------

// function createCounter(element, initialValue) {
//
//
//     var decreaseButton = element.querySelector('.decrease'),
//         valueHTML = element.querySelector('.value'),
//         increaseButton = element.querySelector('.increase');
//
//
//     if (!initialValue) {
//         var valueFromEl = parseFloat(valueHTML.innerText);
//         if (isNaN(valueFromEl)) {
//             initialValue = 0;
//         } else {
//             initialValue = valueFromEl;
//         }
//     }
//
//     var value = initialValue;
//     valueHTML.innerText = value;
//
//     decreaseButton.onclick = function () {
//         var val = parseInt(valueHTML.innerText);
//         valueHTML.innerText = --value;
//     }
//
//
//     increaseButton.onclick = function () {
//         var val = parseInt(valueHTML.innerText);
//         valueHTML.innerText = ++value;
//     }
// }

// var c = document.getElementById('counter');
// createCounter(c, 100);
//
// createCounter()

// function initCounters(elements) {
//     for (var i = 0; i < elements.length; i++) {
//         createCounter(elements[i]);
//     }
// }
//
// var counters = document.querySelectorAll('.counter-js');
// initCounters(counters);

//---------------------------------------
function createCounter(settings) {
    var span = document.createElement('span');
    var increaseBtn = document.createElement('button');
    var decreaseBtn = document.createElement('button');
    var value = settings.initialValue || 0;

    increaseBtn.innerText = settings.increaseButtonText;
    decreaseBtn.innerText = settings.increaseButtonText;
    span.innerText = value;

    increaseBtn.onclick = function () {
        span.innerText = ++value;
    }

    decreaseBtn.onclick = function () {
        span.innerText = --value;
    }
    var container = document.createElement('div');
    container.appendChild(decreaseBtn);
    container.appendChild(span);
    container.appendChild(increaseBtn);

return container;
}

var counter = createCounter({
    increaseButtonText: '+',
    decreaseButtonText: '-',
    initialValue: 0
});

document.body.appendChild(counter);