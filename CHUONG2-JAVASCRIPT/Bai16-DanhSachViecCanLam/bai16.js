let tasks = [];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskWait = document.getElementById("taskWait");

function inputScreen() {
    taskList.innerHTML = "";
    let waitCount = 0;

    tasks.forEach((task, index) => {
        if (!task.completed) {
            waitCount++;
        }

        const itemDiv = document.createElement("div");
        itemDiv.className = `task ${task.completed ? "completed" : ""}`;

        //hoan thanh noi dung
        const contentDiv = document.createElement("div");
        contentDiv.className = "text";
        contentDiv.onclick = () => finalTask(index);

        const checkboxDiv = document.createElement("div");
        checkboxDiv.className = "task-checkbox";

        const textSpan = document.createElement("span");
        textSpan.className = "task-text";
        textSpan.textContent = task.text;

        contentDiv.appendChild(checkboxDiv);
        contentDiv.appendChild(textSpan);

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.textContent = "Xoá";
        deleteButton.onclick = () => deleteTask(index);

        itemDiv.appendChild(contentDiv);
        itemDiv.appendChild(deleteButton);
        taskList.appendChild(itemDiv);
    });
    taskWait.textContent = `Còn ${waitCount} việc chưa hoàn thành`;
}

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") {
        alert("Vui lòng nhập nội dung công việc!");
        return;
    }

    tasks.push({ text: text, completed: false });
    taskInput.value = "";
    inputScreen();
}

function finalTask(index) {
    tasks[index].completed = !tasks[index].completed;
    inputScreen();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    inputScreen();
}

inputScreen();