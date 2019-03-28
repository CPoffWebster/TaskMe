// Variables
let modal = document.querySelector('.modal');
let addTaskBtn = document.querySelector(".add-task");
let span = document.querySelector(".close")
let doneBtn = document.querySelector(".doneBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let task_list = document.querySelector(".tasks-list");
let task_card = document.querySelector(".modal");

// When the user clicks the button, open the modal
addTaskBtn.addEventListener("click", function() {
    task_card.style.display = "block";
})

// When user clicks done, close modal
doneBtn.addEventListener("click", function () {
    getValue();
    clearValues();
    task_card.style.display = "none";

})

// When user clicks delete, close modal
deleteBtn.addEventListener("click", function () {
    task_card.style.display = "none";

})

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
    task_card.style.display = "none";
})

// When the user clicks on the task section get task?
task_list.addEventListener("click", function () {
    deleteTaskHTML();
})