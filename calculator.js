let operation = '';
let currentValue = '';
let previousValue = '';

let clearBtn = document.querySelector('[data-all-clear]')
let deleteBtn = document.querySelector('[data-delete]');
let currentText = document.querySelector('#result');
let numBtns = document.querySelectorAll('[data-number]')
let operatorBtns = document.querySelectorAll('[data-operator]')
let operationScreen = document.querySelector('#operations')
let equalButton = document.querySelector('[data-equals]')
let decimalButton = document.querySelector('#decimal')

//boolean variable to check if the initial value is 0 so that it can get replaced upon input
let zeroNumber = true;
let selectedOperator = false;
//displays the current operation
let currentOperation = document.querySelector('#operations');

function clear(){
    currentText.textContent = "0";
    currentValue = '';
    previousValue = '';
    operationScreen.textContent = currentValue;
    currentText.textContent = currentValue;
    
}
//clears display
clearBtn.addEventListener('click', () => clear());
//deletes values one by one.
deleteBtn.addEventListener('click', function(){
    let text = currentText.textContent;
    if (currentText.textContent !== "0"){
        text = text.slice(0,-1)
    }
    currentText.textContent = text;
    currentValue = currentText.textContent;
})
//displays the result
if (zeroNumber === true){
    currentText.textContent = "0";
}


//////fully ready solutions above
function handleNum(number){
    if (currentValue.length <= 8){
        currentValue += number;
    }
}

//give functionality to each number button
numBtns.forEach(button => button.addEventListener('click', () => {
    handleNum(button.textContent);
    currentText.textContent = currentValue;
}))


operatorBtns.forEach(button => button.addEventListener('click', () => {
    previousValue = currentValue;
    currentValue = '';
    operation = button.textContent;
    operationScreen.textContent = previousValue + " " + operation
    console.log(previousValue);
    console.log(currentValue);
}))

equalButton.addEventListener('click', () => {
    if (previousValue !== "" && currentValue != ""){
        calculation();
        operationScreen.textContent = ""
        if (previousValue.length <= 8){
            currentText.textContent = previousValue;
        }
        else{
            currentText.textContent = previousValue.slice(0,8) + "...."
        }
        console.log(currentValue);
    }
})

function calculation(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if (operation === "*"){
        previousValue *= currentValue;
    }
    else if (operation === "/"){
        if (currentValue === 0){
            alert('Cannot divide by zero!')
            currentText.textContent = previousValue;
        }
        previousValue /= currentValue;
    }
    else if (operation === "+"){
        previousValue += currentValue;
    }
    else{
        previousValue -= currentValue;
    }
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
    console.log(previousValue);
}

function roundNumber(number){
    return Math.round(number * 1000) / 1000;
}

decimalButton.addEventListener('click', () => {
    addDecimal();
})

function addDecimal(){
    if (!currentValue.includes(".")){
        currentValue += "."
    }
}