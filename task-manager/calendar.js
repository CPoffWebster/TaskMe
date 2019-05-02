var calendarEl;
var calendar;
//make 3D array for storing when there are events already?

class Calendar {
    constructor(){
        calendarEl = document.getElementById('calendar');

        calendar = new FullCalendar.Calendar(calendarEl, {
          plugins: [ 'dayGrid' , 'timeGrid', 'interaction', 'bootstrap', 'list', 'googleCalendar' ],
          displayEventTime: false,
          //googleCalendarApiKey: 'insert here',
          /*events: {
            googleCalendarId: 'insert here',
            color: 'yellow'
          },*/
          events: [
            {
              title: 'Event1',
              start: '2019-04-20'
            },
            {
              title: 'Event2',
              start: '2019-04-21'
            }
          ],
          //events: 'en.usa#holiday@group.v.calendar.google.com',
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
          });

          calendar.render();
    }
    addAvaliableTime(dateBeginning, timeBeginning, dateEnd, timeEnd){
        var begin = new Date(dateBeginning + 'T' + timeBeginning + ':00'); // will be in local time
        var end = new Date(dateEnd + 'T' + timeEnd + ':00'); // will be in local time
        if (!isNaN(begin.valueOf()) && !isNaN(end.valueOf())) { // valid?
            calendar.addEvent({
            title: 'avaliable time',
            start: begin,
            end: end
            });
        }
    }
    addBusyTime(dateBeginning, timeBeginning, dateEnd, timeEnd){
        var begin = new Date(dateBeginning + 'T' + timeBeginning + ':00'); // will be in local time
        var end = new Date(dateEnd + 'T' + timeEnd + ':00'); // will be in local time
        if (!isNaN(begin.valueOf()) && !isNaN(end.valueOf())) { // valid?
            calendar.addEvent({
            title: 'busy time',
            start: begin,
            end: end,
            backgroundColor: "#ff471a", //red, but not too red
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const calendarObject = new Calendar();
    //alert("hi");
    let testMe = calendar.getEventSources();
    //eventSource.refetch(testMe);
    console.log(testMe);


    //calendarObject.addAvaliableTime("2019-04-09", "07:00", "2019-04-09", "20:00");
    //calendarObject.addBusyTime("2019-04-08", "07:00", "2019-04-08", "20:00");
      });
