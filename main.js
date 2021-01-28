let allButtons = document.querySelectorAll('button')
let allNumbers = document.querySelectorAll(".number")
let allOperators = document.querySelectorAll(".operation")
let outputDisplay = document.querySelector(".output")
let clearButton = document.querySelector('#clear')
let equalButton = document.querySelector('#equal')
outputDisplay.innerHTML = ""

// get display to work
 for (let key of allNumbers) {
     key.addEventListener('click' event => {
         console.log(event.target)
         if (event.target.innerHTML === '=') {
             console.log(outputDisplay)
             outputDisplay.innterHTML = eval(outputDisplay.innerHTML);
         }
     })
 }







// collect info from buttons

// for (let buttons of allButtons) {
//     buttons.addEventListener('click', event => {
//         console.log()
//     }
//     });
//         if 
















