// import TodoList from "./classes/ToDoList"
// const ToDoList = require('./classes/ToDoList')

class TodoList {

    private todoArray: {id: number, title: string, completed: boolean}[]

    public constructor(array: {id: number, title: string, completed: boolean}[]) {
        this.todoArray = array;
    }

    public returnTasks() {
        return this.todoArray
    }

    private returnNewId(): number {
        const maxId = this.todoArray.reduce((max, task) => Math.max(max, task.id), 0);
        return maxId + 1;
    }

    public addTask(title: string = "Task") {
        const newTask = {
            id: this.returnNewId(),
            title: title,
            completed: false,
        };
        this.todoArray.push(newTask);
    }

}



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
]

// Grab Dom elements
const taskList = document.getElementById('taskList')


// Initalize a new todolist and give it a 'starting' array
const mainTodoList = new TodoList(taskArr)




taskList && mainTodoList.returnTasks().forEach((task) => {
    taskList.innerHTML += `<div class="taskItem"><p>${task.title}</p></div>`
}) 