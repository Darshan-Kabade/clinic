// JavaScript code for To-Do List application

// Task Class
class Task {
    constructor(name) {
        this.name = name;
        this.isCompleted = false;
    }
    
    // Method to toggle the completion status
    toggleCompleted() {
        this.isCompleted = !this.isCompleted;
    }
}

// Task Manager Class
class TaskManager {
    constructor() {
        this.tasks = []; // Array to store task objects
    }
    
    // Method to add a new task
    addTask(task) {
        this.tasks.push(task);
    }
    
    // Method to delete a task by index
    deleteTask(index) {
        this.tasks.splice(index, 1);
    }
    
    // Method to toggle completion of a task by index
    toggleTaskCompleted(index) {
        this.tasks[index].toggleCompleted();
    }
    
    // Method to render the task list
    renderTasks() {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = ""; // Clear previous list
        
        this.tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.className = task.isCompleted ? "completed" : "";
            li.innerHTML = `
                ${task.name}
                <div>
                    <button onclick="markTaskCompleted(${index})">✔</button>
                    <button onclick="removeTask(${index})">❌</button>
                </div>
            `;
            taskList.appendChild(li);
        });
    }
}

// Initialize a new TaskManager object
const taskManager = new TaskManager();

// Event Listener for 'Add Task' button
document.getElementById("addTaskButton").addEventListener("click", () => {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();
    
    // Condition to check if task is not empty
    if (taskName !== "") {
        const newTask = new Task(taskName); // Create new Task object
        taskManager.addTask(newTask); // Add task to TaskManager
        taskInput.value = ""; // Clear input field
        taskManager.renderTasks(); // Render updated task list
    } else {
        alert("Please enter a task name!");
    }
});

// Function to mark a task as completed
function markTaskCompleted(index) {
    taskManager.toggleTaskCompleted(index);
    taskManager.renderTasks();
}

// Function to remove a task
function removeTask(index) {
    taskManager.deleteTask(index);
    taskManager.renderTasks();
}
