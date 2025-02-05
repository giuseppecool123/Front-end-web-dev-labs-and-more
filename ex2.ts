interface MyTodosInterface{//interface  that holds these 3 functions
    myTasks:Array<string>;
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;

}

class MyTodos implements MyTodosInterface{
    myTasks:Array<string>=[];

    addTask(task: string):number{
        let length : number = this.myTasks.push(task);
        //log message showing that task has been added
        console.log(task+" add to my Tasks");
        //return the new length of array after adding the task
        return length;
      
      }
      //created listAllTask function that lists all tasks in the my tasks array(c)
    listAllTasks():void{
    //loop each task in the myTasks array
     this.myTasks.forEach(//*
       (element)=>{
        //log tasks,showing its in the tasks list
         console.log(element+" is in my Tasks list.");
       }   
    );
}
//funtion to deleate task form my task array
    deleteTask(task:string):number{
    let index:number = this.myTasks.indexOf(task,0)//stariting from index 0 find the index of the task to be deltesed
    
    if(index != -1){//if the tasks exists ,remove it from array
        this.myTasks.splice(index,1);
        //log to console
        console.log(task+" remove from my Tasks list.")

    }else{
        //if task isnt found log that it wasnt found
        console.log(task+" is not in my Tasks list. ");
    }
    //return updated array after going through the deleting process
    return this.myTasks.length;
   }

}
let myTask = new MyTodos();
myTask.addTask("work");
myTask.listAllTasks();
myTask.deleteTask("Sleep");