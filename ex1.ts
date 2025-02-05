//an array of strings (a)
let myTasks:Array<string>=[];
//another way of doing it
let array2:string[]=[];

//add a task to myArray addTasks (b)
function addTasks(task: string):number{
  let length : number = myTasks.push(task);
  //log message showing that task has been added
  console.log(task+" add to my tasks");
  //return the new length of array after adding the task
  return length;

}

//created listAllTask function that lists all tasks in the my tasks array(c)
function listAllTasks():void{
    //loop each task in the myTasks array
    myTasks.forEach(
       (element)=>{
        //log tasks,showing its in the tasks list
         console.log(element+" is in my Tasks list.");
       }   
    );
}
//funtion to deleate task form my task array
function deleteTask(task:string):number{
    let index:number = myTasks.indexOf(task,0)//stariting from index 0 find the index of the task to be deltesed
    
    if(index != -1){//if the tasks exists ,remove it from array
        myTasks.splice(index,1);
        console.log(task+" remove from my Tasks list.")

    }else{
        //if task isnt found log that it wasnt found
        console.log(task+" is not in my Tasks list. ");
    }
    //return updated array after going through the deleting process
    return myTasks.length;
}

//task that has been added
addTasks("Work");
addTasks("Rest");
//list all tasks in array they will be logged to console
listAllTasks();
deleteTask("Work");
//list all tasks again to show updated ones
listAllTasks();