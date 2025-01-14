class TodoList {
    constructor(array) {
        this.todoArray = array;
    }
    returnTasks() {
        return this.todoArray;
    }
    returnNewId() {
        const maxId = this.todoArray.reduce((max, task) => Math.max(max, task.id), 0);
        return maxId + 1;
    }
    addTask(title = "Task") {
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
