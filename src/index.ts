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
        title: "Walk the Dog",
        completed: false,
    },
]


class TodoList {

    private todoArray: {id: number, title: string, completed: boolean}[]

    public constructor(array: {id: number, title: string, completed: boolean}[]) {
        this.todoArray = array;
    }

    public returnNewId(): number {
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

const mainTodoList = new TodoList(taskArr)


const taskList = document.getElementById('taskList')


taskList && taskArr.forEach((task) => {
    taskList.innerHTML += `<div class="taskItem"><p>${task.title}</p></div>`
}) 