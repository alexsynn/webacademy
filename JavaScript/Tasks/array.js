//1. Пароль Написать функцию, которая принимает в качестве аргументов строку и две
// анонимные функции. Она просит пользователя ввести пароль. Если введён
// // верный пароль, равный переданной строке, выполняется первая функция,
// //     иначе – вторая. https://codepen.io/anon/pen/YbQvWy

// function checkPassword(string, funcOk, funcNotOk) {
//
//     var password = 'ADMIN';
//     if (string === password) {
//         funcOk(true);
//     } else funcNotOk(false);
// }
//
// function ok(status) {
//     console.log('Status: ', status,
//         'Вы ввели верный пароль! Добро пожаловать!');
// }
//
// function notOk(status) {
//     console.error('Status: ', status,
//         'Вы ввели неверный пароль!');
// }
//
//
// checkPassword(prompt('Enter password'), ok, notOk);


//--------------------------------------------

//2. Деление нацело https://codepen.io/anon/pen/XwgYKo
// Напишите функцию canDivide(a, b), которая принимает два числа и возвращает
// true, если a делится нацело на b, или false – в противномслучае.
// alert(canDivide(9, 3)); // true
// alert(canDivide(5, 2)); // false
// alert(canDivide(10000, 5)); // true
// alert(canDivide(101, 22)); // false

// function canDivide(a, b) {
//     return a % b === 0;
// }
//
// console.log(canDivide(9, 3)); // true
// console.log(canDivide(5, 2)); // false
// console.log(canDivide(10000, 5)); // true
// console.log(canDivide(101, 22)); // false

//--------------------------------------------

//3. Сумма прогрессии https://codepen.io/anon/pen/QRgxKa
// Напишите функцию, которая принимает на входе число N и вычисляет сумму
// всех чисел от 1 до N. Реализуйте 3 варианта функции (с 3 разными
// названиями) и сравните скорость их работы на очень больших числах:
// - Используя рекурсию
// - Используя цикл

// function sumRec(n) {
//     if (n === 1) return 1;
//     return n + sumRec(n - 1);
// }
//
// function sumCircle(n) {
//     var sum = 0;
//     for (var i = 0; i <= n; i++) {
//         sum += i;
//     }
//
//     return sum;
// }
//
// function sumArithmeticProgress(n) {
//     return ((1 + n) / 2) * n;
// }
//
// sumCircle(5);
// sumRec(5);
// sumArithmeticProgress(5);
//
// console.log(
//     sumCircle(5),
//     sumRec(5),
//     sumArithmeticProgress(5));


//---------------------------------------------

//4. Фибоначчи https://codepen.io/anon/pen/rgwKWo
// Напишите функцию, которая принимает параметр N и выводит в консоль N
// первых чисел из последовательности Фибоначчи. Реализуйте два варианта
// функции:
// - Используя рекурсию
// - Используя цикл
// fibonacci(2); // 1, 1 (2 строки в консоли)
// Fibonacci(8); // 1, 1, 2, 3, 5, 8, 13, 21 (8 строк в консоли)

// function fibRec(n) {
//     if (n < 2) {
//         return n;
//     } else {
//         return fibRec(n - 1) + fibRec(n - 2);
//     }
// }
//
// function fibResult(n) {
//     for (var i = 1; i <= n; i++) {
//         console.log('fibRec>>>', fibRec(i));
//     }
// }
//
// function fibCircle(n) {
//     var a = 0, b = 1, c;
//     console.log('fibCircle >>', 1);
//     for (var i = 1; i < n; i++) {
//         c = a + b;
//         a = b;
//         b = c;
//         console.log('fibCircle >>', c);
//     }
// }
//
// fibResult(8);
// fibCircle(8);

//-----------------------------------------------------

//5. Оцифровка-3 https://codepen.io/anon/pen/EzXRbB
// Вернёмся к задаче «Оцифровка 2» из предыдущей лекции (если вы всё ещё
// не выполнили её – придётся).
// Усовершенствуйте программу так, чтобы у пользователя запрашивались
// слова и выводились цифры бесконечно, до тех пор, пока не будет введено
// слово «exit».
//
// function promptNumber(param) {
//
//     switch (param) {
//         case 'one':
//             alert('Your number is: 1');
//             break;
//         case 'two':
//             alert('Your number is: 2');
//             break;
//         case 'three':
//             alert('Your number is: 3');
//             break;
//         case 'four':
//             alert('Your number is: 4');
//             break;
//         case 'five':
//             alert('Your number is: 5');
//             break;
//         default :
//             alert('NaN')
//     }
// }
//
// function promptAndConvert() {
//     var enterNumber = prompt('Enter number in words from one to five');
//     if (enterNumber && enterNumber !== 'exit') {
//         promptNumber(enterNumber);
//         promptAndConvert();
//     } else {
//         if (enterNumber && 'exit') {
//             alert('Пока....');
//         } else {
//             if (!enterNumber) {
//                 alert('Вы не ввели данные! Повторите ввод или нажмите exit для выхода.');
//                 promptAndConvert();
//             }
//         }
//     }
// }
//
// promptAndConvert();
// promptAndConvert();
// promptAndConvert();

// if (enterNumber !== 'exit') {
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
//     promptAndConvert();
// } else {
//     return false;
// }
// }
//
// promptAndConvert();
// promptAndConvert();
// promptAndConvert();

//------------------------------------------
//6.Поиск перебором
// https://codepen.io/anon/pen/byRRyb#anon-signup
// Дан массив items. Напишите функцию indexOf(x), которая возвращает индекс
// значения x в массиве. Если значение отсутствует, возвращайте -1. Само собой,
// не используйте метод массива indexOf.

