var listEl=document.querySelector(".task-list");
var formEl = document.querySelector("#task-form");
var createTaskHandler=function(event){
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    //creating list items
    var listItemEl=document.createElement("li");
    listItemEl.className="task-item";
    //create div to hold content
    var taskInfoEl=document.createElement("div");
    taskInfoEl.className="task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);
    // add entire list item to list
    listEl.appendChild(listItemEl);

}
formEl.addEventListener("submit", createTaskHandler);