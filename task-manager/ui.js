class UI{

    constructor(){
      this.taskCard = document.getElementById("taskCard")
      this.scheduleCard = document.getElementById("scheduleCard")
    }

    displayCard(modal){
        modal.style.display = 'block';
    }

    hideCard(modal){
        modal.style.display = 'none';
    }

    addTaskToList(task, list, listElements){
        let entry = document.createElement('li');
        entry.classList.add('list-display');
        let taskNode = document.createTextNode(task.name);
        entry.appendChild(taskNode);
        list.appendChild(entry);
        // save li element
        listElements.push(entry);
        console.log(listElements);
    }


    // clear values in task card
    clearValues(modal) {
      if (modal == "task"){
        document.getElementById("taskName").value = "";
        document.getElementById("dueDate").value = "";
        document.getElementById("urgency").value = "";
        document.querySelector(".hours").value = "";
        document.querySelector(".minutes").value = "";
      }
      else { 
        document.getElementById("startDate").value = "";
        document.getElementById("endDate").value = "";
      }
    }


    /*********************************************************************************
      Task Card Errors
    **********************************************************************************/

    // name error call and remove
    nameError() {
      document.getElementById("taskNameError").innerHTML = "<span style='color: red;'>Name Required.</span>";
    }
    removeNameError(){
      document.getElementById("taskNameError").innerHTML = "";
    }

    // date error call and remove
    dateError(){
      document.getElementById("taskDateError").innerHTML = "<span style='color: red;'>Due Date Required.</span>";
    }
    taskTimeError() {
      document.getElementById("taskTimeError").innerHTML = "<span style='color: red;'>Expected Time Required.</span>";
    }

    removeDateError(){
      document.getElementById("taskDateError").innerHTML = "";
    }

    // time error call and remove
    removeTimeError(){
      document.getElementById("taskTimeError").innerHTML = "";
    }
    // schedule card time error call and remove
    scheduleTimeError() {
      document.getElementById("startDateError").innerHTML = "<span style='color: red;'>Expected Time Required.</span>";
      document.getElementById("endDateError").innerHTML = "<span style='color: red;'>Expected Time Required.</span>";
    }
    removeScheduleTimeError() {
      document.getElementById("startDateError").innerHTML = "";
      document.getElementById("endDateError").innerHTML = "";
    }

}
