// var table = document.body.children[0].children[0];
// for (var i = 0; i < table.children.length; i++) {
//     var td = table.rows[i].cells[i];
//     td.style.backgroundColor = 'red';
// }

//Ниже находится документ с таблицей и формой.
//
// Найдите (получите в переменную) в нём:
//
// Все элементы label внутри таблицы. Должно быть 3 элемента.
// var label = document
//     .getElementById('age-table')
//     .querySelectorAll('label');
//
// var label1= document
//     .getElementById('age-table')
//     .getElementsByTagName('label');
// console.log(label);
//
//
// console.log('--------------------------------');
// // Первую ячейку таблицы (со словом "Возраст").
//
// var age = document.querySelector('#age-table tr > td:first-child');
// var age1 = document.getElementById("age-table").getElementsByTagName("td")[0];
// // в современных браузерах можно одним запросом:
// var age2 = document.querySelector('#age-table td');
// console.log(age);
// console.log(age1);
// console.log(age1);
// console.log('--------------------------------');
// // Вторую форму в документе.
// var form_2 = document.querySelector('form[name="search-person"]');
//
// var form_22 = document.getElementsByTagName('form')[1];
// console.log(form_2);
// console.log(form_22);
// console.log('--------------------------------');
// // Форму с именем search, без использования её позиции в документе.
// var search = document.querySelector("form[name='search']");
// var search1 = document.querySelector('form[name="search"]');
// console.log(search);
// console.log(search1);
// console.log('--------------------------------');
// // Элемент input в форме с именем search. Если их несколько, то нужен первый.
// var firstInput = document
//     .querySelector('form[name="search"] label > input:first-child');
// var firstInput1 = document.querySelector('form[name="search"] input');
// console.log(firstInput);
// console.log(firstInput1);
//
// console.log('--------------------------------');
// // Элемент с именем info[0], без точного знания его позиции в документе.
// var info0 = document
//     .querySelector('body [name ="info[0]"');
//
// var info1 = document.getElementsByName("info[0]")[0];
// console.log(info0);
// console.log(info1);
// console.log('--------------------------------');
// // Элемент с именем info[0], внутри формы с именем search-person.
//
// var info = document.querySelector("form[name='search-person'] [name ='info[0]'");
// var info11 = document.querySelector('form[name="search-person"] [name="info[0]"]');
// console.log(info);
// console.log(info11);
//----------------------------------------
// Используйте для этого консоль браузера, открыв страницу table.html в отдельном окне.

//Есть дерево из тегов <ul>/<li>.//
// Напишите код, который для каждого элемента <li> выведет://
// Текст непосредственно в нём (без подразделов).
// Количество вложенных в него элементов <li> – всех, с учётом вложенных.


// var elem = document.getElementsByTagName('li');
//
// for (var i = 0; i < elem.length; i++) {
//     console.log(elem[i].firstChild);
// }
// console.log(elem.length);

// for (var i = 0; i < elem.length; i++) {
//     console.log(elem[i].innerHTML);
// }

// elem.forEach = [].forEach;
//
// elem.forEach(function(item, i) {
//     console.log(item.innerHTML);
// });


//getElementsByTagName(tag) или querySelectorAll(tag)
// var date = new Date,
//     byTagName = document.getElementsByTagName('input');
// console.log(new Date() - date);
// var date_1 = new Date(),
//     bySelector = document.querySelectorAll('input');
// console.log(new Date() - date_1);

// function runGet() {
//     var byTagName = document.getElementsByTagName('input');
// }
//
// function runQuary() {
//     var bySelector = document.querySelectorAll('input');
// }
//
// function bench(f, times) {
//     var start = new Date();
//     for (var i = 0; i < times; i++) {
//         f();
//     }return (new Date() - start);
// }
// console.log(bench(runGet, 1000));
// console.log(bench(runQuary, 1000));
//----------------------------------------
//Есть длинный список ul:
//
// <ul>
//   <li>...</li>
//   <li>...</li>
//   <li>...</li>
//   ...
// </ul>
// Как наиболее эффективно получить второй LI?

// var elem = document.getElementsByTagName('ul');
//
// console.dir(elem);
// var result = elem[0].firstElementChild.nextElementSibling;
// console.log(result);

// var ul = document.getElementsByTagName('ul');
// var result = ul[0].getElementsByTagName('li')[1];

//---------------------------
// var ul = document.getElementsByTagName('ul')[0];
// console.dir(ul);
//
// var li = ul.getElementsByTagName('li')[1];
// console.log(li);
//-------------------------------
// console.log(result);
//
// var ul_1 = document.querySelectorAll('ul > li:nth-child(2)');
//
// // var li = ul_1.querySelector('li:nth-child(2)');
// console.log(ul_1);
//----------------
// var btn = document.getElementsByTagName('button');
// // console.log(btn);
// // console.log(hidElem[0]);
// btn[0].onclick = function () {
//    var hidElem = document.getElementById('text');
//    hidElem.style.display = 'none';
//    // console.log(hidElem);
//    //  hidElem.hidden = true;
// }
//------------------

// var btn = document.getElementsByTagName('button');
//
// btn[0].onclick = function () {
//     this.style.display = 'none';
// }
//-------------------
// var button = document.getElementsByTagName('button')[0];
//
// button.addEventListener("click", function() { alert("1"); });
//
// button.removeEventListener("click", function() { alert("1"); });
//
// button.onclick = function() { alert(2); };

//--------------------

// var menu = document.getElementById('menu');
// var menu_items = document.getElementById('menu-items');
// menu_items.style.display = 'none';
//
// menu.onclick = function () {
//     menu_items.style.display = 'block'
// }
//--------------------
var divMsg = document.getElementsByClassName('msg');

for (var i = 0; i <= divMsg.length; i++) {
    divMsg[i].onclick = function () {
        this.style.display = 'none';
    }
}