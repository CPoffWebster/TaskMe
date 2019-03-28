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

}