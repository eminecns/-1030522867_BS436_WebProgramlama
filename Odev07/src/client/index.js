window.onload = function WindowLoad(event) {
    setCards()
}

let cards = ["https://i4.hurimg.com/i/hurriyet/75/750x422/5e5771550f254405d052eb10.jpg","https://i4.hurimg.com/i/hurriyet/75/750x422/5e5771550f254405d052eb10.jpg","https://ichef.bbci.co.uk/news/640/cpsprodpb/16FA9/production/_92712149_gettyimages-480164327.jpg"]
let shownCards = 0

function setCards() {
    shuffleArray(cards)
}

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
}

function showCard (id){
    if (shownCards < 2){
        shownCards++;

        const index = parseInt(id.split("_")[1]);
        document.getElementById(id).src = "images/" + cards[index];
        if(cards[index] === "https://ichef.bbci.co.uk/news/640/cpsprodpb/16FA9/production/_92712149_gettyimages-480164327.jpg"){
            document.getElementById("kazandınID").style = "";
            document.getElementById("alanID").style = "display: none";
            shownCards = 5;
        }
        else if( shownCards ===2 ){
            document.getElementById("kaybettinID").style = "";
            document.getElementById("alanID").style = "display: none";
        }