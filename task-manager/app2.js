// Get the modal
let modal = document.querySelector('.modal');

// Get the button that opens the modal
let btn = document.querySelector(".add-task");

// Get the <span> element that closes the modal
let span = document.querySelector(".close")

// When the user clicks the button, open the modal
btn.addEventListener("click", function () {
    modal.style.display = "block";
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
})
