const guideButton = document.getElementById("guideBTN");
const guideDiv = document.getElementById("guideDIV1");
const startButton = document.getElementById("startBTN");
const dropdownDiv = document.getElementById("dropdownDIV");
const mainBoard = document.getElementById("mainBoard");
const userInputDiv = document.getElementById("userInputDiv");
const userInput = document.getElementById("userInput");
const submitButton = document.getElementById("submitBTN")
const restartBTNDIV = document.getElementById("restartBTNDIV")
const restartButton = document.getElementById("restartBTN")
const categories = document.querySelectorAll('.categories');

const getSpan = (row, col) => document.getElementById(`word${row}span${col}`);

const wordsSports = ['ΜΠΑΛΑ', 'ΑΘΛΗΤΗΣ', 'ΑΓΩΝΑΣ', 'ΣΤΟΧΟΣ', 'ΤΕΡΜΑ', 'ΟΜΑΔΑ', 'ΝΙΚΗΤΗΣ', 'ΓΗΠΕΔΟ', 'ΣΤΙΒΟΣ', 'ΡΑΚΕΤΑ', 'ΣΦΑΙΡΑ', 'ΒΟΛΕΣ', 'ΤΑΚΛΙΝ', 'ΑΡΣΙΣ', 'ΒΟΛΕΙ', 'ΚΑΛΑΘΙ', 'ΣΕΡΒΙΣ'];
const wordsGeo = ['ΒΟΥΝΟ', 'ΛΙΜΝΗ', 'ΠΟΤΑΜΙ', 'ΠΕΔΙΑΔΑ', 'ΘΑΛΑΣΣΑ', 'ΧΑΡΤΗΣ', 'ΚΟΣΜΟΣ', 'ΗΠΕΙΡΟΣ', 'ΑΚΤΕΣ', 'ΚΟΛΠΟΣ', 'ΚΛΙΜΑ', 'ΕΡΗΜΟΣ', 'ΥΦΑΛΟΣ', 'ΤΟΠΙΟ', 'ΥΔΑΤΑ', 'ΧΕΡΣΟΣ', 'ΝΗΣΙΔΑ', 'ΠΛΑΓΙΑ'];
const wordsAnimals = ['ΛΥΚΟΣ', 'ΤΙΓΡΗ', 'ΑΛΟΓΟ', 'ΓΑΤΑΚΙ', 'ΣΚΥΛΟΣ', 'ΠΙΘΗΚΟΣ', 'ΑΡΚΟΥΔΑ', 'ΔΕΛΦΙΝΙ', 'ΖΕΒΡΑ', 'ΛΑΓΟΣ', 'ΒΙΣΩΝ', 'ΦΩΚΙΑ', 'ΛΥΓΚΑΣ', 'ΚΟΡΑΚΙ', 'ΓΥΠΑΣ', 'ΙΠΠΟΣ', 'ΒΟΥΒΑΛΙ', 'ΤΑΥΡΟΣ', 'ΚΡΙΟΣ'];
const wordsCountries = ['ΙΤΑΛΙΑ', 'ΠΕΡΟΥ', 'ΓΚΑΝΑ', 'ΤΟΝΓΚΑ', 'ΙΝΔΙΑ', 'ΚΥΠΡΟΣ', 'ΜΑΛΤΑ', 'ΓΑΛΛΙΑ', 'ΒΕΛΓΙΟ', 'ΛΙΒΥΗ', 'ΜΑΡΟΚΟ', 'ΜΕΞΙΚΟ', 'ΣΕΡΒΙΑ', 'ΚΕΝΥΑ', 'ΑΓΓΛΙΑ', 'ΕΛΛΑΔΑ', 'ΚΑΤΑΡ', 'ΚΟΡΕΑ', 'ΣΥΡΙΑ', 'ΖΑΜΠΙΑ', 'ΣΟΥΔΑΝ', 'ΤΣΕΧΙΑ', 'ΝΕΠΑΛ', 'ΠΑΛΑΟΥ', 'ΜΟΝΑΚΟ', 'ΙΣΡΑΗΛ', 'ΣΟΜΑΛΙΑ'];

const maxTries = 6;
var randomWord;
var totalTries = 0;


