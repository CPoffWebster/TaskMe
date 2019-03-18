// Variables
let modal = document.querySelector('.modal');
let openBtn = document.querySelector(".add-task");
let span = document.querySelector(".close")
let doneBtn = document.querySelector(".doneBtn");
let deleteBtn = document.querySelector(".deleteBtn");

// When the user clicks the button, open the modal
openBtn.addEventListener("click", function () {
    modal.style.display = "block";
})

doneBtn.addEventListener("click", function () {
    modal.style.display = 'none';
})

deleteBtn.addEventListener("click", function () {
    modal.style.display = 'none';
})

// When the user clicks on <span> (x), close the modal
span.addEventListener("click", function () {
    modal.style.display = 'none';
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

