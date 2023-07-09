const readline = require("readline");
const fs = require("fs");

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define the path to the data file
const dataFilePath = "data.json";

// Load existing tasks from the data file
let tasks = loadTasks();

// Function to load tasks from the data file
function loadTasks() {
  try {
    const data = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.log("Error loading tasks:", err);
    return [];
  }
}

// Function to save tasks to the data file
function saveTasks() {
  const data = JSON.stringify(tasks);
  fs.writeFileSync(dataFilePath, data, "utf8");
}

// Function to display all tasks
function displayTasks() {
  console.log("Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

// Function to add a new task
function addTask(task) {
  tasks.push(task);
  console.log("Task added:", task);
  saveTasks();
}

// Function to update a task
function updateTask(index, task) {
  if (index >= 0 && index < tasks.length) {
    tasks[index] = task;
    console.log("Task updated:", task);
    saveTasks();
  } else {
    console.log("Invalid task index");
  }
}

// Function to delete a task
function deleteTask(index) {
  if (index >= 0 && index < tasks.length) {
    const deletedTask = tasks.splice(index, 1);
    console.log("Task deleted:", deletedTask);
    saveTasks();
  } else {
    console.log("Invalid task index");
  }
}

// Function to handle user input for adding a task
function handleAddTaskInput() {
  rl.question("Enter task: ", (task) => {
    addTask(task);
    displayTasks();
    rl.prompt();
  });
}

// Function to handle user input for updating a task
function handleUpdateTaskInput() {
  rl.question("Enter task index to update: ", (index) => {
    index = parseInt(index) - 1;
    if (index >= 0 && index < tasks.length) {
      rl.question("Enter updated task: ", (task) => {
        updateTask(index, task);
        displayTasks();
        rl.prompt();
      });
    } else {
      console.log("Invalid task index");
      rl.prompt();
    }
  });
}

// Function to handle user input for deleting a task
function handleDeleteTaskInput() {
  rl.question("Enter task index to delete: ", (index) => {
    index = parseInt(index) - 1;
    deleteTask(index);
    displayTasks();
    rl.prompt();
  });
}

// Function to handle user input for displaying tasks
function handleDisplayTasksInput() {
  displayTasks();
  rl.prompt();
}

// Function to handle user input for quitting the application
function handleQuitInput() {
  rl.close();
}

// Main function to start the application
function startApp() {
  console.log("To-Do Task Application");

  rl.setPrompt("Enter command (add/update/delete/display/quit): ");
  rl.prompt();

  rl.on("line", (input) => {
    const command = input.trim().toLowerCase();

    switch (command) {
      case "add":
        handleAddTaskInput();
        break;
      case "update":
        handleUpdateTaskInput();
        break;
      case "delete":
        handleDeleteTaskInput();
        break;
      case "display":
        handleDisplayTasksInput();
        break;
      case "quit":
        handleQuitInput();
        break;
      default:
        console.log("Invalid command");
        rl.prompt();
        break;
    }
  });

  rl.on("close", () => {
    console.log("Goodbye!");
    process.exit(0);
  });
}

// Start the application
startApp();

This code uses the Node.js readline module to handle user input and the fs module to read and write data to a JSON file. It provides the following functionality:

// Load existing tasks from the data file on startup.
// Allow the user to add a new task.
// Allow the user to update an existing task.
// Allow the user to delete a task.
// Display all tasks.
// Save tasks to the data file after any modification.
// Quit the application.
// The tasks are stored in an array (tasks), and the JSON file (data.json) is used to persist the tasks across application sessions. When the application starts, it loads the tasks from the file into memory. Any modifications made by the user are saved back to the file to ensure data persistence.

// You can run this code in a Node.js environment, and it will prompt you for commands to perform various actions on the to-do tasks.