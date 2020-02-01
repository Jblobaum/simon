let simonButton = document.getElementsByClassName("simonButton");
let red = document.getElementById("red");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");



let counter = 0;
let round = 0;
let simonArray = [];
let arrayMax = 100;
let limit = arrayMax + 1;
for (var i = 0; i < arrayMax; i++) {
    simonArray.push(Math.floor(Math.random() * 4));
}
console.log(simonArray)

let comp
function computerChoice() {
    if (counter > round) {
        let counter = 0;
    } else {
        let comp = simonArray[counter];
        if (comp === 0) {
            document.getElementById("red").classList.add("active");
            setTimeout(function () {
                document.getElementById("red").classList.remove("active");
                counter++;
                computerChoice()
            }, 500)
        } else if (comp === 1) {
            document.getElementById("green").classList.add("active");
            setTimeout(function () {
                document.getElementById("green").classList.remove("active");
                counter++;
                computerChoice()
            }, 500)
        } else if (comp === 2) {
            document.getElementById("yellow").classList.add("active");
            setTimeout(function () {
                document.getElementById("yellow").classList.remove("active");
                counter++;
                computerChoice()
            }, 500)
        } else if (comp === 3) {
            document.getElementById("blue").classList.add("active");
            setTimeout(function () {
                document.getElementById("blue").classList.remove("active");
                counter++;
                computerChoice()
            }, 500)
        }
    } return simonArray[counter]
}


// console.log(simonArray[counter])
computerChoice()

for (i = 0; i < simonButton.length; i++) {
    simonButton[i].addEventListener("mousedown", function () {
        this.classList.add("active");

    })
}
for (i = 0; i < simonButton.length; i++) {
    simonButton[i].addEventListener("mouseup", function () {
        this.classList.remove("active");
        let userNum = parseInt(this.innerHTML)
        let gameNum = parseInt(simonArray[counter - 1]);
        // console.log(userNum)
        // console.log(simonArray[counter]);
        console.log(gameNum);
        if (userNum = gameNum){
        do { 
            console.log("yes");
            counter ++}
            while(counter > round)
        }
        
    })
}