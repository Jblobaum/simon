let simonButton = document.getElementsByClassName("simonButton");
let red = document.getElementById("red");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");
let blue = document.getElementById("blue");


for (i = 0; i < simonButton.length; i++) {
    simonButton[i].addEventListener("mousedown", function () {
        this.classList.add("active");
    })
}
for (i = 0; i < simonButton.length; i++) {
    simonButton[i].addEventListener("mouseup", function () {
        this.classList.remove("active");
    })

}
let counter = 0;
let round = 0;
let simonArray = [];
let arrayMax = 100;
let limit = arrayMax + 1;
for (var i = 0; i < arrayMax; i++) {
    simonArray.push(Math.floor(Math.random() * 4));
}
console.log(simonArray)


function computerChoice() {
    if (counter > round) {
        counter = 0;
    } else {
        let comp = simonArray[counter];
        console.log(comp);
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
}
computerChoice()
// computerChoice()
// computerChoice()
// computerChoice()
// computerChoice()
// computerChoice()
// computerChoice()
// computerChoice()
// computerChoice()
// computerChoice()
// computerChoice()
// computerChoice()
// computerChoice()



// simon=[0, 1, 2, 3]

// for (let i = 1; i <= 5; i++) {
//     let x = simonButton;
//     for (let j = 1; j < i; j++) {
//         x = x + simonButton;
//     }
// console.log(x)
// Chris Trying Stuff


// let userArray = [];