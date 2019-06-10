//1. Котик
// Создать объект cat, у которого будет свойство name и метод sayMeow. Этот
// метод выводит сообщение вида «Barsik says: “meow”», но вместо «Barsik» - с
// именем, указанным в свойстве name (т.е. должно иметь место чтение
// свойства из данного объект

// var cat = {
//     name: 'Barsik',
//     sayMeow: function () {
//         console.log(cat.name + ' says: meow');
//     }
// }
//
// cat.sayMeow();

//---------------------------------------------
//2.Пользователь https://codepen.io/anon/pen/LodaKv?editors=1111
// Попросить пользователя ввести своё имя, потом возраст, потом e-mail, и
// сохранить все данные в один объект user, дав соответсвующие названия
// свойствам. Вывести этот объект в консоль: console.log(user) – и посмотреть, как
// он выглядит в консоли. Вывести этот объект на экран с помощью alert,
// преобразовав его к удобочитаемой строке.

// function userInfo() {
//     var user_name = prompt('Enter your name');
//     var user_age = +prompt('Enter your age');
//     var user_e_mail = prompt('Enter your e-mail');
//     return {
//         name: user_name,
//         age: user_age,
//         e_mail: user_e_mail
//     }
// }
//
// var user = userInfo();
// console.log(user);
// console.log('Name: ', user.name);
// console.log('Age: ', user.age);
// console.log('E-mail: ', user.e_mail);

//---------------------------------------------
//3. Перебор объекта https://codepen.io/anon/pen/YbagoK?editors=1111
// Создать объект с 5 любыми ключами и значениями. Для каждого свойства
// вывести alert вида «ключ: значение», подставив реальные значения свойств.
// Примечание: «для кажого свойства» означает, что нужно пройтись по
// объекту в цикле for-in и выполнить данное действие в теле цикла.

// var user = {
//     name: 'Alex',
//     age: 25,
//     e_mail: 'alex@mail.ru',
//     phone: '+38 067 345 78 55',
//     town: 'Kiev'
// }
//
// for (var prop in user) {
//     console.log(prop, ':', user[prop]);
// }

//----------------------------------------------

//4. Глобальный объект https://codepen.io/anon/pen/xNWBBQ?editors=1111
// 1) Зайдите в консоль и выведите содержимое объекта window. Изучите его,
// найдите знакомые вам глобальные переменные и функции. Скопируйте
// названия всех свойств, которые начинаются на букву «i» (строчную) и
// напишите их в коментарии к коду данной задачи – просто, чтобы показать,
// что вы действительно были в консоли и видели этот объект J
// 2) Создайте в JS-файле две глобальные переменные, не объявляя их с
// помощью var. Используйте то обстоятельство, что все переменные – это
// свойства window, а window – это всего лишь объект. Затем выведите эти
// переменные на экран, обратившись к ним напрямую, т.е. не через объект
// window.

// a = 2;
// b = 4;
// console.log(window.a);
// console.log(window.b);

//IDBCursor: ƒ IDBCursor()
// IDBCursorWithValue: ƒ IDBCursorWithValue()
// IDBDatabase: ƒ IDBDatabase()
// IDBFactory: ƒ IDBFactory()
// IDBIndex: ƒ IDBIndex()
// IDBKeyRange: ƒ IDBKeyRange()
// IDBObjectStore: ƒ IDBObjectStore()
// IDBOpenDBRequest: ƒ IDBOpenDBRequest()
// IDBRequest: ƒ IDBRequest()
// IDBTransaction: ƒ IDBTransaction()
// IDBVersionChangeEvent: ƒ IDBVersionChangeEvent()
// IIRFilterNode: ƒ IIRFilterNode()
// IdleDeadline: ƒ IdleDeadline()
// Image: ƒ Image()
// ImageBitmap: ƒ ImageBitmap()
// ImageBitmapRenderingContext: ƒ ImageBitmapRenderingContext()
// ImageCapture: ƒ ImageCapture()
// ImageData: ƒ ImageData()
// InputDeviceCapabilities: ƒ InputDeviceCapabilities()
// InputDeviceInfo: ƒ InputDeviceInfo()
// InputEvent: ƒ InputEvent()
// Int8Array: ƒ Int8Array()
// Int16Array: ƒ Int16Array()
// Int32Array: ƒ Int32Array()
// IntersectionObserver: ƒ IntersectionObserver()
// IntersectionObserverEntry: ƒ IntersectionObserverEntry()
// Intl: {getCanonicalLocales: ƒ, DateTimeFormat: ƒ, NumberFormat: ƒ, Collator: ƒ, v8BreakIterator: ƒ, …}

