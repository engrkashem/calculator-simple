function getDisplay(pressedNumber) {
    const display = document.getElementById('display')
    const previousTexDisplay = display.innerText;
    const currentTextDisplay = previousTexDisplay + pressedNumber;
    display.innerText = currentTextDisplay;
}
const numbersBtn = document.getElementsByClassName('btn-number');
for (const numberBtn of numbersBtn) {
    numberBtn.addEventListener('click', function () {
        const numberBtnText = numberBtn.innerText;
        getDisplay(numberBtnText)
    })
}
