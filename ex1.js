//an array of strings (a)
var myTasks = [];
//another way of doing it
var array2 = [];
//add a task to myArray addTasks (b)
function addTasks(task) {
    var length = myTasks.push(task);
    //log message showing that task has been added
    console.log(task + " add to my tasks");
    //return the new length of array after adding the task
    return length;
}
//created listAllTask function that lists all tasks in the my tasks array(c)
function listAllTasks() {
    myTasks.forEach(function (element) {
        console.log(element + " is in my Tasks list.");
    });
}
//funtion to list all of the tasks to
function deleteTask(task) {
    var index = myTasks.indexOf(task, 0);
    if (index != -1) {
        myTasks.splice(index, 1);
        console.log(task + " remove from my Tasks list.");
    }
    else {
        console.log(task + " is not in my Tasks list. ");
    }
    return myTasks.length;
}
//task that has been added
addTasks("Work");
addTasks("Rest");
listAllTasks();
deleteTask("Work");
listAllTasks();
