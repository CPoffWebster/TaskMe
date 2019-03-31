class UI{

    constructor(){
        this.taskCard = document.querySelector('.modal');
    }

    displayCard(){
        this.taskCard.style.display = 'block';
    }

    hideCard(){
        this.taskCard.style.display = 'none';
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

    deleteTaskFromList(){
        let elem = listElements.pop();
        elem.parentNode.removeChild(elem);
        console.log(listElements);
    }

    // clear values in task card
    clearValues() {
        document.getElementById("taskName").value = "";
        document.getElementById("dueDate").value = "";
        document.getElementById("urgency").value = "";
        document.querySelector(".hours").value = "";
        document.querySelector(".minutes").value = "";
    }


    /*********************************************************************************
      Task Card Errors
    **********************************************************************************/

    // name error call and remove
    nameError() {
      document.getElementById("nameError").innerHTML = "<span style='color: red;'>Name Required.</span>";
    }
    removeNameError(){
      document.getElementById("nameError").innerHTML = "";
    }

    // date error call and remove
    dateError(){
      document.getElementById("dateError").innerHTML = "<span style='color: red;'>Due Date Required.</span>";
    }
    removeDateError(){
      document.getElementById("dateError").innerHTML = "";
    }

    // time error call and remove
    timeError(){
      document.getElementById("timeError").innerHTML = "<span style='color: red;'>Expected Time Required.</span>";
    }
    removeTimeError(){
      document.getElementById("timeError").innerHTML = "";
    }

}