//-----------------------------------------------------

//5. Расстояние между точками - 2 https://codepen.io/anon/pen/NVYJod?editors=1112
// Вспомните задачу про нахождение расстояния между точками:
// Напишите функцию distance(x1, y1, x2, y2), которая вычисляет
// расстояние между двумя точками в двумерной системе координат.
// Каждая точка задаётся парой координат (xi, yi):
// distance(0,0, 1,1); // 1.414 (square root of 2)
// distance(3,4,0,0); // 5
// А теперь перепешите функцию так, чтобы каждую точку представить объектом
// с двумя координатами. Т.е. функция будет принимать уже 2 параметра,
// каждый из которых – объект.
// distance(a, b); // 1.414 (square root of 2)
// distance({x: 3, y: 4}, {x: 0, y: 0}); // 5

// function distanceAB(a, b,) {
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
// function distance(obj1, obj2) {
//     var xx2 = Math.pow(distanceAB(obj1.x, obj2.x), 2);
//     var yy2 = Math.pow(distanceAB(obj1.y, obj2.y), 2);
//     var data = xx2 + yy2;
//     return Math.sqrt(data);
// }
//
// var x1y1 = {x: 3, y: 4};
// var x2y2 = {x: 0, y: 0};
//
// distance(x1y1, x2y2);
// console.log(distance(x1y1, x2y2));

// console.log(distance(0, 0, 1, 1)); // 1, 414...
// console.log(distance(3, 4, 0, 0)); //5
// console.log(distance(0, 6, -8, 0)); //10
// console.log(distance(3, 9, -5, 3)); //10
//
// console.log(distance(x1y1, x2y2));
//--------------------------------------------------
//6. Все в массив https://codepen.io/anon/pen/mYxoXN?editors=1111
// Напишите функцию toArray(data), которая преобразует всё, что ей передают (единственный
// параметр), в массив по следующим правилам:
// • Если data – null иди undefined – вернуть пустой массив
// • Если data – число, строка, boolean или function – вернуть массив из одного этого
// элемента, т.е. [data]
// • Если data – уже и так массив – вернуть его же, как есть
// • Если data – объект – вернуть массив из значений всех его свойств (т.е. пройтись в
// цикле for-in по всем свойствам и поместить их значения в созданный вами массив);
// названия свойств (т.е. ключи) при этом теряются.
// Для решения используйте всё, что вы знаете о проверке типов данных. Функция должна
// возвращать значение, а не просто выводить его на экран! То, что она вернула, уже можно
// вывести на экран для проверки.

// function isEmpty(obj) {
//     var count = 0;
//     for (var key in obj) {
//         count++;
//     }
//     return count !== 0;
// }
//
// function toArray(data) {
//     var result = [];
//     //----
//     if (data === null || data === undefined) {
//         return result;
//     }
//     //----
//     if (typeof data === 'string' ||
//         data === 'boolean' ||
//         data === 'function' ||
//         data === 'number') {
//         result.push(data);
//         return result;
//     }
//     //----
//     if (data.length) {
//         return data;
//     }
//     //----
//     if (typeof data === 'object') {
//         if (isEmpty(data)) {
//             var arr = [];
//             for (var prop in data) {
//                 arr.push(prop);
//             }
//             for (var i = 0; i < arr.length; i++) {
//                 result.push(data[arr[i]]);
//             }
//             return result;
//         } else {
//             if (!isEmpty(data)) {
//                 return result;
//             }
//         }
//     }
// }
//
// console.log(toArray(null));// []
// console.log(toArray(undefined));// []
// console.log(toArray('hello'));// [“'hello”']
// console.log(toArray([5, 6, 7]));// [5,6,7]
// console.log(toArray({}));// []
// console.log(toArray({name: 'Igor', age: 25, skype: 'igor1993'}));// ['“Igor'”, 25, “'igor1993'”]
//---------------------------------------------------------
//7. Сравнение массивов https://codepen.io/anon/pen/NVYJXN?editors=1111
// Как известно, массивы относятся к ссылочным типам данных. То есть, в
// переменной хранится не сам массив, а ссылка на него, его адрес в памяти.
// Если где-то есть точно такой же массив, попытка их сравнить приводит к
// негативному результату, т.к. Сравниваются ссылки, а ссылки – разные.
// Напишите функцию equals(a, b), которая принимает 2 массива и проверяет их
// равенство поэлементно.

