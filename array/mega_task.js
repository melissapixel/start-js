// List of tasks
// do funcrion: 
// 1.add tasks in end list of tasks
// 2. delete task for it name
// 3. replace task in 1-fist place for it name
// original array ALWAYS митуруется

const tasks = ["Task 1", "Task 2", "Task 4", "Task 5"];

function createTask (listOfTasks, newTask) {
    listOfTasks.push(newTask);
    return listOfTasks;
}
function deleteTask (listOfTasks, whatTask) {
    let indexTask = listOfTasks.indexOf(whatTask);
    let array = listOfTasks.splice(indexTask, 1);
    return listOfTasks;
}
function replaceTask (listOfTasks, whatTask) {
    let indexTask = listOfTasks.indexOf(whatTask);
    let task = listOfTasks.splice(indexTask, 1);
    listOfTasks.unshift(task);
    return listOfTasks;
}

// console.log(createTask(tasks, "Task 3"));
// console.log(deleteTask(tasks, "Task 2"));
console.log(replaceTask(tasks, "Task 4"));