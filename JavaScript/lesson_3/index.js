// var i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
//
// console.log('end');
//
// //-----------------------------------
// var start = 1;
// var result = 0;
//
// while (start <= 100) {
//     result += start;
//     start++;
// }
// console.log(result);
// console.log('end');
//
// //--------------------------------------
//
// var j = 0;
// do {
//     console.log('-->', j);
//     j++;
// } while (j < 5);
//
// //--------------------------------------
//
// for (var k = 0; k < 10; k++) {
//     console.log(k);
// }

//fizz buzz fizzBuzz
//fibbonachi

// var colors = ['red', 'green', 'blue', 'yellow', 'black'];
// console.log(colors);
// var firstColor = colors[0];
// console.log(firstColor);
// colors[1] = 'SPAM';
// console.log(colors);
// var colors = [];
// var color = prompt('Color');
//
// while (color) {
//     var len =colors.length;
//     colors[len] = color;
//     color = prompt('Color');
// }
//
// console.log(colors);
// //colors[0] = color;
//
// for (var i = 0; i < colors.length; i++) {
//
//     var style = 'width: 100px; height: 100px; background:'+colors[i];
//     var div = '<div style=" '+style+'"></div>';
//
//     document.write(div);
//     //console.log(colors[i], i);
// }

// parseInt()
// // prompt()
// // alert()
//-------------------------------------
function startTriangle(symbol, size) {
    for (var i = 1; i <= size; i++) {
        for (var j = 1; j <= i; j++) {
            document.write(symbol);
        }
        document.write('<br>');
    }
}

startTriangle('*', 10);
//------------------------------------
var matrix = [
    [1, 11, 4],
    [2, 5, 6],
    [3, 6, 6]
]

function matrixSum(matrixArr) {
    var sum = 0;
    for (var i = 0; i < matrixArr.length; i++) {
        for (var j = 0; j < matrixArr[i].length; j++) {
            sum += matrixArr[i][j];
        }
    }
    return sum;
}
console.log('matrixSum -->', matrixSum(matrix));
//-----------------------------------

function a() {
    console.log('Hello');
}

function b(fn) {
    fn();
}

b(a);

b(function () {
    console.log('RRRRRRRRRRRR');
});

//-----------------------------------
function askPassword(success, error) {
    var pass = prompt('Pass');
    if (pass === '1') {
        success(true);
    } else {
        error(false);
    }
}

function ok(status) {
    console.log('success function log', status)
}

function notOk(status) {
    console.log('error function log', status);
}

askPassword(ok, notOk);
//---------------------------------
// function startRectangle(symbol, width, height) {
//     for (var i = 0; i < height; i++) {
//         for (var j = 0; j < width; j++) {
//             document.write(symbol);
//         }
//         document.write('<br>')
//     }
// }
//
// startRectangle('*', 12, 4);
// //----------------------------------
// var names = ['Alex', 'Margaret', 'IO', 'Mark'];
//
// function getLongestName(namesArray) {
//     var longestName = namesArray[0];
//     for (i = 1; i < namesArray.length; i++) {
//         if (longestName.length < namesArray[i].length) {
//             longestName = namesArray[i];
//         }
//     }
//     return longestName;
// }
// console.log(getLongestName(names));

//------------------------------------------
//names.push('NEW', 'ONE MORE');

// console.log(names);
// names.pop();
// console.log(names);
//
// names.shift();
// console.log(names);
// names.unshift();
// console.log(names);


// var s = 'Alex Green';
// var masString =  s.split(' ');
// var p = masString.join('------------------');
// console.log(p);
// var copyNames = names.slice(0, 1);
// copyNames[0] = 'CHANGED';
// console.log(copyNames);

// var index = names.indexOf('Anna');
//
// var inMas = names.includes('Anna');

// names.splice(1, 1, 'NEW', 0, 0 ,0);

// function greeting(userName) {
//     document.write('<hr>');
//     document.write('<b> Hi, my name is ' + userName + ' !<br>');
//     document.write('<hr>');
// }
//
// console.log(names);
//  for (var i = 0; i < names.length; i++) {
//      var  name = names[i];
//      greeting(name);
//  }

// function rangeSum(n, m) {
//     var sum = 0;
//     for (var i = n; i <= m; i++) {
//         sum += i;
//     }
//     return sum;
// }
//----------------------------------
function rangeSum(n, m, result) {
    if (typeof result === 'undefined') {
        result = 0;
    }
    if (m > n) {
        result += m;
        return rangeSum(n, m - 1, result)
    } else {
        return result + n;
    }
}

console.log(rangeSum(1, 100));

//--------------------------------
// function askPassword()
//      var pass = prompt('Enter password: ');
//
//     if (pass === '123') {
//         console.log('Success');
//     } else {
//         askPassword();
//     }
// }




