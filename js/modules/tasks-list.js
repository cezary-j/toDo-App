function showTasks(){
    tasks.forEach(function(title){
        addNewTask(title);
    });
}

// Button complete

function toggleTaskComplete(task) {
    task.classList.toggle('btn-success');

    }
// delete button

function deleteTask(task) {

    var liToDelete = task.closest('li');

    task.closest('ul').removeChild(liToDelete);

}