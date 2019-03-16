$(function () {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: '.',
            right: 'title',
        },
        defaultView: 'agendaWeek',
        contentHeight: 500,
        allDaySlot: false,
        selectable: true,
        themeSystem: 'jquery-ui',
        minTime: "07:00:00",
        maxTime: "22:00:00"
    })

});