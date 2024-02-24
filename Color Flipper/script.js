const newColourBtnElement = document.getElementById('new-colourBtn');
const currentColorElement = document.getElementById('current-colour');

const hexValues = ['0', '1', '2', '3', '4', '5', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

function randomHexValue () {
    const randomIndex = Math.floor(
        Math.random() * hexValues.length
        )

        return hexValues[randomIndex]
}

function getRandomHexString (stringLength) {
    let hexString = '';
    for (let i = 0; i < stringLength; i++) {
        hexString += randomHexValue()
    }
    return hexString
}

newColourBtnElement.addEventListener('click', () => {
    const randomHexString ='#' + getRandomHexString(6);
    document.body.style.setProperty (
        'background-color', 
        randomHexString
    )
    currentColorElement.textContent = randomHexString
})

