// Variables
let addTaskBtn = document.querySelector(".add-task-btn");
let closeBtn = document.querySelector(".close")
let doneBtn = document.querySelector(".doneBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let taskList = document.querySelector(".tasks-list");
let task_item = document.querySelector('.list-display');

let tasks = []; // array of tasks
let listElements = []; // li elements
let currentTask = new Task();
let currentTaskElement;

const ui = new UI();


/*********************************************************************************
    EVENT LISTENERS
**********************************************************************************/

loadEventListeners();

//load all event listeners
function loadEventListeners(){
  // When the user clicks the button, open the modal
  addTaskBtn.addEventListener("click", function() {
    ui.displayCard();
  })

// When user clicks done, close modal
doneBtn.addEventListener("click", function () {
    let name = document.getElementById("taskName").value;
    let date = document.getElementById("dueDate").value;

    if(name == "" || date == ""){
      if(errorNameCall){
        ui.nameErrorFunction();
        errorNameCall = false;
      }
      if(errorDateCall){
        ui.dateErrorFunction();
        errorDateCall = false;
      }
      if(name != "") ui.removeNameError();
      if(date != "") ui.removeDateError();

    }
    else{
      getValue();
      ui.clearValues();
      ui.hideCard();
      ui.removeNameError();
      ui.removeDateError();
      errorNameCall = true;
      errorDateCall = true;
    }
})

// When user clicks delete, close modal
deleteBtn.addEventListener("click", function () {
    ui.clearValues();
    ui.hideCard();
    deleteBtnAction();
})

// When the user clicks on <span> (x), close the modal
closeBtn.addEventListener("click", function () {
    ui.clearValues();
    ui.hideCard();
})

// When the user clicks on the task section get task?
taskList.addEventListener("click", function () {
    ui.deleteTaskFromList();
    deleteTaskPop();
})



/*********************************************************************************
    FUNCTIONS
**********************************************************************************/


//get information about task from user, add to tasks array
function getValue() {
    let name = document.getElementById("taskName").value;
    let dueDate = new Date(document.getElementById("dueDate").value);
    let urgency = (document.getElementById("urgency").value) / 10;
    let hours = document.querySelector(".hours").value;
    let minutes = document.querySelector(".minutes").value;

    //make new tasks with name, date, urgency, and hours/minutes to completion
    let newTask = new Task(name, dueDate, urgency, hours, minutes);
    // add to tasks array
    tasks.push(newTask);
    // print task array to console
    console.log(tasks);
    // add task to list
    ui.addTaskToList(newTask, taskList, listElements);
}

function setValue(task) {
    date = task.due;
    dateString = (date.getMonth()+1) + "/" + (date.getDate()) + "/" + date.getFullYear();
    document.getElementById("taskName").value = task.name;
    document.getElementById("dueDate").value = dateString;//not displaying
    document.getElementById("urgency").value = task.urgency*10;
    document.querySelector(".hours").value = task.hours;
    document.querySelector(".minutes").value = task.minutes;
    console.log(document.getElementById("dueDate").value);
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
    return index;
}

function searchTask (task,  array) {
    var index = array.indexOf(task);
    return index;
    //return
}

// delete task from array
function deleteTaskPop () {
    tasks.pop();
}

//sorts tasks and prints them to console
function printSort(array, sortType) {
  this.array = array;
  sortTasks(array, sortType);
  console.log(array);
}

function deleteTaskElement(e){
    deleteTask(e.target, listElements)
    e.target.remove();
}

function openTask(e){
    taskIndex = searchTask(e.target, listElements);
    currentTask = tasks[taskIndex];
    currentTaskElement = e;
    ui.displayCard();
    setValue(currentTask);
}

function deleteBtnAction() {
    deleteTask(currentTask, tasks);
    deleteTaskElement(currentTaskElement);
    console.log(listElements);
    console.log(tasks);
}
