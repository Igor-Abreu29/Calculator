const numbers = document.getElementById("numbers")

function handleInsert(num) {
    numbers.textContent += num;
}

function handleCalcValues() {
    if (numbers.textContent.length === 0) {
        alert("Adicione valores");
        return;
    }
    numbers.textContent = eval(numbers.textContent)
}

function backValues() {
    numbers.textContent = numbers.textContent.substring(0, numbers.textContent.length - 1)
}

function handleResetValue() {
    numbers.textContent = ''
}