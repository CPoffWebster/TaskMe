//array to hold task objects
var tasks = [];
    //function to get information about task from user
   function getValue() {
      var name = document.getElementById("TaskName").value;
      var dueDate = document.getElementById("DueDate").value;
      var difficulty = document.getElementById("Difficulty").value;
      var hours = document.getElementById("Hours").value;
      var minutes = document.getElementById("Minutes").value;
      //make new tasks with name, date and default weight, 1
      var newTask = new task(name, dueDate, difficulty, hours, minutes);
      //push new task onto array
      tasks.push(newTask);
      //call method to sort and print tasks to console
      printSort(tasks);
   }

//task object
function task(name, due, difficulty, hours, minutes) {
            this.name = name;
            this.due  = due;
            this.difficulty = difficulty;
            this.hours = hours;
            this.minutes = minutes;
         }
//sort array by different attributes
//compareType is 1 for sorting by name, 2 for due date, 3 for weight, and default is name
function sortTasks(array, compareType) {
    this.array = array;
    switch (compareType) {
        case 1: array.sort(function(a, b){return a.name.localeCompare(b.name)});
        break;

        case 2: array.sort(function(a, b){return b.due - a.due});
        break;

        case 3: array.sort(function(a, b){return b.difficulty - a.difficulty});
        break;

        default: array.sort(function(a, b){return a.name.localeCompare(b.name)});
    }
}
//sorts tasks and prints them to console
function printSort(array) {
    this.array = array;
    sortTasks(array, 2);
    console.log(array);
}
