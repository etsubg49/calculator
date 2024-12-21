let resultDisplayed = false;

function clearDisplay() {
    document.getElementById('display').innerText = '0';
    resultDisplayed = false; // Clear result flag
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (resultDisplayed && !isOperator(value)) {
        display.innerText = value;
        resultDisplayed = false; // Clear result flag
    } else if (display.innerText === '0' && value !== '.') {
        if(isOperator(value)){ display.innerText += value;}
        else{display.innerText = value;}
        
        resultDisplayed = false;
    } else {
        display.innerText += value;
        resultDisplayed = false;
    }
}

function deleteLastCharacter() { 
    var display = document.getElementById('display'); 
    display.innerText = display.innerText.slice(0, -1);
    if(display.innerText===''){
        display.innerText='0';
    }
}

function calculate() {
    const display = document.getElementById('display');
    let expression = display.innerText;
    if (/\/0/.test(expression)) { 
        display.innerText = 'Error'; 
        resultDisplayed = true; }
        return;
        
    try {
        display.innerText = eval(display.innerText);
        resultDisplayed = true; // Set result flag
    } catch {
        display.innerText = 'Error';
        resultDisplayed = true; // Set result flag
    }
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}