guideButton.onclick = function(){
    guideButton.style.display = "none";
    guideDiv.style.display = "block";
    startButton.style.display = "inline-block";
}

startButton.onclick = function(){
    categoryScreen();
}

restartButton.onclick = function(){
    categoryScreen();
}

categories.forEach((link) => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var categotyClicked = this.textContent;
    dropdownDiv.style.display = "none";
    wordCategory(categotyClicked);
  });
});

const categoryScreen = function(){
    clearBoard();
    totalTries = 0;
    startButton.style.display = "none";
    guideDiv.style.display = "none";
    guideButton.style.display = "none"
    dropdownDiv.style.display = "block"; 
    mainBoard.style.display = "none"; 
    userInputDiv.style.display = 'none';
    restartBTNDIV.style.display = 'none';
}

const wordCategory = function(categotyClicked){
    var words;
    if (categotyClicked == "Αθλήματα"){
        words = wordsSports
    } else if (categotyClicked == "Γεωγραφία"){
        words = wordsGeo
    } else if (categotyClicked == "Ζώα"){
        words = wordsAnimals
    } else if (categotyClicked == "Χώρες"){
        words = wordsCountries
    }
    startGame(words);
}


const startGame = function(words){
    randomWordFunction(words);
    mainBoard.style.display = "flex";
    restartBTNDIV.style.display = "block";
    if (randomWord.length == 5){
        for (let i = 1; i <= 5; i++) {
            for (let j = 6; j <= 7; j++) {
                document.getElementById(`word${i}span${j}`).style.display = "none";
            }
        }

    } else if(randomWord.length == 6){
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`word${i}span7`).style.display = "none";
        }
    }
    userInputDiv.style.display = "block";
    userInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter"){
            userWordFuncion(randomWord);
        }
    });
    submitButton.onclick = function(){
        userWordFuncion(randomWord);
    }
}

const randomWordFunction = function(words){
    const randomNumber = Math.ceil(words.length * Math.random());
    randomWord = words[randomNumber];     
    console.log(randomWord)
}

const userWordFuncion = function(){
    var userWord = userInput.value;
    userInput.value = "";
    if (userWord.includes(" ")){
        userWord = userWord.replace(/\s+/g, "");
    }
    userWord = userWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
    gameEngine(userWord, randomWord);
}

const gameEngine = function(userWord, randomWord){
    totalTries++
    if (userWord == randomWord){
        alert(`Συγχαρητήρια! Βρήκες σωστά την λέξη. Συνολικές προσπάθεις: ${totalTries}`)
        clearBoard();
        totalTries = 0
        categoryScreen();
    }else if (userWord.length == randomWord.length){
        if (totalTries <= maxTries){
            
                for (let i = 0; i <= randomWord.length; i++){
                    if (userWord.charAt(i) === randomWord.charAt(i)){
                        document.getElementById(`word${totalTries}span${i+1}`).style.backgroundColor = "green";
                        document.getElementById(`word${totalTries}span${i+1}`).textContent = userWord.charAt(i);
                    } else if (randomWord.includes(userWord.charAt(i))){
                        document.getElementById(`word${totalTries}span${i+1}`).style.backgroundColor = "orange";
                        document.getElementById(`word${totalTries}span${i+1}`).textContent = userWord.charAt(i);
                    } else {
                        document.getElementById(`word${totalTries}span${i+1}`).textContent = userWord.charAt(i);
                    }
                }
            
            } else {
            alert(`Δεν έχεις άλλες προσπάθεις! Η λέξη που έψαχνες να βρεις ήταν ${randomWord}.`)
            clearBoard();
            totalTries = 0
            categoryScreen();
        }
    } else{
        totalTries = totalTries - 1
        alert(`Προσοχή! Η λέξη που ψάχνεις να βρεις έχει ${randomWord.length} γράμματα, όχι ${userWord.length}.`)
    }
}

const clearBoard = function(){
    for (let row = 1; row<=5; row++){
        for (let col = 1; col<=7; col++){
            document.getElementById(`word${row}span${col}`).style.backgroundColor = "lightgray";
            document.getElementById(`word${row}span${col}`).textContent = "";
        }
    }
}
