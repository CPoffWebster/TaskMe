// Get the modal
let modal = document.querySelector('.modal');

// Get the button that opens the modal
let openBtn = document.querySelector(".add-task");

// Get the <span> element that closes the modal
let span = document.querySelector(".close")

// Get the button that closes the modal (done AND delete)
let doneBtn = document.querySelector(".doneBtn");

// Get the button that closes the modal (done AND delete)
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

// Hides text
//function hideNameWarning() {
  //document.getElementById("noName").style.visibility = "hidden";




})
