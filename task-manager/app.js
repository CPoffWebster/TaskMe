// Variables
let modal = document.querySelector('.modal');
let addTaskBtn = document.querySelector(".add-task");
let span = document.querySelector(".close")
let doneBtn = document.querySelector(".doneBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let task = document.querySelector(".tasks-list");
let task_card = document.querySelector(".task-card");

// When the user clicks the button, open the modal
addTaskBtn.addEventListener("click", function() {
    displayCard();
    //modal.style.display = "block";
})

doneBtn.addEventListener("click", function () {
    hideCard();
})

deleteBtn.addEventListener("click", function () {
    hideCard();
})

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
    hideCard();
})

// When the user clicks on the task section get task?
task.addEventListener("click", function () {
    deleteTaskHTML();
    modal.style.display = "block";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function (e) {
    if (e.target == modal) {
        //modal.style.display = 'none';
    }

    // When the presses ESCAPE, close the modal
    window.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            modal.style.display = 'none';
        }
    };
});

function displayCard(){
    task_card.innerHTML = `
    <div class='modal'>
        <div class="modal-content">
            <div class="modal-header">
                <span class="close">&times;</span>
            </div>
              <div class="modal-body">
                <div class="wrapper">
                  <h1>Add Task</h1>
                  <form class='form'> 
                    <h4>Task Name:</h4>
                    <div class="input-test">
                      <input type="text" placeholder="Task" id="taskName" value=""/>
                    </div>
                    <h4>Due Date</h4>
                    <input type="date" placeholder="mm/dd/yyyy" id="dueDate" value=""/>
                    <h4>Urgency</h4>
                    <span>1</span> <input type="range" id="urgency"/> <span>10</span>

                    <h4>Expectect Length</h4>
                    <h8>Hours</h8>
                    <input type="number" placeholder="0" class="hours" min="0" max="100"/>

                    <h8>Minutes</h8>
                    <input type="number"placeholder="0" class="minutes" min="0" max="60"/>
                    <input class="doneBtn" type="button" value="Done"/>
                    <input class="deleteBtn" type="button" value="Delete"/>
                  </form>
                </div>
              </div>
            <div class="modal-footer"> </div>
        </div>
    </div>
    `;
}

function hideCard(){
    task_card.style.display = 'none';
}
