var toDoListModel = {
    tasks: [],
    addTask: function(task) {
        this.tasks.unshift(task);
    },
    getTasksTemplate: function() {
        var template = '';

        for (var i = 0; i < this.tasks.length; i++) {
            var taskTitle = 'Title: ' + this.tasks[i].taskName + ';';
            var isDone = 'Done: ' + this.tasks[i].isDone + ';';
            var className = this.tasks[i].isDone ? 'done' : '';

            template += '<li class="' + className + '" data-id="'+ this.tasks[i].id +'">' + isDone + '<br>' + taskTitle + '</li>';
        }

        return template;
    },
    toggleTask: function(id) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id === id) {
                this.tasks[i].isDone = !this.tasks[i].isDone;
                break;
            }
        }
    },
    getSummary: function() {
        var total = 0,
            compelted = 0,
            inProgress = 0;

        for (var i = 0; i < this.tasks.length; i++) {
            total++;
            if (this.tasks[i].isDone) {
                compelted++;
            } else {
                inProgress++;
            }
        }

        return 'Total: ' + total +
            '; Completed: ' + compelted +
            '; In progress: ' + inProgress + ';';
    }
};

function createTask(taskName) {
    var id = Math.round(Math.random() * 1000);

    return {
        taskName: taskName,
        id: id,
        isDone: false
    };
}

(function DOMContentLoaded() {
    var listHTML = document.getElementById('tasks-list');
    var summaryHTML = document.getElementById('summary');
    var taskFormHTML = document.getElementById('task-form');

    taskFormHTML.addEventListener('submit', function(event) {
        event.preventDefault();
        var input = taskFormHTML.querySelector('[name="taskName"]');

        if (input.value) {
            var task = createTask(input.value);

            toDoListModel.addTask(task);
            listHTML.innerHTML = toDoListModel.getTasksTemplate();
            summaryHTML.innerHTML = toDoListModel.getSummary();
            input.value = '';
        }
    });

    listHTML.addEventListener('click', function(event) {
        if (event.target.nodeName === 'LI') {
            var id = parseInt(event.target.getAttribute('data-id'));

            toDoListModel.toggleTask(id);
            listHTML.innerHTML = toDoListModel.getTasksTemplate();
            summaryHTML.innerHTML = toDoListModel.getSummary();
        }
    });
})()