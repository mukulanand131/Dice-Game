var p1 = Math.random();
p1 = p1 * 6;
p1 = Math.floor(p1);
p1 = p1 + 1;

// To get the name of image file to put into src = ""
sr1 = "./images/dice" + p1 + ".png";

// To get the name of image file to put into src = ""
var p2 = Math.random();
p2 = p2 * 6;
p2 = Math.floor(p2);
p2 = p2 + 1;

sr2 = "./images/dice" + p2 + ".png";



document.querySelector("body > div > div:nth-child(2) > img").setAttribute("src", sr1);

document.querySelector("body > div > div:nth-child(3) > img").setAttribute("src", sr2);

// var winner;
if (p1 === p2) {
    document.querySelector("h1").innerHTML = "It is tie !";
    document.querySelector("body > div > h1").classList.add("hc");
}
else if (p1 > p2) {
    // winner = 1;
    document.querySelector("h1").innerHTML = "🚩 Player 1 is winner";
}
else {
    // winner = 2;
    document.querySelector("h1").innerHTML = "Player 2 is winner 🚩";
}

// document.querySelector("body > div > h1").classList.add("hc");
