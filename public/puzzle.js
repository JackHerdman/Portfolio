
// create object array of both symbols and nations
let symbols = ["water", "earth", "fire", "air"];
let nations = ["Water Tribes", "Earth Kingdom", "Fire Nation", "Air Nomads"];
//randomise everything on loadin the website
window.onload = randomiseElements;

function randomiseElements() {
    randomiseNation();
     for (let i = 1; i < 10; i++) {
         let randomNumber = Math.floor(Math.random() * symbols.length);
         document.getElementById(i).src=`/images/${symbols[randomNumber]}.png`;
    }
}
let randomNationNumber = Math.floor(Math.random() * nations.length);
function randomiseNation() {
    document.getElementById("nation").innerHTML = `${nations[randomNationNumber]}`;
}
//creates an array for each number when clicked will alter the numbers in the array
let mapping = [
    [],//0
    [1, 2, 4],//1
    [1, 2, 3, 5],//2
    [2, 3, 6],//3
    [1, 4, 5, 7],//4
    [2, 4, 5, 6, 8],//5
    [3, 5, 6, 9],//6
    [4, 7, 8],//7
    [5, 7, 8, 9],//8
    [6, 8, 9]//9
];
//cycle through the 4 images in the array sequence
function nextSymbol(element) {
    let index = symbols.indexOf(element.src.split("/").pop().split(".")[0]);
    let nextSymbolIndex = index + 1 == symbols.length ? 0 : index + 1;
    element.src = `/images/${symbols[nextSymbolIndex]}.png`;
}
//when clicked run the nextsymbol function for each corresponding element in the array
document.getElementById("gameSquare").addEventListener('click', handleGameSquareClickEvent)
function handleGameSquareClickEvent(event) {
    let elementsToUpdate = mapping[Number(event.target.id)];
    for (let i = 0; i < elementsToUpdate.length; i++) {
        nextSymbol(document.getElementById(elementsToUpdate[i]));
    }
    //checks after 2 seconds if it all matches you win!
    setTimeout(() => { checkFunction() }, 20)

}
//checks if everything matches
function checkFunction() {
    let identicalElements = [];
    for (let i = 1; i < 10; i++) {
        identicalElements.push(document.getElementById(i).src);
    }
   
    let allEqual = identicalElements => identicalElements.every(v => v === identicalElements[0]);
    if (allEqual(identicalElements) == true) {
        if (nations[randomNationNumber].toLowerCase().split(" ")[0] == identicalElements[0].split("/").pop().split(".")[0]) {
            alert("Congratulations! You found the Next Avatar");
            document.getElementById("gameSquare").removeEventListener('click', handleGameSquareClickEvent)
        }
    }
}