var calendarEl;
var calendar;

class Calendar {
    constructor(){
            var calendarEl = document.getElementById('calendar');

            var calendar = new FullCalendar.Calendar(calendarEl, {
              plugins: [ 'dayGrid' , 'timeGrid', 'interaction', 'bootstrap'],
              defaultView: 'timeGridWeek',
              themeSystem: 'standard',
              header: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek',
              },
              minTime: "07:00:00",
              maxTime: "22:00:00",
              contentHeight: 500,
              selectable: true,
              allDaySlot: false,
              eventStartEditable: true,
              eventDurationEditable: true,
              events: [],
            });

            calendar.render();}
}

document.addEventListener('DOMContentLoaded', function() {
    const calendarObject = new Calendar();
      });
