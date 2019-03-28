// Variables
let addTaskBtn = document.querySelector(".add-task-btn");
let span = document.querySelector(".close")
let doneBtn = document.querySelector(".doneBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let taskList = document.querySelector(".tasks-list");

const ui = new UI();

// When the user clicks the button, open the modal
addTaskBtn.addEventListener("click", function() {
    ui.displayCard();
})

// When user clicks done, close modal
doneBtn.addEventListener("click", function () {

    // check fields 
    // display error if one field is empy

    // if(one field or more empty)
        // display error for respective field
    // else
    getValue();
    clearValues();
    ui.hideCard();
})

// When user clicks delete, close modal
deleteBtn.addEventListener("click", function () {
    ui.hideCard();
})

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
    ui.hideCard();
})

// When the user clicks on the task section get task?
taskList.addEventListener("click", function () {
    deleteTaskHTML();
})