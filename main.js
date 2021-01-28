let allButtons = document.querySelectorAll(".button")
let allNumbers = document.querySelectorAll(".number")
let allOperators = document.querySelectorAll(".operation")


for (let buttons of allButtons) {
    buttons.addEventListener('click', event => {
        console.log(event.target);
        display.innerHTML = key;
    });
        if 
















