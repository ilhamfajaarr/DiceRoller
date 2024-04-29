function roll(){
    const numofdice = document.getElementById("input").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
    const values = [];
    const images = [];

    for(let i = 0; i < numofdice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dices/${value}.png" style="width: 100px; height: 100px;">`);
    }

    diceresult.textContent = `Dice : ${values.join(', ')}`;
    diceimages.innerHTML = images.join('');
}