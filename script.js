// script.js

// Get HTML elements
const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Function to add a task
addBtn.addEventListener("click", () => {
  const task = taskInput.value.trim(); // Get input and remove spaces

  if (task) {
    // If task is not empty
    const li = document.createElement("li"); // Create a new list item

    // Create a span for task text
    const span = document.createElement("span");
    span.textContent = task; // Set task text
    li.appendChild(span); // Add span to list item

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    li.appendChild(deleteBtn); // Add delete button to list item

    // Event: Mark as completed
    span.addEventListener("click", () => {
      span.style.textDecoration =
        span.style.textDecoration === "line-through" ? "none" : "line-through";
    });

    // Event: Delete task
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    // Add the new task to the list
    taskList.appendChild(li);

    // Clear input box
    taskInput.value = "";
  } else {
    alert("Please enter a task!"); // Warn if input is empty
  }
});
