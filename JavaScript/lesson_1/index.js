// console.log("HELLO!");

// alert('Hello, world!');

// var name = prompt('Your name');
// var age = prompt('Your age');
//
// var phrase = 'Hello, my name is ' + name + '.' + ' I am ' + age+ '.';
// alert(phrase);

// var a = prompt('Number 1: ');
// var b = prompt('Number 2: ');
// var sum = Number(a) + Number(b);
// var sum = +a + +b;
// var sum = parseInt(a) + parseInt(b);
// var sum = parseFloat(a) + parseFloat(b);

// parseInt('100kg')
// console.log(sum);
//*********************************
// var yourAge = Number(prompt('Age'));
// console.log(yourAge, typeof yourAge);
// if (yourAge) {
//     if (yourAge >= 18) {
//         console.log('Welcome');
//     } else {
//         console.log('Bye!');
//     }
// } else {
//     console.log('Invalid value!');
// }

// console.log(yourAge >= 18 ? 'Welcome' : 'Bye');
// else
// {
//     console.log('Invalid value!')
// }


// //***********************
// var role = 'ADMIN';
//
// if (role === 'ADMIN') {
//     console.log('Hello Admin');
// } else if (role === 'MODERATOR') {
//     console.log('Hi, moder!');
// } else {
//     console.log('Welcome user!');
// }
// //*************************

///1$$$$$$$$$$$$
// var a = 10, b = -5, c;
//
// console.log('a =', a, 'b =', b);
//
// c = a;
// a = b;
// b = c;
//
// console.log('a =', a, 'b =', b);

//2$$$$$$$$$$$$
// if (a > b) {
//     c = a;
// } else {
//     c = b;
// }

// c = a > b ? a : b;
// console.log('max c =', c);

///3$$$$$$$$$$$$
// var x = -100;

// var b = a < 0 ? -(a) : a;
// if (x < 0) {
// x = x * (-1);}
// console.log(x);

///4$$$$$$$$$$$$$$$$$
// var x = -1, z = 3.6;
// var y = x*x + 3*z*x + 0.5*z*z + 12/17;
// console.log(y);


// var age = +prompt('Enter Age');
// var status = confirm('You age is ' + age);
// if (status) {
//     age > 18 ? console.log('Welcome!') : console.error('Bye!');
// } else {
//     alert('Bye');
// }


///Попросить ввести любое целое число.
// Если оно окажется больше нуля, вывести сообщение «Положительное
// число», если меньше нуля – «Отрицательное число», если равно нулю –
// «Ровно ноль!». Если введено вообще не число, вывести сообщение об
// ошибке.

///$$$$$$$$$$$$$$$$$$$$$$$
// var enterNumber = +prompt('Enter number');
// if (Number(enterNumber) || enterNumber===0) {
//     if (enterNumber === 0) {
//         console.log('Ровно нуль!')
//     } else if (enterNumber > 0) {
//         console.log('Положительное число');
//     } else {
//         console.log('Отрицательное число');
//     }
// } else {
//     console.error('Вы ввели не число');
// }

///$$$$$$$$$$$$$$$$$$$$

var mark = +prompt('Оцените фильм по 5-тибальной шкале');
if (Number(mark)){
    if (mark >=1 && mark <=5 )
        {
        if (mark===1){console.log('Это было отвратительно');}
        if (mark===2){console.log('Ужасно');}
        if (mark===3){console.log('Ну так... на «троечку»');}
        if (mark===4){console.log('Хороший фильм');}
        if (mark===5){console.log('Это шедевр!');}
    }else {console.error('Непонятно');}

}else {console.error('Вы точно ввели число?');}