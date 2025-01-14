
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

export default TodoList;
// module.exports = { TodoList }
