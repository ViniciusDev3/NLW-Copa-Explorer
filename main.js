function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/Icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/Icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
           ${games}
        </ul>
    </div>
    `
}

function btnYellow() {
    const classChange = document.getElementById("colorChange").classList;
    classChange.remove("green", "blue");
}

function btnBlue() {
    const classChange = document.getElementById("colorChange").classList;
    classChange.add("blue");
    classChange.remove("green");
}

function btnGreen() {
    const classChange = document.getElementById("colorChange").classList;
    classChange.add("green");
    classChange.remove("blue");
}

document.querySelector('#cards').innerHTML = 
    createCard("21/11", "segunda", 
        createGame('Brazil', '08:00', 'Cameroon')
    ) +
    createCard("24/11", "quinta", 
        createGame('Switzerland', '07:00', 'cameroon') + 
        createGame('Portugal', '13:00', 'Ghana') +
        createGame('Brazil', '16:00', 'Serbia')
    ) +
    createCard("28/11", "sexta", 
        createGame('South_Korea', '10:00', 'Ghana') +
        createGame('Brazil', '13:00', 'Switzerland') +
        createGame('Portugal', '16:00', 'Uruguay')
    )
