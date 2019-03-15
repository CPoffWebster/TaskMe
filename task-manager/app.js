$(function () {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: '.',
            right: 'title',
        },
        defaultView: 'agendaWeek',
        contentHeight: 600,
        allDaySlot: false,
        selectable: true,
        themeSystem: 'jquery-ui',
        minTime: "07:00:00",
        maxTime: "22:00:00"
    })

});

let button = document.querySelector(".add-task");

document.addEventListener("click", function () {
    console.log("hi");
})