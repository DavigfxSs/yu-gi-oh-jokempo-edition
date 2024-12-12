const state = {
    score:{
        playerScore: 0,
        computerScore:0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprites:{
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    fieldCards:{
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    actions: {
    button: document.getElementById("next-duel")
    },
};

const playerSides = {
    player1: "player-cards",
    computer: "computer-cards",
}

const cardData = [
    {
        id:0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: "./src/assets/icons/dragon.png",
        WinOf:[1],
        LoseOf:[2],
    },
    {
        id:1,
        name: "Dark Magician",
        type: "Rock",
        img: "./src/assets/icons/magician.png",
        WinOf:[2],
        LoseOf:[0],
    },
    {
        id:2,
        name: "Exodia",
        type: "Scissors",
        img: "./src/assets/icons/exodia.png",
        WinOf:[0],
        LoseOf:[1],
    }
];

window.onload = function() {
    const rulesPopup = document.getElementById("rules-popup");
    const startButton = document.getElementById("start-button");
    const bgm = document.getElementById("bgm");

    // Exibir o pop-up ao carregar a página
    rulesPopup.style.display = "flex";

    // Quando o botão "Começar" for clicado
    startButton.onclick = function() {
        // Tocar a música
        bgm.play().catch(error => {
            console.warn("A reprodução automática de áudio foi bloqueada.");
        });

        // Esconder o pop-up
        rulesPopup.style.display = "none";

    }
};

function init() {
    drawCards(5, playerSides.player1);
    drawCards(5, playerSides.computer);
}

async function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length)
    return cardData[randomIndex].id
}

async function createCardImage(randomIdCard, fieldSide) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");
    cardContainer.setAttribute("data-id", randomIdCard);

    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("alt", "Verso da carta");

    cardContainer.appendChild(cardImage);

    
    if (fieldSide === playerSides.player1) {
        cardContainer.addEventListener("mouseover", () => {
            drawSelectCard(randomIdCard);
        });

        cardContainer.addEventListener("click", () => {
            setCardsField(cardContainer.getAttribute("data-id"));
        });
    }

    return cardContainer;
}

async function setCardsField(cardId) {
    
     await removeAllCardsImages();

    
    const computerCardId = await getRandomCardId();

    
    if (state.fieldCards.player && state.fieldCards.computer) {
        state.fieldCards.player.src = cardData[cardId].img;
        state.fieldCards.player.alt = cardData[cardId].name;

        state.fieldCards.computer.src = cardData[computerCardId].img;
        state.fieldCards.computer.alt = cardData[computerCardId].name;
    } else {
        console.error("Field card elements not found!");
    }

    async function checkDuelResults(playerCardId, computerCardId) {
        let duelResults = "DRAW"
        let playerCard = cardData[playerCardId]

        if (playerCard.WinOf.includes(computerCardId)) {
            duelResults = "WIN";
            await playAudio(duelResults);
            state.score.playerScore++;
        }

        if (playerCard.LoseOf.includes(computerCardId)) {
            duelResults = "LOSE";
            await playAudio(duelResults);
            state.score.computerScore++;
        }
        return duelResults
    }

    let duelResults = await checkDuelResults(cardId, computerCardId);

    
    await updateScore();
    await drawButton(duelResults);
    
    async function removeAllCardsImages() {
        const computerCards = document.querySelector("#computer-cards");
        const playerCards = document.querySelector("#player-cards");
    
        if (computerCards) {
            const computerCardElements = computerCards.querySelectorAll(".card");
            computerCardElements.forEach((card) => card.remove());
        } else {
            console.warn("Element #computer-cards not found!");
        }
    
        if (playerCards) {
            const playerCardElements = playerCards.querySelectorAll(".card");
            playerCardElements.forEach((card) => card.remove());
        } else {
            console.warn("Element #player-cards not found!");
        }
        
    }

    
    
    


    
}

async function drawButton(text) {
    console.log(state.actions.button);
    state.actions.button.innerText = text;
    state.actions.button.style.display = "block";
}

async function updateScore() {
    state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}` 
}




async function  drawSelectCard(index) {
  state.cardSprites.avatar.src = cardData[index].img;
  state.cardSprites.name.innerText = cardData[index].name;
  state.cardSprites.type.innerText = `Atribute: ${cardData[index].type}`;
}

async function drawCards(cardNumbers, fieldSide) {
    for(let i = 0; i < cardNumbers; i++) {
    const randomIdCard = await getRandomCardId();
    const cardImage = await createCardImage(randomIdCard, fieldSide);
    
        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

async function resetDuel() {
    state.cardSprites.avatar.src = "";
    state.actions.button.style.display = "none";

    // Em vez de esconder as cartas diretamente, vamos limpar as imagens.
    state.fieldCards.player.innerHTML = "";
    state.fieldCards.computer.innerHTML = "";

    // Reiniciar a partida
    init();
}


async function playAudio(status) {
    const audio = new Audio(`./src/assets/audios/${status}.wav`);
    audio.play();
}

function init() {
    drawCards(5, playerSides.player1);
    drawCards(5, playerSides.computer);
    const bgm = document.getElementById("bgm");
    bgm.volume = 0.2;
    bgm.play()
}

init();