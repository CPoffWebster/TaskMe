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

    displayError(){
        
    }

    addTaskToList(){
        
    }
    // function displayError(div){
    //     const errorDiv = document.createElement('div');
    //     errorDiv.className = 'error';
    //     errorDiv.innerHTML = '<p>Name Required.</p>';
    //     errorDiv.style.color = 'red';
    //     div.appendChild(errorDiv);
    //   }

}