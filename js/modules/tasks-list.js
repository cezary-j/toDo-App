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

function deleteTask() {

}