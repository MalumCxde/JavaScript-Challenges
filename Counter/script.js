const addBtnElement = document.getElementById('counterAdd')
const subBtnElement = document.getElementById('counterSub')
const counterDisplayElement = document.getElementById('counterDisplay')

let total = 0
const limit = 15

const updateDisplay = () => {
    if (total > limit) {
        total = limit
    } 
    if (total < 0) {
        total = 0
    }
    counterDisplayElement.textContent = total
    document.body.style.setProperty(
        'background-color', 
        `rgb(${(total / limit) * 255}, 64, 0)`
    )
}

addBtnElement.addEventListener('click', () => {
    total += 1;

    updateDisplay()
})

subBtnElement.addEventListener('click', () => {
    total -= 1;
    updateDisplay()
});

updateDisplay()