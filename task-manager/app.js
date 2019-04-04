// Variables

//buttons
let addTaskBtn = document.querySelector(".add-task-btn");
let closeBtn = document.querySelector(".close")
let doneBtn = document.querySelector(".doneBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let taskList = document.querySelector(".tasks-list");
let task_item = document.querySelector('.list-display');
let editedTask = false;

//boolean variables
let errorNameCall = true;
let errorDateCall = true;
let errorTimeCall = true;


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
      let hours = document.querySelector(".hours").value;
      let minutes = document.querySelector(".minutes").value;
      let eitherTime = true;

      // if either hours or minutes is filled in
      if(hours != "" || minutes != "") eitherTime = false;

      // Display errors if fields are not filled in
      if(name == "" || date == "" || eitherTime){
        if(errorNameCall){  // display name error
          ui.nameError();
          errorNameCall = false;
        }
        if(errorDateCall){  // display date error
          ui.dateError();
          errorDateCall = false;
        }
        if(errorTimeCall){  // display time error
          ui.timeError();
          errorDateCall = false;
        }

        // remove errors individually
        if(name != "") ui.removeNameError();
        if(date != "") ui.removeDateError();
        if(hours != "" || minutes != "") ui.removeTimeError();

      } else {
        // card is completed without errors, reset card
        if(!editedTask){
          getValue();
        }
        ui.clearValues();
        ui.hideCard();
        ui.removeNameError();
        ui.removeDateError();
        ui.removeTimeError();
        errorNameCall = true;
        errorDateCall = true;
        errorTimeCall = true;
        editedTask = false;
      }
  })

  // When user clicks delete, close modal
  deleteBtn.addEventListener("click", function () {
    deleteBtnAction();
    ui.hideCard();
    ui.clearValues();
  })

  // When the user clicks on <span> (x), close the modal
  closeBtn.addEventListener("click", function () {
    ui.hideCard();
    ui.clearValues();
  })

  // When the presses ESCAPE, close the modal (task popup)
  window.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
          ui.hideCard();
          ui.clearValues();
      }
  };

  // When the user clicks on (x), close the modal
  closeBtn.addEventListener("click", function () {
      ui.clearValues();
      ui.hideCard();
  })

  taskList.addEventListener('click', openTask);
}

/*********************************************************************************
    FUNCTIONS
**********************************************************************************/


// get information about task from user, add to tasks array
function getValue() {
    let name = document.getElementById("taskName").value;
    let dueDate = document.getElementById("dueDate").value;
    let urgency = (document.getElementById("urgency").value) / 10;
    let hours = document.querySelector(".hours").value;
    let minutes = document.querySelector(".minutes").value;
    let editedTask = 0;

    let newTask = new Task(name, dueDate, urgency, hours, minutes, editedTask);
    // add to tasks array
    tasks.push(newTask);
    console.log(tasks);
    // add task to list
    ui.addTaskToList(newTask, taskList, listElements);
}

function setValue(task) {
    document.getElementById("taskName").value = task.name;
    document.getElementById("dueDate").value = task.due;
    document.getElementById("urgency").value = task.urgency*10;
    document.querySelector(".hours").value = task.hours;
    document.querySelector(".minutes").value = task.minutes;
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
    let index = array.indexOf(task);
    if (index > -1) {
        array.splice(index, 1);
    }
    return index;
}

// search task in array
function searchTask (task,  array) {
    let index = array.indexOf(task);
    return index;
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

// delete task from list
function deleteTaskElement(e){
    deleteTask(e.target, listElements)
    e.target.remove();
}

// open the task card
function openTask(e){
    taskIndex = searchTask(e.target, listElements);
    currentTask = tasks[taskIndex];
    currentTask.editedTask = 1;
    currentTaskElement = e;
    ui.displayCard();
    setValue(currentTask);
    editedTask = true;
}

// delete the task
function deleteBtnAction() {
    deleteTask(currentTask, tasks);
    deleteTaskElement(currentTaskElement);
    console.log(listElements);
    console.log(tasks);
}
