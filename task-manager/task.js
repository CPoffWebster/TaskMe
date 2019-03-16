//array to hold task objects
let tasks = [];
//function to get information about task from user
function getValue() {
  let name = document.getElementById("taskName").value;
  let dueDate = new Date(document.getElementById("dueDate").value);
  let urgency = (document.getElementById("urgency").value) / 10;
  let hours = document.querySelector(".hours").value;
  let minutes = document.querySelector(".minutes").value;

  if (isNaN(Date.parse(dueDate))) {
    throw "Invalid Date, needs to be in format: mm/dd/yyyy";
  }
  //make new tasks with name, date, urgency, and hours/minutes to completion
  let newTask = new Task(name, dueDate, urgency, hours, minutes);
  //push new task onto array
  tasks.push(newTask);
  //call method to sort and print tasks to console
  printSort(tasks, 2);
  clearValues();
}

function clearValues() {
  document.getElementById("taskName").value = "";
  document.getElementById("dueDate").value = "";
  document.getElementById("urgency").value = "";
  document.querySelector(".hours").value = "";
  document.querySelector(".minutes").value = "";
}

//task object
function Task(name, due, urgency, hours, minutes) {
  this.name = name;
  this.due = due;
  this.urgency = urgency;
  this.hours = hours;
  this.minutes = minutes;
}
//sort array by different attributes
//compareType is 1 for sorting by name, 2 for due date, 3 for weight, and default is name
function sortTasks(array, compareType) {
  this.array = array;
  switch (compareType) {
    case 1:
      array.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      break;

    case 2:
      array.sort(function (a, b) {
        return b.due.getTime() > a.due.getTime();
      });
      break;

    case 3:
      array.sort(function (a, b) {
        return b.urgency - a.urgency;
      });
      break;

    case 4:
      array.sort(function (a, b) {
        if (b.hours - a.hours != 0) {
          return b.hours - a.hours;
        } else {
          return b.minutes - a.hours;
        }

      });
      break;

    default:
      array.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
  }
}
//sorts tasks and prints them to console
function printSort(array, sortType) {
  this.array = array;
  sortTasks(array, sortType);
  console.log(array);
}