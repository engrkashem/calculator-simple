function clr() {
    const value = document.getElementById('display');
    value.innerText = '';
}
function display(text) {
    const currentValue = document.getElementById('display');
    currentValue.innerText += text;
    return currentValue;
}
function solve() {
    const inputs = document.getElementById('display').innerText;
    const result = eval(inputs);
    document.getElementById('display').innerText = result;
}
