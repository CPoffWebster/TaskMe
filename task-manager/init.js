$(function () {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek',
        },
        defaultView: 'agendaWeek',
        contentHeight: 500,
        allDaySlot: false,
        selectable: true,
        selectHelper: true,
        eventStartEditable: true,
        eventDurationEditable: true,
        themeSystem: 'jquery-ui',
        minTime: "07:00:00",
        maxTime: "22:00:00",

        events: [
            {
              title  : 'event test',
              start  : '2019-03-17T13:30:00',
              end    : '2019-03-17T16:30:00',
            },
        ],

    })

});
