let allButtons = document.querySelectorAll(".button")
let allNumbers = document.querySelectorAll(".number")
let allOperators = document.querySelectorAll(".operation")


for (let buttons of allButtons) {
    buttons.addEventListener('click', event => {
        console.log(event.target.class)
    }
}











// let buttonsArray = document.querySelectorAll("button")
// for (let key of buttonsArray) {
//     key.addEventListener('click', event => {
//         console.log(event.target);
//         display.innerHTML = key;
//     });
//         if (event.target.innerHTML === '=') {
//             console.log(display.innerHTML)
//             display.innerHTML = eval(display.innerHTML);
//         }
//         else if (event.target.innerHTML === 'C') {
//             display.innerHTML = ' '
//         }
//         else if (display.innerHTML === '0' && event.target.innerHTML === '0') {
//             display.innerHTML = '0'
//         }
//         else if (event.target.innerHTML === 'X') {
//             display.innerHTML = [display.innerHTML, '*'].join('');
//         }
//         else {
//             display.innerHTML = [display.innerHTML, event.target.innerHTML].join('');
//         }