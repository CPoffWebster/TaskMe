// Variables

//buttons
let addTaskBtn = document.querySelector(".add-task-btn");
let taskCloseBtn = document.getElementById("taskClose");
let taskDoneBtn = document.getElementById("taskDone");
let taskDeleteBtn = document.getElementById("taskDelete");
let sortTaskBtn = document.getElementById("sortTaskBtn");
let scheduleCloseBtn = document.getElementById("scheduleClose");
let scheduleDoneBtn = document.getElementById("scheduleDone");
let scheduleDeleteBtn = document.getElementById("scheduleDelete");
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
const calendarObject = new Calendar();


/*********************************************************************************
    EVENT LISTENERS
**********************************************************************************/

loadEventListeners();

//load all event listeners
function loadEventListeners(){
  document.addEventListener('DOMContentLoaded', function () {
    calendarObject.renderCalendar();
    //calendarObject.addAvaliableTime("2019-04-09", "07:00", "2019-04-09", "20:00");
    //calendarObject.addBusyTime("2019-04-08", "07:00", "2019-04-08", "20:00");
  });

  // When the user clicks the button, open the modal
  addTaskBtn.addEventListener("click", function() {
    ui.displayCard(ui.taskCard);
  })

  // When the user clicks the button, open the modal
  sortTaskBtn.addEventListener("click", function () {
    ui.displayCard(ui.scheduleCard);
  })


  // When user clicks done, close modal
  taskDoneBtn.addEventListener("click", function () {
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
          ui.taskTimeError();
          errorDateCall = false;
        }

        // remove errors individually
        if(name != "") ui.removeNameError();
        if(date != "") ui.removeDateError();
        if(hours != "" || minutes != "") ui.removeTimeError();

      } else {
        // card is completed without errors, reset card
        getValue();
        clearTaskCard();
        editedTask = false;
      }
  })

  // When user clicks done, close modal
  scheduleDoneBtn.addEventListener("click", function () {
    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;

    // Display errors if fields are not filled in
    if (startDate == "" || endDate == "") {
      if (errorNameCall) {  // display name error
        ui.scheduleTimeError();
        errorNameCall = false;
      }
      if (errorDateCall) {  // display date error
        ui.scheduleTimeError();
        errorDateCall = false;
      }

      // remove errors individually
      if (startDate != "" || endDate != "") ui.removeScheduleTimeError();

    } else {
      // card is completed without errors, reset card
      calendarObject.addAvaliableTime(startDate, endDate);
      ui.clearValues("schedule");
      ui.hideCard(ui.scheduleCard);
      ui.removeScheduleTimeError();
      errorTimeCall = true;
      editedSchedule = false;
    }
  })

  // When user clicks delete, close modal
  taskDeleteBtn.addEventListener("click", function () {
    deleteBtnAction();
    ui.hideCard(ui.taskCard);
    ui.clearValues("task");
  })

  // When the user clicks on <span> (x), close the modal
  taskCloseBtn.addEventListener("click", function () {
    clearTaskCard();
  })

  scheduleCloseBtn.addEventListener("click", function () {
    ui.hideCard(ui.scheduleCard);
    ui.clearValues("schedule");
  })

  // When the presses ESCAPE, close the modal (task popup)
  window.onkeydown = function(evt) {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
        clearTaskCard();

        ui.hideCard(ui.scheduleCard);
        ui.clearValues("schedule");
      }
  };

  taskList.addEventListener('click', openTask);
}

function clearTaskCard(){
  ui.hideCard(ui.taskCard);
  ui.clearValues("task");
  ui.removeNameError();
  ui.removeDateError();
  ui.removeTimeError();
  errorNameCall = true;
  errorDateCall = true;
  errorTimeCall = true;
}

/*********************************************************************************
    FUNCTIONS
**********************************************************************************/


// get information about task from user, add to tasks array
function getValue() {
    if(editedTask){
      deleteBtnAction();
      editedTask = false;
    }
    let name = document.getElementById("taskName").value;
    let dueDate = document.getElementById("dueDate").value;
    let urgency = (document.getElementById("urgency").value) / 10;
    let hours = document.querySelector(".hours").value;
    let minutes = document.querySelector(".minutes").value;

    let newTask = new Task(name, dueDate, urgency, hours, minutes);
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
    currentTaskElement = e;
    ui.displayCard(ui.taskCard);
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
