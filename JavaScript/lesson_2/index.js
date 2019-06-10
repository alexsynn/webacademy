//DRY
// var mark = prompt('Оцените фильм по 5-тибальной шкале', 'Enter mark');
// console.time();
// switch(mark){
//     case '1':console.log('Это было отвратительно');
//     break;
//     case '2':console.log('Ужасно');
//     break;
//     case '3':console.log('Ну так... на «троечку»');
//     break;
//     case '4':console.log('Хороший фильм');
//         break;
//     case '5':console.log('Это шедевр!');
//         break;
//     default: console.log('Error');
// }
// console.timeEnd();
// if (mark ==='1' || 'E') {
//     console.log('Это было отвратительно');
// }else if.......
// var GLOBAL = 'GLOBAL';
// function fn() {
//     var GLOBAL = 'GLOBAL FN'
// }
// function sum(x, y) {
//     console.log(GLOBAL);
//     console.log(x + y);
//     // console.log('1');
//     // console.log('2');
//     // console.log('3');
// }
//
// function mul(x, y) {
//     console.log(x * y);
// }
//
// mul(5, 5);
// mul(1, 10);
//
// sum(2, 5);
// sum(100, 200);


// function sum(x, y) {
//     // var res = x + y;
//     return x + y;
//     // return res;
// }
//
// var res = sum(5, 2);
//
// console.log('>>', res);


// var sum = function(x, y) {
// //        return x + y;
// // }
// //
// // console.log('>>', sum(4, 5));


//%%%%%%%%%%%%%%%%%%%%%5

// function rateFilm(movieTitle) {
//     var quastion = 'Поставьте оценку фильму ' + movieTitle;
//     var rate = parseInt(prompt(quastion));
//     if (rate >=1 && rate <=5) {
//         var message = 'Вы оценили фильм ' + movieTitle  + ' на ' + rate;
//         console.log(message);
//     }else {
//         console.error('Оценка не корректна');
//     }
// }
//
// rateFilm('Gladiator');
// rateFilm('GoT');
// rateFilm('Friends');

// function printName() {
//     var user;
//     var name;
//
//     name = 'Maks';
//     user = name;
//
//     document.write('<h1>' + user + '</h1>');
// }
//
//
// function aboutPlanet() {
//     var days = 365;
//     var namePlanet = "Земля";
//     var sitizen = '7 млдр человік';
//     var nameStar = 'Сонце';
//
//     document.write('<h1>' + 'Ми живемо на планеті ' + namePlanet + ', вона робить один оборот навколо ' +
//         nameStar + ' за ' + days + ' днів . Населення нашої планети становить приблизно ' + sitizen + '.' + '</h1>')
// }
//
// aboutPlanet();
// aboutPlanet();
//
// function writeText() {
//     var var33 = 33;
//     document.write(var33);
//     document.write('<br>');
//
//     var str1 = 'Hello, world!';
//     document.write(str1);
//
//     document.write('<br>');
//     var vaR = 288;
//     document.write(vaR);
// }
//
// writeText();
//
// function expressionFirst(x, y) {
//     var res = (72*y + 22*x)/4 + 232;
//     return res;
// }
//
// function expressionSecond(x, y) {
//  var res = (100*y/2 + 5*(x/5) - 55) * 6;
//  return res;
// }
//
// document.write('<br>');
// document.write('expressionFirst >> ' + expressionFirst(3, 20));
// document.write('<br>');
// document.write('expressionSecond >> ' + expressionSecond(16, 20));
// duocument.write('<br>');

// function sleep() {
//     var sleepHouers = prompt('Скільки сьогодні спали?');
//     alert('Та ви щасливчик, спали аж ' + sleepHouers + ' годин');
// }
//
// sleep();

// function mathExpression() {
//     var x = 6, y = 15, z = 4;
//     x += y - x++ * z;
//     z = --x - y * 5;
//     y /= x + 5 % z;
//     z = x++ + y * 5;
//     x = y - x++ * z;
//     console.log('x>> ' + x + '   y>> ' + y + '  z>> ' + z);
// }
//
// mathExpression();
//
//
// function everage(a, b, c) {
//     return Math.round((a + b + c) / 3);
// }
//
// console.log(everage(3, 4, 5));
//
//
// function square(r, h) {
//     var v = Math.PI * Math.pow(r, 2) * h;
//     var s = 2 * Math.PI * r * (r + h);
//     console.log('V = ' + v + ' S = ' + s);
// }
//
// square(Number(prompt()), Number(prompt()));
// Задание 1. Оцифровка   https://codepen.io/anon/pen/LoELwq
// Напишите функцию wordToNumber, которая преобразует слова – названия
// чисел от «one» до «five» - в числа. Используйте оператор switch-case. Если
// введено что-то другое, возвращайте NaN.


