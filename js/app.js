const diceOneButton = () => {
    const randomNumber = Math.floor(Math.random() * (6) + 1)

    if (randomNumber > 0) {
        if (randomNumber === 1) {
            image = "./images/dice1.png";
            score = 1;
        }
        else if (randomNumber === 2) {
            image = "./images/dice2.png";
            score = 2;

        }
        else if (randomNumber === 3) {
            image = "./images/dice3.png";
            score = 3;

        }
        else if (randomNumber === 4) {
            image = "./images/dice4.png";
            score = 4;

        }
        else if (randomNumber === 5) {
            image = "./images/dice5.png";
            score = 5;

        }
        else if (randomNumber === 6) {
            image = "./images/dice6.png";
            score = 6;

        }

        image2 = document.querySelector(".img1").setAttribute('src', image);


    }
    else {
        image = "./images/dice6.png";
        score = 6;
    }

    return score;
}
const diceTwoButton = () => {
    const randomNumber = Math.floor(Math.random() * (6) + 1)

    if (randomNumber > 0) {
        if (randomNumber === 1) {
            image = "./images/dice1.png";
            score = 1;
        }
        else if (randomNumber === 2) {
            image = "./images/dice2.png";
            score = 2;

        }
        else if (randomNumber === 3) {
            image = "./images/dice3.png";
            score = 3;

        }
        else if (randomNumber === 4) {
            image = "./images/dice4.png";
            score = 4;

        }
        else if (randomNumber === 5) {
            image = "./images/dice5.png";
            score = 5;

        }
        else if (randomNumber === 6) {
            image = "./images/dice6.png";
            score = 6;

        }

        image2 = document.querySelector(".img2").setAttribute('src', image);
        return score;

    }
    else {
        image = "./images/dice6.png";
        score = 6;
    }

    return score;


}


if (diceTwoButton() === diceOneButton()) {
    let defaultState = document.querySelector('h1')
    defaultState.innerHTML = 'Draw';
    defaultState.style.fontSize = "50px";


} else if (diceTwoButton() > diceOneButton()) {
    let computer = document.querySelector('h1')
    computer.innerHTML = 'Computer Wins';
    computer.style.fontSize = "50px";
    computer.style.color = 'red';

} else {

    let player = document.querySelector('h1')
    player.innerHTML = 'You Win';
    player.style.fontSize = "50px";
    player.style.color = 'yellow';

}
