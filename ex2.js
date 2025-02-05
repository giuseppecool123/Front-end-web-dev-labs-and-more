var MyTodos = /** @class */ (function () {
    function MyTodos() {
        this.myTasks = [];
    }
    MyTodos.prototype.addTask = function (task) {
        var length = this.myTasks.push(task);
        //log message showing that task has been added
        console.log(task + " add to my Tasks");
        //return the new length of array after adding the task
        return length;
    };
    //created listAllTask function that lists all tasks in the my tasks array(c)
    MyTodos.prototype.listAllTasks = function () {
        //loop each task in the myTasks array
        this.myTasks.forEach(//*
        function (element) {
            //log tasks,showing its in the tasks list
            console.log(element + " is in my Tasks list.");
        });
    };
    //funtion to deleate task form my task array
    MyTodos.prototype.deleteTask = function (task) {
        var index = this.myTasks.indexOf(task, 0); //stariting from index 0 find the index of the task to be deltesed
        if (index != -1) { //if the tasks exists ,remove it from array
            this.myTasks.splice(index, 1);
            //log to console
            console.log(task + " remove from my Tasks list.");
        }
        else {
            //if task isnt found log that it wasnt found
            console.log(task + " is not in my Tasks list. ");
        }
        //return updated array after going through the deleting process
        return this.myTasks.length;
    };
    return MyTodos;
}());
var myTask = new MyTodos();
myTask.addTask("work");
myTask.listAllTasks();
myTask.deleteTask("Sleep");
