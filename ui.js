import LS  from "./ls.js";

function UI(){}

const ls = new LS();

UI.prototype.showAllTasks = function(){
  let tak = ls.fetchTasks();
  let newHTML = '';
  tak.forEach((take)=>{
  newHTML += `<div class="task" data-createdat="${take.id}">
  <!-- Unseen -->

<!-- Seen -->
  <div class="task__details">
    <input type="checkbox" class=${take.isComplete ? "completed" : ''} />

    <label class="task-title">${take.title}</label>
  </div>

  <div class="task__op">
    <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
    <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
  </div>
  <!-- Seen -->
</div>`})

document.querySelector('.task-list').innerHTML = newHTML;
}

    UI.prototype.resetForm = function(){
        document.querySelector("#newtaskID").value = '';
        
    }

UI.prototype.addToUI = function(task){

  ls.storeTask(task);//this task parameter is what is stored in LOCAL STORAGE. Check ls.js from line 13


    let newHtml = `
<div class="task" data-createdat="${task.id}">
            <div class="task__details">
              <input type="checkbox" class="task-check" />
              <label class="task-title">${task.title}</label>
            </div>

            <div class="task__op">
              <ion-icon class="task__op_edit" name="create-outline"></ion-icon>
              <ion-icon class="task__op_delete" name="trash-outline"></ion-icon>
            </div>
          </div>
`;
    
document.querySelector('.task-list').insertAdjacentHTML('afterbegin', newHtml)
}


UI.prototype.deleteTask = function(e){
const task = e.target.parentElement.parentElement;//Tiwce to Access class task-list

const id = task.dataset.createdat;
ls.deleteTask(id);
task.remove();
}

UI.prototype.completeTask = function(e){
  const task = e.target.parentElement.parentElement;//Tiwce to Access class task-list
  task.classList.toggle('completed');
  const id = task.dataset.createdat;
  ls.completeTask(id);
};

export default UI;