
// Variables
let tasks = [];
let tasksNode = [];
let list = document.querySelector(".tasks-list");

//function to get information about task from user
function getValue() {
  let name = document.getElementById("taskName").value;
  let dueDate = new Date(document.getElementById("dueDate").value);
  let urgency = (document.getElementById("urgency").value) / 10;
  let hours = document.querySelector(".hours").value;
  let minutes = document.querySelector(".minutes").value;

  //make new tasks with name, date, urgency, and hours/minutes to completion
  let newTask = new Task(name, dueDate, urgency, hours, minutes);
  //push new task onto array
  tasks.push(newTask);
  //add task to list
  let entry = document.createElement('li');
  let taskNode = document.createTextNode(newTask.name);
  tasksNode.push(entry);
  entry.appendChild(taskNode);
  list.appendChild(entry);
  clearValues();
  console.log(tasks);
}

function displayError(div){
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error';
  errorDiv.innerHTML = '<p>Name Required.</p>';
  errorDiv.style.color = 'red';
  div.appendChild(errorDiv);
}

// clear values in task card
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
//compareType is:
//1 for sorting by name
//2 for due date
//3 for weight
//default is name
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

function deleteTask (task,  array) {
    var index = array.indexOf(task);
    if (index > -1) {
        array.splice(index, 1);
    }
    //return
}

function deleteTaskPop () {
    tasks.pop();
}

function deleteTaskHTML () {
    elem = tasksNode.pop();
    elem.parentNode.removeChild(elem);
    deleteTaskPop();
}

//sorts tasks and prints them to console
function printSort(array, sortType) {
  this.array = array;
  sortTasks(array, sortType);
  console.log(array);
}
