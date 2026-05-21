
let computerNumber
let userNumbers = []
let attemps = 0
let maxguesses = 10

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
}

function newGame() {
    window.location.reload()
}

function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    if (attemps < 10) {
    if (userNumber > 100){
        document.getElementById('textOutput').innerHTML = 'Your number is greater than the limit.'
    } else {
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

    if (userNumber > computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Your number is high'
        document.getElementById('inputBox').value = ''
        attemps++
        document.getElementById('attempts').innerHTML = attemps
    } else if (userNumber < computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Your number is low'
        document.getElementById('inputBox').value = ''
        attemps++
        document.getElementById('attempts').innerHTML = attemps
    } else {
        document.getElementById('textOutput').innerHTML = 'YOU GOT IT RIGHT! CONGRATULATIONS!'
        attemps++
        document.getElementById('attempts').innerHTML = attemps
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }
}
    } else {
        document.getElementById('textOutput').innerHTML = 'Your attempts are over. The computer number was ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
}
}