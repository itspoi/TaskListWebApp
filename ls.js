function LS(){}

LS.prototype.fetchTasks = function(){
    let tasks = localStorage.getItem('tasks');
    if(tasks){
        tasks = JSON.parse(tasks);
    }
    else{
        tasks = [];
    }
    return tasks;
}

LS.prototype.storeTask = function(task){
let tasks = this.fetchTasks();
tasks.unshift(task);//UNSHIFT, LAST DATA WILL DISPLAY FIRST
localStorage.setItem('tasks', JSON.stringify(tasks));
}

LS.prototype.deleteTask = function(id){//Match id goes to ui.js
    let tasks = this.fetchTasks();
    let index = tasks.findIndex((task)=>task.id === id);//find the id
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

LS.prototype.completeTask = function(id){//Match id goes to ui.js
    let tasks = this.fetchTasks();
    let index = tasks.findIndex((task)=>task.id === id);//find the id
    //condition for is complete boolean
    if(tasks[index].isComplete){
        tasks[index].isComplete = false;
    }
    else{
        tasks[index].isComplete = true;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default LS;
