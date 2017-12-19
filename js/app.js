// variables

var newTaskForm = document.querySelector('.task-container form');
var tasksContainer = document.querySelector('.container-tasks ul');
// on DOM load

document.addEventListener('DOMContentLoaded', function() {
    addTaskEvents();
    showTasks();

});