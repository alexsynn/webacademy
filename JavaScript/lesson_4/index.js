// var obj = {};
// var arr = [];

// var colors = ['red', 'green'];
// colors[0]
//
// var user = {
//     'user name': 'Alex',
//     age: 30,
//     contacts: {
//         name: 'Q',
//         numbers: ['123', '456', '788']
//     }
// };
// // user.name = 'Alex';
// // user.age = 30;
//
// console.log(user);
// console.log(user['name']);
// console.log(user.name);
// console.log(user.contacts.numbers[0]);
//
// user.surname = 'Moren';
// console.log(user.contacts['user name']);

// var user = {
//     name: 'Alex',
//     sayHi: function () {
// console.log('Hi, my name is ', user.name);
//     }
// }

// user.sayHi();
// for (var prop in user){
//     console.log(prop, user[prop]);
// }
//
// var a = 2;
// var b = 7;

// function scope() {
//     var GLOBAL = 'GLOBAL';
//     console.log(GLOBAL + '1')
// }
//
// scope();

// (function () {
//     // window.USER_ID = '2';
//     var GLOBAL = 'GLOBAL';
//     console.log(GLOBAL + '1')
// })()

// var toDoList = {
//     owner: 'Alex',
//     owners_id: 12334,
//     items: [
//         {
//             title: 'Learn HTML',
//             id: 1,
//             isDone: true
//         },
//
//         {
//             title: 'Learn JS',
//             id: 2,
//             isDone: false
//         },
//
//         {
//             title: 'Learn CSS',
//             id: 3,
//             isDone: true
//         }
//     ],
//     getNotDoneTasks: function () {
//         var notDoneTask = [];
//         for (var i = 0; i < toDoList.items.length; i++) {
//             if (!toDoList.items[i].isDone) {
//                 notDoneTask.push(toDoList.items[i].title);
//             }
//         }
//         return notDoneTask;
//     }
//
// };

// console.log(toDoList.items[1].id);
// console.log(toDoList.owners_id);
// console.log(toDoList.items[2].title);

// var notDoneTask = [];
// for (var i =0; i < toDoList.items.length; i++) {
// // console.log(toDoList.items[i]);
// if (!toDoList.items[i].isDone) {
//     notDoneTask.push(toDoList.items[i].title);
// }
// }