// function wordToNumber(num) {
//     if (num) {
//         switch (num) {
//             case 'one':
//                 alert('Your number is: 1');
//                 break;
//             case 'two':
//                 alert('Your number is: 2');
//                 break;
//             case 'three':
//                 alert('Your number is: 3');
//                 break;
//             case 'four':
//                 alert('Your number is: 4');
//                 break;
//             case 'five':
//                 alert('Your number is: 5');
//                 break;
//             default :
//                 alert('NaN')
//         }
//
//     } else {
//         console.error('ERROR');
//     }
// }
// var n1 = prompt('Enter number in words from one to five');
// wordToNumber(n1);
// var n2 = prompt('Enter number in words from one to five');
// wordToNumber(n2);
// var n3 = prompt('Enter number in words from one to five');
// wordToNumber(n3);
//

/* Задание 2. 2. Оцифровка-2.Рефакторинг  https://codepen.io/anon/pen/joELqL
Используя результаты предыдущей задачи, упростите программу, чтобы не
повторять последовательность вызовов prompt => wordToNumber => alert 3
раза, а использовать вместо этого функцию. Т.е. вместо 3 вызовов prompt,
wordToNumber и alert, останется 3 вызова новой функции, которая в свою
очередь вызывает 3 эти команды*/

// function promptAndConvert() {
//     var enterNumber = prompt('Enter number in words from one to five');
//     if (enterNumber) {
//         switch (enterNumber) {
//             case 'one':
//                 alert('Your number is: 1');
//                 break;
//             case 'two':
//                 alert('Your number is: 2');
//                 break;
//             case 'three':
//                 alert('Your number is: 3');
//                 break;
//             case 'four':
//                 alert('Your number is: 4');
//                 break;
//             case 'five':
//                 alert('Your number is: 5');
//                 break;
//             default :
//                 alert('NaN')
//         }
//     }
//     // } else {
//     //     alert('Did you enter a number from one to five?')
// // }
// }
//
// promptAndConvert();
// promptAndConvert();
// promptAndConvert();


// 3. Среднееарифметическое https://codepen.io/anon/pen/byNrZa
// Напишите функцию mean(a, b), которая принимает два числа и возвращает
// среднее арифметическое

// function mean(a, b) {
// //     return (a + b)/2;
// // }
// //
// // console.log(mean(10, 30));
// // console.log(mean(10, 10));

/*4. Чёт или нечет https://codepen.io/anon/pen/OYPzMN
Напишите функцию isOdd(x), которая принимает число и возвращает true, если
оно нечётное, и false, если чётное.*/
// var a = 10, b = -5;
// // ...ваш код функции isOdd
// alert(isOdd(a)); // false
// alert(isOdd(b)); // true


// function isOdd(x) {
//
//     if (x % 2 === 0) {
//         return false;
//     } else {
//         return true;
//     }
// }
//
// var a = 10, b = -5;
// alert(isOdd(a)); // false
// alert(isOdd(b)); // true


/*5. Гипотенуза https://codepen.io/anon/pen/Ezaobr
Напишите функцию hypo(a, b), которая принимает два числа – длины двух
катетов прямоугольного треугольника, - и возвращает длину гипотенузы.*/

// function hypo(a, b) {
//     return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// }
//
// var a = 3, b = 4;
// var c = hypo(a, b); // 5
// var h = hypo(80, 60); // 100
//
// alert(c);
// alert(h);

/*Задание 6. Расстояние между точками  https://codepen.io/anon/pen/oRjJgd
 Напишите функцию distance(x1, y1, x2, y2), которая вычисляет расстояние между
 двумя точками в двумерной системе координат*/

// function distanceAB(a, b) {
//     var ab;
//     if (a >= 0 && b >= 0) {
//         ab = Math.abs(b - a);
//     } else if (a <= 0 && b <= 0) {
//         ab = Math.abs(Math.abs(a) - Math.abs(b));
//     } else if ((a >= 0 && b <= 0) || (a <= 0 && b >= 0)) {
//         ab = Math.abs(a) + Math.abs(b);
//     }
//     return ab;
// }
//
// function distance(x1, y1, x2, y2) {
//     var xx2 = Math.pow(distanceAB(x1, x2), 2);
//     var yy2 = Math.pow(distanceAB(y1, y2), 2);
//     var data = xx2 + yy2;
//     return Math.sqrt(data);
// }
//
// console.log(distanceAB(-2, -5));
// console.log(distance(0, 0, 1, 1)); // 1, 414...
// console.log(distance(3, 4, 0, 0));//5
// console.log(distance(0, 6, -8, 0));//10
// console.log(distance(3, 9, -5, 3));//10


