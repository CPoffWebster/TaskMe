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

    nameErrorFunction() {
      document.getElementById("nameError").innerHTML = "<span style='color: red;'>Name Required.</span>";
    }
    removeNameError(){
      document.getElementById("nameError").innerHTML = "";
    }

    dateErrorFunction(){
      document.getElementById("dateError").innerHTML = "<span style='color: red;'>Due Date Required.</span>";
    }
    removeDateError(){
      document.getElementById("dateError").innerHTML = "";
    }

}