// console.log(notDoneTask);
// console.log(toDoList.getNotDoneTasks());
//------------------------------
// var data = {
//     "results": [//data.results[0].geometry.lat
//         {
//             "address_components": [
//                 {
//                     "long_name": "5",
//                     "short_name": "5",
//                     "types": ["street_number"]
//                 },
//                 {
//                     "long_name": "Киевский политехнический институт",//data.results[0].address_components[1].long_name
//                     "short_name": "Киевский политехнический институт",
//                     "types": ["establishment"]
//                 },
//                 {
//                     "long_name": "вулиця Академіка Янгеля",//data.results[0].address_components[2].long_name
//                     "short_name": "вулиця Академіка Янгеля",
//                     "types": ["route"]
//                 },
//                 {
//                     "long_name": "Солом'янський район",
//                     "short_name": "Солом'янський район",
//                     "types": ["sublocality_level_1", "sublocality", "political"]
//                 },
//                 {
//                     "long_name": "Київ", //data.results[0].address_components[4].long_name
//                     "short_name": "Київ",
//                     "types": ["locality", "political"]
//                 },
//                 {
//                     "long_name": "місто Київ",
//                     "short_name": "місто Київ",
//                     "types": ["administrative_area_level_2", "political"]
//                 },
//                 {
//                     "long_name": "місто Київ",
//                     "short_name": "місто Київ",
//                     "types": ["administrative_area_level_1", "political"]
//                 },
//                 {
//                     "long_name": "Украина",//data.results[0].address_components[7].long_name
//                     "short_name": "UA",
//                     "types": ["country", "political"]
//                 }
//             ],
//             "geometry": {
//                 "location": {
//                     "lat": 50.449819,
//                     "lng": 30.453404
//                 },
//                 "location_type": "ROOFTOP",
//                 "viewport": {
//                     "northeast": {
//                         "lat": 50.4511679802915,
//                         "lng": 30.4547529802915
//                     },
//                     "southwest": {
//                         "lat": 50.4484700197085,
//                         "lng": 30.4520550197085
//                     }
//                 }
//             },
//             "types": ["street_address"]
//         }
//     ],
//     "status": "OK"
// }
//
// console.log('>>>>>',
//     data.results[0].address_components[1].long_name,
//     data.results[0].address_components[2].long_name,
//     data.results[0].address_components[4].long_name,
//     data.results[0].address_components[7].long_name
// );
//
// console.log('>>>>>>',
//     data.results[0].geometry.location.lat,
//     data.results[0].geometry.location.lng,
//     data.results[0].geometry.viewport.northeast.lat,
//     data.results[0].geometry.viewport.northeast.lng,
//     data.results[0].geometry.viewport.southwest.lat,
//     data.results[0].geometry.viewport.southwest.lng
// )
//Дістати з нього дані, щоб в результаті вивівся такий текст “Киевский политехнический
// институт, вулиця Академіка Янгеля, 5 , місто Київ, Украина»
//-------------------------------------
// var  translaterObj = {
//     wordTranslate: 'dog',
//     translation: 'собака',
//     example: ['I like dogs'],
//     ready: true
// }
//
// var FB = {
//     profile: {
//         // ...info
//     },
//     config: {
//         //....settings
//     },
//     news: [
//         {
//             url: 'http://ngnniuhnhmuh',
//             title: 'Hi',
//             comments: [
//                 {
//                     user_id: 123456986,
//                 }
//             ]
//         }
//     ]
// }
//-------------------------------------
//Створити об’єкт "Докумет", в якому визначити властивості "Заголовок, Тіло,
// Футер, Дата". Створити в
// об’єкті вкладений об’єкт "Додаток", створити в
// цьому об’єкти вкладені об’єкти, "Заголовок, Тіло, Футер, Дата"

// var obj = {
//     title: 'title',
//     body: 'body',
//     footer: 'footer',
//     date: '14-05-2019',
//     add: {
//         title: 'title',
//         body: 'body',
//         footer: 'footer',
//         date: '14-05-2019'
//     }
// }


// console.log(obj);

//Створити обєкт, додати до нього дві властивості “x” та “y” додати метод при
// виклику якого виведеться "
// x = " + тут значення x + " y = " + тут значення y

// var objNew = {
//     x: 4,
//     y: function () {
//         var p = objNew.x + 5;
//        // console.log('x = ', objNew.x, 'y = ', )
//         return p;
//     }
// }
// console.log('x = ', objNew.x, 'y = ', objNew.y());
//-----------------------------------------
function $(id) {
    return document.getElementById(id);
}
var amountHTML = $('amount');
var inputADD = $('add_value');
var inputGET = $('get_value');
var historyList =$('history');
var addBTN = $('add');
var getBTN = $('get');


var terminal = {
    amount: 1000,
    title: 'Terminal_24/7',
    history: [],
    addMoney: function (amount) {
        terminal.amount += amount;
        this.updateHistory({
            type: 'add',
            amount: amount
        });
    },

    getMoney: function (amount) {
        if (terminal.amount >= amount) {
            terminal.amount -= amount;
            this.updateHistory({
                type: 'get',
                amount: amount
            });
            return amount;
        } else {
            this.updateHistory({
                type: 'get_failed',
                amount: amount
            });
            return null;
        }
    },

    updateHistory: function (event) {
        terminal.history.push(event);
        console.log(event);
    }
}

function bindListener(btn, field, method) {
    btn.addEventListener('click', function () {
        var value = field.value;
        terminal[method](parseInt(value));
        field.value = 0;
        amountHTML.innerText = terminal.amount;
    })
}

// console.log(terminal);
amountHTML.innerText = terminal.amount;
bindListener(addBTN, inputADD, 'addMoney');
bindListener(getBTN, inputGET, 'getMoney')