/*Задание 7. Подобиетреугольников https://codepen.io/anon/pen/qGOLVM
Напишите функцию, которая принимает 6 аргументов: первые 3 - длины сторон
первого треугольника, и ещё 3 – длины сторон второго треугольника. Функция
должна возвращать истину, если треугольники подобны (т.е. отношение
соответствующих сторон постоянно)*/

// function checkSimilarity(a1, a2, a3, b1, b2, b3) {
//     console.log(a1 / b1 === a2 / b2 && a2 / b2 === a3 / b3);
//     return a1 / b1 === a2 / b2 && a2 / b2 === a3 / b3;
// }
//
// checkSimilarity(1,2,3,6,12,18); // true
// checkSimilarity(5, 5, 10, 8, 8, 16); // true
// checkSimilarity(3,6,4, 6,12,8); // true
// checkSimilarity(3,6,4, 6,12,9); // false


/*Задание 8. Угол  https://codepen.io/anon/pen/byEBLo
Написать функцию, которая по длине катета и гипотенузы определяет угол
между ними и возвращает значение в градусах.
*/

// function angle(a, h) {
//     return (Math.cos(a / h) * 180) / Math.PI;
// }
//
// console.log(angle(5, 10));

//function radToDeg (rad : Number) : Number
// 	{
// 		return (rad * 180) / Math.PI;
// 	}


/**Задание 9. https://codepen.io/anon/pen/VOePwm
Напишите функцию randomInt(min, max), которая возвращает случайное целое
 число число в диапазоне [min, max).*/

// function  randomInt(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

//
// //alert(randomInt(+prompt(), +prompt()));
// console.log(randomInt(5, 12));
// console.log(randomInt(5, 12));
// console.log(randomInt(5, 12));
// console.log(randomInt(5, 12));
// console.log(randomInt(5, 12));
// console.log(randomInt(5, 12));
// console.log(randomInt(5, 12));
// console.log(randomInt(5, 12));
// console.log(randomInt(5, 12));
// console.log(randomInt(5, 12));
// console.log(randomInt(5, 12));
// console.log(randomInt(5, 12));
// console.log(randomInt(5, 12));
// console.log(randomInt(5, 12));
// console.log(randomInt(5, 12));
// console.log(randomInt(5, 12));
// console.log(randomInt(5, 12));


/*Задание 10. Середина распределения https://codepen.io/anon/pen/YbwVRW
Напишите функцию, которая генерирует 3 случайных числа в диапазоне [-12, 8)
и возвращает их среднее арифметическое значение. Можно использовать
функцию randomInt из предыдущей задачи. Вопрос на засыпку: к какому
значению будет приближен результат, если среднее будет вычисляться не
из трёх случайных чисел, а из миллиона случайных чисел в этом диапазоне?
*/

// Думаю, что результат будет стремиться к нулю.
// function randomInt(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }
//
// function randomEverage(min, max) {
//     var x1 = randomInt(min, max);
//     var x2 = randomInt(min, max);
//     var x3 = randomInt(min, max);
//
//     return Math.round((x1 + x2 + x3) / 3);
// }
//
// console.log(randomEverage(-12, 8));
// console.log(randomEverage(-12, 8));
// console.log(randomEverage(-12, 8));
// console.log(randomEverage(-12, 8));
// console.log(randomEverage(-12, 8));
// console.log(randomEverage(-12, 8));
// console.log(randomEverage(-12, 8));
// console.log(randomEverage(-12, 8));
// console.log(randomEverage(-12, 8));
// console.log(randomEverage(-12, 8));
// console.log(randomEverage(-12, 8));
// console.log(randomEverage(-12, 8));
// console.log(randomEverage(-12, 8));

/*Задание 11. Функция https://codepen.io/anon/pen/byErVX
Запишите в виде функции f(x, y) следующее выражение:
Функция должна принимать 2 аргумента и возвращать результат
выражения
*/

function f(x, y) {
    var sin = Math.sin,
        sqrt = Math.sqrt,
        pow = Math.pow,
        exp = Math.exp,
        pi = Math.PI,
        abs = Math.abs,
        a1, a2, a3;
    a1 = (x + 2 * pi * sqrt(y)) / exp(x);
    a2 = abs(sin(pi * pow(x, y)) / (pi * pow(y, x)));
    a3 = 3 * (pow(x, 2) + 2 * x * y + pow(y, 2));
    return Math.round(a1 + a2 + a3);
}

console.log(f(2, 4));
console.log(f(1, 1));