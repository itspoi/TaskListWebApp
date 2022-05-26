//Task for things to be saved(id, title, isComplete)

import Task from "./task.js";
import UI from "./ui.js";

const ui = new UI();

//To display task on UI

//Save to LS AND GET


document.querySelector(".AddTaskBtn").addEventListener('click', e =>
{
    console.log(e.target);
const taskTitle = document.querySelector('#newtaskID').value;
console.log(taskTitle);

if(taskTitle.length > 0){
const task = new Task(taskTitle);
console.log(task);

ui.addToUI(task);
ui.resetForm();}

}
);

document.querySelector(".task-list").addEventListener('click', e =>{
    console.log(e.target.className);

    if(e.target.className.includes('task__op_delete')){
        ui.deleteTask(e);
    }

    if(e.target.className.includes('task-check')){
        ui.completeTask(e);
    }
});