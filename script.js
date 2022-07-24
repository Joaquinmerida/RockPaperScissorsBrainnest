let humanScore = []
let roundDetails = []
let machineScore = []
const buttonsControl = document.getElementById('buttons')
const options = document.querySelectorAll(".options")
const humanCounter = document.getElementById("humanCounter")
const machineCounter = document.getElementById("machineCounter")
const winner = document.getElementById('winner')
const restart = document.getElementById('restart')
const details = document.getElementById('details')

function win(array) {
    array.push('')
}

function gameOver() {
    buttonsControl.classList.add('gameOver')
}

function deleteList(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

restart.addEventListener("click", function (e) {
    let restartHuman = humanScore.length
    let restartMachine = machineScore.length
    roundDetails.splice(0, roundDetails)
    humanScore.splice(0, restartHuman)
    machineScore.splice(0, restartMachine)
    humanCounter.innerText = humanScore.length
    machineCounter.innerText = machineScore.length
    winner.innerText = ""
    buttonsControl.classList.remove('gameOver')
    deleteList(details)
}
)

options.forEach((option) => {
    option.addEventListener("click", function () {
        const humanChoice = this.textContent
        const computerOptions = ["rock", "paper", "scissors"]
        const computerChoice = computerOptions[Math.floor(Math.random() * 3)]
        playRound(humanChoice, computerChoice, humanScore, machineScore)
        humanCounter.innerText = humanScore.length
        machineCounter.innerText = machineScore.length
        if (humanScore.length == 5) {
            winner.innerText = "YOU WIN!!"
            gameOver()
        } else if (machineScore.length == 5) {
            winner.innerText = "COMPUTER WINS!!"
            gameOver()
        }
    })
})

function playRound(userInput, computerInput, humanScore, machineScore) {
    if (userInput === computerInput) {
        roundDetails.push('TIE!')
        showDescript()
    }
    else if (userInput == 'rock') {
        if (computerInput == 'paper') {
            win(machineScore)
            roundDetails.push('Computer Won, paper beats rock!')
            showDescript()
        } else {
            win(humanScore)
            roundDetails.push('Player Won, rock beats scissors!')
            showDescript()
        }
    }
    else if (userInput == 'scissors') {
        if (computerInput == 'rock') {
            win(machineScore)
            roundDetails.push('Computer Won, rock beats scissors!')
            showDescript()
        } else {
            win(humanScore)
            roundDetails.push('Player Won, scissors beats rock!')
            showDescript()
        }
    }
    else if (userInput == 'paper') {
        if (computerInput == 'scissors') {
            win(machineScore)
            roundDetails.push('Computer Won, scissors beats paper!')
            showDescript()
        } else {
            win(humanScore)
            roundDetails.push('Player Won, paper beats rock!')
            showDescript()
        }
    }
}

function showDescript() {
    let li = document.createElement('li')
    let lastDescript = roundDetails.pop()
    li.innerText = lastDescript
    details.appendChild(li)
}
