counter = 0;
const counterNumber = document.querySelector(".counter-number");
const handleIncreaseBtn = () =>{
    counter ++;
    counterNumber.textContent = counter;
    if(counter > 0){
        counterNumber.style.color = "#008000";
    }
}

const handleDecreaseBtn = () =>{
    counter--;
    counterNumber.textContent = counter;
    if(counter < 0){
        counterNumber.style.color = "#ff0000";
    }
}

const handleResetBtn = () =>{
    counter = 0;
    counterNumber.textContent = counter;
    if(counter === 0){
        counterNumber.style.color = "#000";
    }
}