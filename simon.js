let simonButton = document.getElementsByClassName("simonButton");
let red = document.getElementById("red");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");
let clickCount = document.getElementById("clickCount").innerText;



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
    console.log("computer's choice");
    console.log(counter);
    console.log(round);
    
    

    if (counter > round) {
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
    }
    return simonArray[counter]
}
console.log(simonArray[counter]);


// game Start!
computerChoice()

for (i = 0; i < simonButton.length; i++) {
    simonButton[i].addEventListener("mousedown", function () {
        this.classList.add("active");

    })
}
for (i = 0; i < simonButton.length; i++) {
    // if(){
    simonButton[i].addEventListener("mouseup", function () {
        this.classList.remove("active");
        let userNum = parseInt(this.innerHTML)
        let gameNum = parseInt(simonArray[counter - 1]);
        if (userNum === gameNum && counter > round) {
            console.log("yes")
            counter = 0;
            round++;
            clickCount++
            // console.log(round)
            setTimeout(function(){ computerChoice()}, 500);
        // } else if (userNum === gameNum) {
        //     console.log("yes");
        //     round ++;
        } else {
            let lose = true
            alert("You Lose! Press Start to play again!")
        }
    })    
}

// for (i = 0; i < simonButton.length; i++) {
//     simonButton[i].addEventListener("mousedown", function (){
    
     

//     do{
//         let clickCount = 0
//         clickCount++
//         document.getElementById('clickCount').innerText = parseInt(clickCount);
//     } while(lose = false)})
// }
