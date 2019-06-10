//1. Дата вформате
// Вывести в сообщении текущие дату (день, месяц, год) и время (часы, минуты и секунды) в
// вашем собственном формате.

// function getDate() {
//     let dateCurrent = new Date();
//     let getCurrentDate = dateCurrent.toLocaleDateString();
//     console.log(getCurrentDate);
//     console.log(dateCurrent.getHours(), 'hr');
//     console.log(dateCurrent.getMinutes(), 'm');
//     console.log(dateCurrent.getSeconds(), 'sec');
// }
// getDate();
///--------------------------
// 2. День тижня
// Вывести в сообщении название текущего дня недели на украинском языке.
//     Примечание: метод getDay() объекта даты возвращает день недели как значение от 0
// (воскресенье) до 6 (суббота), а нужно вывеси название дня строкой.

// let days = {
//     0: 'Неділя',
//     1: 'Понеділок',
//     2: 'Вівторок',
//     3: 'Середа',
//     4: 'Четвер',
//     5: "П'ятниця",
//     6: 'Субота'
// };
//
// function getDay() {
//     let dateCurrent = new Date();
//     let day = dateCurrent.getDay();
//     console.log('Сьогодні:', days[day]);
//     }
//    getDay();
//-----------------------------
//3. Время истекло
// Попросите пользователя ввести количество секунд, и выведите сообщение «время истекло»
// через данное время.

// let timeIsOver = () =>  {
// let enterSec = parseInt(prompt('Enter sec', 'seconds'));
//
// setTimeout(() => { alert('Time is over...bye')}, enterSec * 1000);
// };
//
// timeIsOver();
//------------------------------------------
//4.Часы
// Выведите на странице (в DOM, а не alert) текущее время в удобном для вас формате, и
// обновляйте его каждую секунду.

// let updateTime = () => {
//
//     let body = document.body;
//     let div = document.createElement('div');
//     body.appendChild(div);
//     div.setAttribute("id", 'date');
//
//     let currentDate = new Date();
//     let currentTime = currentDate.toLocaleDateString() + '  '
//         + currentDate.getMinutes() + '  '
//         + currentDate.getSeconds() + '   '
//         + currentDate.getMilliseconds();
//     document.getElementById('date').innerText = currentTime;
// }
//
// updateTime();
// setInterval(updateTime, 1000);
//------------------------------------

//5.Бенчмаркинг
//Определить, сколько времени (в миллисекундах) выполняется пустой цикл на
// 1 миллион итераций и вывести это значение в сообщении. А на 100
// миллионов? А на 1 миллиард?

// let benchMarking = (iteration) => {
//     let startTime = new Date();
//     for (let i = 0; i <= iteration; i++) {
//     }
//     let endTime = new Date();
//
//     console.log(iteration, 'Время выполнения: ',
//         (endTime - startTime) / 1000 / 60, 'секунд');
// }
//
// benchMarking(1000000);
// benchMarking(100000000);

//------------------------------
//6. Замкнутыйсчётчик
//Попробуйте понять, как выполняется данный код. Запустите его. Сопадает ли
// реальность с ожиданием? Почему так? Откройте дебаггер, поставьте точку
// останова (breakpoint) и попробуйте проследить за выполнением кода,
// выполняя его по одной строке.


// for (let i = 1; i <= 10; i++) {
//     setTimeout(function() {
//         alert(i);
//     }, 1000);
// }
// Перепешите код так, чтобы каждую секунду выводилось следующее число,
// начиная с 1 и до 10.

// let inputNumber = () => {
//     let i = 1;
//     let id = setInterval(function () {
//         if (i === 10) {
//             clearInterval(id);
//         }
//         console.log(i);
//         i++;
//
//     }, 1000);
// };
//
// inputNumber();
//----------------------------------------------------
//Откройте следующий код: https://codepen.io/blackize/pen/QJyRVB
// Нажмите Fork (чтобы создать свою копию, а не менять эту).
// Попробуйте разобраться, что есть в этом коде. Обратите внимание на разделение
// ответственности функций: вместо одной большой используется несколько маленьких, и
// назначение каждой функции вполне понятно.
// Допишите функции startTimer, stopTimer, resetTimer так, чтобы по нажатию на нужные
// кнопки таймер начинал обратный отчёт (обновляясь каждые 20 миллисекунд),
// останавливался и сбрасывался в исходное значение (переменная INIT). Можно менять код
// данных функций и использовать новые глобальные переменные. Следуйте инструкциям в
// комментариях к коду.

const INIT = 65 * 1000; // initial value - 65 seconds
const T = 20;
let time = INIT; // actual value of the timer
let interval = T;
let id;
let param;
let timerState = false;

// вызываем функцию reset() (которую вы должны написать)
// в самом начале для установки исходного значения таймера

let reset = () => {
    setTimerValue(time);
};

reset();

//--------------------------------
//     function StopId(timerId) {
//         clearInterval(timerId);
//         timerState = false;
// }

//--------------------------------

// function start() {
//     timerState = true;
//     function startTimer() {
//         param = time - interval;
//         setTimerValue(param);
//         interval += 20;
//     }
//
//     id = setInterval(function () {
//         startTimer();
//         if (param <= 0) {
//             StopId(id);
//             interval = T;
//         }
//     }, 20);
// }
//-----------------------------------------
// function stopTimer() {
//     StopId(id);
//     interval = T;
//     /* напишите код, который будет останавливать
//      * таймер на текущем значении *//???????????????????????????
// }

//------------------------------------
// function resetTimer() {
//     if (timerState) {
//         StopId(id);
//         reset();
//     } else {
//         reset();
//     }

//     /* напишите код, который будет останавливать таймер,
//      * если он активен, и устанавливать его
//      * в исходное значение INIT */
// }

//--------------------------------------------------
var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop");
var resetBtn = document.getElementById("reset");

startBtn.onclick = start; //startTimer;
stopBtn.onclick = stopTimer;
resetBtn.onclick = resetTimer;

// установить заданное значение таймера (в миллисекундах)
function setTimerValue(time) {
    var millis = (time / 10) % 100; // оставить только сотые доли секунды
    var minutes = Math.floor(time / 60000); // в 1 минуте 60000 мс
    var seconds = Math.floor(time / 1000) - minutes * 60; // оставить секунды за вычетом тех, что уже учтены в минутах
    updateTimer(minutes, seconds, millis);
}

// обновить значение таймера на странице
function updateTimer(minutes, seconds, millis) {
    var timer = document.getElementById("timer");
    timer.innerText = timeToString(minutes, seconds, millis);
}

// по заданным минутам, секундам и миллисекундам
// сформировать строку времени для вывода на экран
function timeToString(minutes, seconds, millis) {
    return ensure2Digits(minutes)
        + ":" + ensure2Digits(seconds)
        + ":" + ensure2Digits(millis);
}

// конвертировать число в строку из двух символов;
// недостающие символы заменяются нулями слева
function ensure2Digits(num) {
    return num.toString().padStart(2, "0");
}




