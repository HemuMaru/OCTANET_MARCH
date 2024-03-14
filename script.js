document.getElementById("todo-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var taskInput = document.getElementById("task");
    var deadlineInput = document.getElementById("deadline");
    var importanceInput = document.getElementById("importance");
    var labelInput = document.getElementById("label");

    var task = taskInput.value;
    var deadline = deadlineInput.value;
    var importance = importanceInput.value;
    var label = labelInput.value;

    if (task.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    addTask(task, deadline, importance, label);

    taskInput.value = " ";
    deadlineInput.value = " ";
    importanceInput.value = "low";
    labelInput.value = "";
});

function addTask(task, deadline, importance, label) {
    var taskList = document.getElementById("task-list");

    var li = document.createElement("li");
    li.className = "task-item";

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    var taskSpan = document.createElement("span");
    taskSpan.textContent = task;

    var deadlineSpan = document.createElement("span");
    deadlineSpan.textContent = deadline;
    deadlineSpan.className = "task-deadline";

    var importanceSpan = document.createElement("span");
    importanceSpan.textContent = importance.charAt(0).toUpperCase() + importance.slice(1);
    importanceSpan.className = "task-label " + importance;

    var labelSpan = document.createElement("span");
    labelSpan.textContent = label;
    labelSpan.className = "task-label";

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deadlineSpan);
    li.appendChild(importanceSpan);
    li.appendChild(labelSpan);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
}
