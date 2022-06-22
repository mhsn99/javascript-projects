// Taking input process
const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let displayValue = "0";
let firstValue = null;
let operator = null;
let waitingforSecondValue = false;


updateDisplay();


// update the screen
function updateDisplay() {
    display.value = displayValue;
}

// button click events
keys.addEventListener('click', function(e){
    const element = e.target;
    if(!element.matches('button')) return; // element is not button ?

    switch (element.value) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "=":
            handleOperator(element.value);
            break;
        case ".":
            inputDecimal();
            break;
        case "clear":
            clear();
            break;
        default:
            inputNumber(element.value);
            break;
    }    
    updateDisplay();
});

function inputNumber(num){
    if (waitinforSecondValue) {
        displayValue = num;
        waitingforSecondValue = false;
    }else{
        displayValue = displayValue === "0" ? num: displayValue + num;
    }
    
    displayValue = displayValue === "0" ? num: displayValue + num;
}

// add dot
function inputDecimal(){
    if(!displayValue.includes(".")){
        displayValue += ".";
    }
}

// clear the screen
function clear(){
    displayValue = "0";
}

function handleOperator(opr){
    const value = parseFloat(displayValue);

    if(operator && waitingforSecondValue){
        operator = opr;
        return;
    }

    if(firstValue === null){
        firstValue = value;
    }else if(operator){
        const result = calculate(firstValue, value, operator);
        displayValue = String(result);
        firstValue = result;
    }

    waitingforSecondValue = true;
    operator = opr;
}

// calculating
function calculate(first, second, opr){
    if (opr === "+") {
        return first + second;
    } else if (opr === "-") {
        return first - second;
    } else if (opr === "*") {
        return first * second;
    } else if (opr === "/") {
        return first / second;
    }
    return second;
}