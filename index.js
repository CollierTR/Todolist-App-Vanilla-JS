
let taskArr = [
    {
        name: "Feed the Fish",
        completed: false,
    },
    {
        name: "Read 1st chapter of 'Clean Code'",
        completed: false,
    },
    {
        name: "Clean Toliet",
        completed: false,
    },
    {
        name: "Walk the Dog",
        completed: false,
    },
]


const taskList = document.getElementById('taskList')


taskArr.forEach((task) => {
    taskList.innerHTML += `<div class="taskItem"><p>${task.name}</p></div>`
})