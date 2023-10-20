let firstNum;
let operator;
let secondNum;
let zeroNumber = true;
let selectedOperator = false;

function clear(){
    firstNum = '';
    operator = '';
    selectedOperator = false;
    zeroNumber = true;
    currentText.textContent = "0";
}
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function divide(a,b){
    return a/b
}
function multiply(a,b){
    return a*b;
}
function operate(first, operator, second){
}
let deleteBtn = document.querySelector('[data-delete]');
deleteBtn.addEventListener('click', function(){
    let text = currentText.textContent;
    if (currentText.textContent !== "0"){
        text = text.slice(0,-1)
    }
    currentText.textContent = text;
})


let currentText = document.querySelector('#result');
if (zeroNumber === true){
    currentText.textContent = "0";
}

//adding event Listener to each button
let numberButtons = document.querySelectorAll("[data-number]")
numberButtons.forEach(button => button.addEventListener('click',() => {
    if (zeroNumber){
        zeroNumber = false;
        currentText.textContent = "";
    }
    currentText.textContent += button.textContent }))


let clearButton = document.querySelector('[data-all-clear]')
clearButton.addEventListener('click', () => clear())