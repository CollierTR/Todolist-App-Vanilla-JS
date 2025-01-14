import TodoList from "./classes/ToDoList";
// Define a 'starting' array. Replace this later with an array from local storage.
let taskArr = [
    {
        id: 1,
        title: "Feed the Fish",
        completed: false,
    },
    {
        id: 2,
        title: "Read 1st chapter of 'Clean Code'",
        completed: false,
    },
    {
        id: 3,
        title: "Clean the Toliet",
        completed: false,
    },
    {
        id: 4,
        title: "feed the Dog",
        completed: false,
    },
];
// Grab Dom elements
const taskList = document.getElementById('taskList');
// Initalize a new todolist and give it a 'starting' array
const mainTodoList = new TodoList(taskArr);
taskList && mainTodoList.returnTasks().forEach((task) => {
    taskList.innerHTML += `<div class="taskItem"><p>${task.title}</p></div>`;
});
