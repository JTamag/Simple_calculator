
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}
function calculateResult() {
    try {
    display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}
function Deletechar() {
    display.value = display.value.slice(0, -1);
}