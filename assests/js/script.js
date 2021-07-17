var buttonEl=document.querySelector("#save-task");
var listEl=document.querySelector(".task-list");
var formEl = document.querySelector("#task-form");
function createTaskHandler(event){
    event.preventDefault();
    var taskListEl=document.createElement("li");
    taskListEl.className = "task-item"; 
    taskListEl.textContent = "This is a new task."; 
    listEl.appendChild(taskListEl);
}
formEl.addEventListener("submit", createTaskHandler);