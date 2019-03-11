var tasks = [];
   function getValue() {
      var taskName = prompt("Enter your task name : ", "your task name here");
      var taskDate = prompt("Enter your due date : ", "your due date here");
      var newTask = new task(taskName, taskDate, 1);
      tasks.push(newTask);
      printSort(tasks);
   }
function task(name, due, weight) {
            this.name = name;
            this.due  = due;
            this.weight = weight;
         }
function sortTasks(array, compareType) {
    this.array = array;
    switch (compareType) {
        case 1: array.sort(function(a, b){return a.name.localeCompare(b.name)});
        break;

        case 2: array.sort(function(a, b){return b.due - a.due});
        break;

        case 3: array.sort(function(a, b){return b.weight - a.weight});
        break;

        default: array.sort(function(a, b){return a.name.localeCompare(b.name)});
    }
}
function printSort(array) {
    this.array = array;
    sortTasks(array, 2);
    console.log(array);
}
