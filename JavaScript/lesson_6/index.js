var toDoListModel = {
    tasks: [],
    addTask: function (task) {
        this.tasks.push(task);
    },
    getTasksTemplate: function () {
        var template = '';

        for (var i = 0; i < this.tasks.length; i++) {
            var taskTitle = 'Title: ' + this.tasks[i].taskName + ';';
            var isDone = ': ' + this.tasks[i].isDone + ';';
            var className = this.tasks[i].isDone ? 'done' : '';
            // template += '<li data-id="">' + isDone + '<br>' + taskTitle + '</li>'
            template += '<li class=""' + classname + '" data-id="' + this.tasks[i].id + '">"' + isDone + '<br>' + taskTitle + '</li>'//!!!!!!!!!!
        }

        return template;
    },
    toggleTask: function (id) {
        for (var i = 0; i < this.tasks.length; i++)////!!!!!!!!!!!!!
        {
            if (this.tasks[i].id === id) {
                this.tasks[i].isDone = !this.tasks[i].isDone;
                break;
            }
        }
    },
    gatSummary: function () {
        var total = 0,
            completed = 0,
            inProgress = 0;

        for (var i = 0; i < this.tasks.length; i++) {
            total++;
            if (this.tasks[i].isDone) {
                completed++;
            } else inProgress++;
        }

        return 'Total: ' + total + '; Completed: ' + completed + '; Inprogress:' + inProgress + ';';
    }
}

function createTask(taskName) {
    var id = Math.round(Math.random() * 1000);

    return {
        taskName: taskName,
        id: id,
        isDone: false
    };
}

window.addEventListener('DOMContentLoaded', function () {
    var listHTML = document.getElementById('task-list');
    var summaryHTML = document.getElementById('summary');
    var taskFormHTML = document.getElementById('task-form');


    taskFormHTML.addEventListener('submit', function (event) {
        event.preventDefault();

        var input = taskFormHTML.querySelector('[name="taskName"]');
        // console.log(input.value);

        if (input.value) {
            var task = createTask(input.value);

            toDoListModel.addTask(task);
            listHTML.innerHTML = toDoListModel.getTasksTemplate();
            summaryHTML.innerHTML = toDoListModel.gatSummary();
            input.value = '';
        }
    });
    listHTML.addEventListener('click', function (event) {
        if (event.target.nodeName === 'LI') {
            var id = parseInt(event.target.getAttribute('data-id'));
            toDoListModel.toggleTask(id);
            listHTML.innerHTML = toDoListModel.getTasksTemplate();
            summaryHTML.innerHTML = toDoListModel.gatSummary();// обновление
            //console.log(id);
        }
    });
});


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach(function (item, index, arr) {
//     console.log(item, index, arr);
// })
//--------
function logItems(item, index, arr) {
    console.log(item, index, arr);
}

//     arr.forEach(logItems);
//---------------

// arr
//
//     .filter(function (n) {
//         return n % 2 === 0;
//     })
//     .map(function (n) {
//         return n * 2;
//     })
//
//     .forEach(logItems);
//------------


var res = arr

    .sort(function (n1, n2) {
        return n2 - n1;
    })

    .filter(function (n) {
        return n % 2 === 0;
    })
    .map(function (n) {
        return n * 2;
    })

//-------------

var items = document.querySelectorAll('li');
// var liveItems = document.getElementsByTagName('li');
// Array.from(items)
//     .filter(function (_, index) {
//         return index % 2 === 0 && index !== 0;
//     })
// .forEach(function (el) {
//     el.innerHTML = "Changed!";
// })

