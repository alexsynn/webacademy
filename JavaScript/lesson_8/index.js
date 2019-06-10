// console.log(this);
// function fn() {
//     console.log(this);
// }
//
// var user = {
//     name: 'Alex',
//     sayhi: fn
//     }
// }

// user.sayhi();
//
// var a = [];
// var a =new Array();
//--------------------------
// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     // this.sayhi = function() {
//     //     console.log('My name is',  this.name)
//     // }
//     //     var o = {};
//     //     this = o;
//     // return this;
// }
//
// User.prototype.sayHi = function () {
//         console.log('My name is',  this.name);
// };
//
// var alex = new User('Alex', 25);
// var marta = new  User('Marta', 2);
// console.log(alex.sayHi(), marta.sayHi());

///--------------------


// setTimeout(function () {
//     alert();
// }, 2);
//
// setInterval(function () {
//     console.log();
// }, 200);

//----------------------------

function updateDate() {
    var d = new Date();
    var currentDate = d.toLocaleDateString() + ''
    + d.toLocaleDateString();
    document.getElementById('date').innerText = currentDate;
}

setInterval(updateDate, 1000);
updateDate();

//---------------------------------------

var div = document.createElement('div');
body.appendChild(div);