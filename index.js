
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

for (task in taskArr) {
    taskList.innerHTML += '<p>task is rendering</p>'
}