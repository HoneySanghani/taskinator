var buttonEl=document.querySelector("#save-task");
var listEl=document.querySelector(".task-list");
console.log(buttonEl);
buttonEl.addEventListener("click",createEventHandler);
function createEventHandler(){
    var taskListEl=document.createElement("li");
    taskListEl.textContent="task is added";
    taskListEl.className="task-item";
    listEl.appendChild(taskListEl);
}