// indexOf(“apple”); // 0
// indexOf(“pear”); // 2
// indexOf(“something”); // -1

// function indexOffunc(x, arr) {
// //     var result = -1;
// //     for (var i = 0; i < arr.length; i++) {
// //         if (x === arr[i]) {
// //             result = i;
// //         }
// //     }
// //     return result;
// // }
// //
// // var items = ['apple', 'orange', 'pear'];
// // console.log(indexOffunc('apple', items));//0
// // console.log(indexOffunc('pear', items));//2
// // console.log(indexOffunc('something', items));//-1

//-----------------------------------------------------
//7. Бесконечный ввод https://codepen.io/anon/pen/GaEvrV
// В цикле просить пользователя ввести что-нибудь, пока он не введёт “exit”.
// Сохранять каждое введённое значение в массив. В конце – пройтись по
// полученному массиву и вывести каждое значение с помощью alert.

// function enterSomthing() {
// // // //     var array = [];
// // // //     //var result;
// // // //     var enter = prompt('Для выхода из программы нажмите exit');
// // // //     while (enter !== 'exit') {
// // // //       array.push(enter);
// // // //       enter = prompt('Для выхода из программы нажмите exit');
// // // //     }
// // // //
// // // //     if (array) {
// // // //         for (var i = 0; i < array.length; i++) {
// // // //             console.log('array[', i, '] = ', array[i]);
// // // //         }
// // // //     } else {console.log('Massive is empty')}
// // // // }
// // // //
// // // // enterSomthing();

//----------------------------------------------------

// 8. Замена в массиве https://codepen.io/anon/pen/GaEMpq
// Дан массив items. Напишите функцию replace(x, y), которая принимает два
// параметра, проходит по массиву и заменяет все элементы, равные x, на y.
//     var items = [3, 6, 0, 9, -1, 0, 0, 12, 0];
// replace(0, 99);
// alert(items); // 3,6,99,9,-1,99,99,12,99

// function replace(x, y) {
//
//     for (var i = 0; i < items.length; i++) {
//         if (items[i] === x) {
//             items[i] = y;
//         }
//     }
// }
//
// var items = [3, 6, 0, 9, -1, 0, 0, 12, 0];
// replace(0, 99);
// console.log(items); // 3,6,99,9,-1,99,99,12,99
//--------------------------------------------------

//9. Количество чётных https://codepen.io/anon/pen/LoLzWE?editors=1111
// Дан массив чисел numbers. Подсчитайте количество чётных элементов в нём
// (т.е. ваш код должен подсчитать кол-во чётных элементов и вывести его на
// экран или в консоль).

// var numbers = [3, 6, 0, 9, -1, 0, 0, 12, 0];
//
// function foundEven() {
//     var  count = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         if (numbers[i]%2 === 0 && numbers[i] !== 0) {
//             count++;
//             console.log(numbers[i]);
//         }
//     }console.log('Even = ', count);
// }
// foundEven();

//-----------------------------------------------------
//10. Поиск максимума https://codepen.io/anon/pen/NVgavy?editors=1111
// Дан массив чисел numbers. Найдите максимальное число в массиве, используя
// цикл.

// function max() {
//
//   var max = numbers[0];
//   for (var i = 1; i < numbers.length; i++){
//       if (max <= numbers[i]){
//           max = numbers[i];
//       }
//   }return max;
// }
//
// var numbers = [3, 6, 0, 9, -1, 0, 0, 12, 0];
// console.log(max());

//-------------------------------------------
//11. Среднее арифметическое https://codepen.io/anon/pen/byRovL?editors=1111
// Дан массив чисел numbers. Найдите среднее арифметическое значение чисел в
// массиве, используя цикл.

// function everage() {
// // //     sum = 0;
// // //     for (var i = 0; i < numbers.length; i++) {
// // //         sum += numbers[i];
// // //     }
// // //     return Math.round(sum/numbers.length);
// // // }
// // //
// // //
// // // var numbers = [15, 10, 10, 10, 15, 10, 10, 10, 20];
// // //
// // // console.log('Everage', everage());
//-----------------------------------------------------------------

//12. Отрицательные и положительные https://codepen.io/anon/pen/XwgYdo
// Дан массив чисел numbers. Подсчитайте количество положительных чисел,
// отрицательных чисел и нулей в массиве. Запишите эти значения в 3 отдельные
// переменные. Например:
// var items = [3, 6, 0, 9, -1, 0, 0, 12, 0];
// var nPos = 0, nNeg = 0, nZero = 0;
// // ...ваш код, который записывает кол-во положительных чисел в nPos,
// // кол-во отрицательных – в nNeg, и кол-во нулей – в nZero
// alert(nPos); // 4
// alert(nNeg); // 1
// alert(nZero); // 4

// var numbers = [3, 6, 0, 9, -1, 0, 0, 12, 0];
//
// function countNumbers() {
//     var nPos = 0, nNeg = 0, nZero = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         if (numbers[i] > 0) {
//             nPos++;
//         } else {
//             if (numbers[i] < 0) {
//                 nNeg++;
//             } else {
//                 if (numbers[i] === 0) {
//                     nZero++;
//                 }
//             }
//         }
//     }
//     return {
//         pos: nPos,
//         neg: nNeg,
//         zero: nZero
//     }
// }
//
// var result = countNumbers();
// console.log('Pos = ', result.pos);
// console.log('Neg = ', result.neg);
// console.log('Zero = ', result.zero);