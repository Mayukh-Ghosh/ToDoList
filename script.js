let taskList = document.getElementById("taskList");
let newTaskInput = document.getElementById("newTask");

function addTask() {
    let taskText = newTaskInput.value.trim();

    if (taskText !== "") {
        let listItem = document.createElement("li");
        listItem.textContent = taskText;
        listItem.onclick = function () {
            this.remove();
        };

        taskList.appendChild(listItem);
        newTaskInput.value = "";
    }
}