// function equals(a, b) {
//     var counter = 0;
//     if (a.length !== b.length) {
//         return false;
//     } else {
//         for (var i = 0; i < a.length; i++) {
//             if (a[i] === b[i]) {
//                 counter++;
//             }
//         }
//         return counter === a.length;
//     }
// }
//
// var array1 = [1, 2, 3, 4, 5];
// var array2 = [1, 2, 3, 4, 5];
// var array3 = [1, 2, 3, 4, 5, 6];
// console.log(array1 === array1); // true
// console.log(array1 === array2); // false
// console.log(equals(array1, array2)); // true
// console.log(equals(array1, array3)); // false
// console.log(equals(array1, array1)); // true

//---------------------------------------
//8. Копирование массива https://codepen.io/anon/pen/QRmoOK?editors=1111
// Как известно, массивы относятся к ссылочным типам данных. То есть, в
// переменной хранится не сам массив, а ссылка на него, его адрес в памяти. И
// если записать значение такой переменной в другую, они обе будут ссылаться
// на один массив. А как создать копию массива?
// Напишите функцию copyArray(arr), которая принимает массив и возвращает его
// копию.

// function copyArray(arr) {
//     var arrResult = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrResult.push(arr[i]);
//     }
//     return arrResult;
// }
//
// var array1 = [1, 2, 3, 4, 5];
// var array2 = array1; //число в array2 поменялось, т.к. обе переменные
// array1[0] = 100;
// console.log(array2[0]); // 100 – первое ссылаются на один массив
// array2 = copyArray(array1);
// array1[1] = 200;
// console.log(array2[1]); // 2 – второе число не поманялось, т.к. array2 – уже отдельный массив

//---------------------------------
//9. Копирование объекта https://codepen.io/anon/pen/PvRLJo?editors=1112
// Как и массивы, объекты относятся к ссылочным типам данных. Как создать
// копию объекта?
// Напишите функцию copyObject(arr), которая принимает объект и возвращает его
// копию.

// function copyObject(arr) {
//     var objResult = {};
//     var arrKey = [];
//     for (var prop in arr) {
//         arrKey.push(prop);
//     }
//
//     for (var i = 0; i < arrKey.length; i++) {
//         objResult[arrKey[i]] = arr[arrKey[i]];
//     }
//     return objResult;
// }
//
// var obj1 = {x: 4, y: 10, z: -1};
// var obj2 = obj1; // т.к. обе переменные ссылаются
// obj1.x = 100;
// console.log(obj2.x); // 100 – значение obj2.x поменялось, на один объект
// obj2 = copyObject(obj1);
// obj1.y = 200;
// console.log(obj2.y); // 10 – второе значение не поманялось, т.к. obj2 – уже отдельный массив

//------------------------------------------------------
//10. Копирование всего https://codepen.io/anon/pen/zQWbNP?editors=1112

// А теперь напишите обобщённую функцию copy, которая принимает любой
// параметр и возвращает его копию, проверяя тип данных. Можете вызывать ранее
// написанные функции copyArray и copyObject.
// Если параметр – объект, – нужно вернуть копию объекта. Если массив – вернуть
// копию массива. Если функция – вывести в консоль сообщение об ошибке – мы не
// умеем копировать функции. Если любой другой примитивный тип данных, можно
// просто вернуть его же:

// function copy(data) {
//
//     if (data === null || data === undefined ||
//         typeof data === 'string' ||
//         typeof data === 'number' ||
//         typeof data === 'boolean') {
//         return data;
//     } else {
//         if (typeof data === "function") {
//           return 'Error';
//         } else {
//             if (typeof data === 'object' && (!data.length)) {
//                 var objResult = {};
//                 var arrKey = [];
//                 for (var prop in data) {
//                     arrKey.push(prop);
//                 }
//
//                 for (var i = 0; i < arrKey.length; i++) {
//                     objResult[arrKey[i]] = data[arrKey[i]];
//                 }
//                 return objResult;
//
//             } else {
//                 if (data.length) {
//                     var arrResult = [];
//                     for (i = 0; i < data.length; i++) {
//                         arrResult.push(data[i]);
//                     }
//                     return arrResult;
//
//                 }
//             }
//         }
//     }
// }
//
// console.log(copy(null)); // null
// console.log(copy(undefined)); // undefined
// console.log(copy(145)); // 145
// console.log(copy(function() {}));// ошибка в консоли
// console.log(copy(['orange', 'apple', 'pear'])); // новый массив
// console.log(copy({a: 20, b: 30, c: 40})); // новый объект {a: 20, b: 30, c: 40}
// var arr = [1,3,5];
// console.log(arr === copy(arr)); // false, т.к. ссылки не равны