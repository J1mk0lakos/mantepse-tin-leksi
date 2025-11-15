const guideButton = document.getElementById("guideBTN");
const guideDiv = document.getElementById("guideDIV1");
const startButton = document.getElementById("startBTN");
const dropdownDiv = document.getElementById("dropdownDIV");
const mainBoard = document.getElementById("mainBoard");
const userInputDiv = document.getElementById("userInputDiv");
const userInput = document.getElementById("userInput");
const submitButton = document.getElementById("submitBTN"); // ✅ ΔΙΟΡΘΩΣΗ: Έλειπε semicolon
const restartBTNDIV = document.getElementById("restartBTNDIV"); // ✅ ΔΙΟΡΘΩΣΗ: Έλειπε semicolon
const restartButton = document.getElementById("restartBTN"); // ✅ ΔΙΟΡΘΩΣΗ: Έλειπε semicolon
const categories = document.querySelectorAll('.categories');

const wordsSports = ['ΜΠΑΛΑ', 'ΑΘΛΗΤΗΣ', 'ΑΓΩΝΑΣ', 'ΣΤΟΧΟΣ', 'ΤΕΡΜΑ', 'ΟΜΑΔΑ', 'ΝΙΚΗΤΗΣ', 'ΓΗΠΕΔΟ', 'ΣΤΙΒΟΣ', 'ΡΑΚΕΤΑ', 'ΣΦΑΙΡΑ', 'ΒΟΛΕΣ', 'ΤΑΚΛΙΝ', 'ΑΡΣΙΣ', 'ΒΟΛΕΙ', 'ΚΑΛΑΘΙ', 'ΣΕΡΒΙΣ'];
const wordsGeo = ['ΒΟΥΝΟ', 'ΛΙΜΝΗ', 'ΠΟΤΑΜΙ', 'ΠΕΔΙΑΔΑ', 'ΘΑΛΑΣΣΑ', 'ΧΑΡΤΗΣ', 'ΚΟΣΜΟΣ', 'ΗΠΕΙΡΟΣ', 'ΑΚΤΕΣ', 'ΚΟΛΠΟΣ', 'ΚΛΙΜΑ', 'ΕΡΗΜΟΣ', 'ΥΦΑΛΟΣ', 'ΤΟΠΙΟ', 'ΥΔΑΤΑ', 'ΧΕΡΣΟΣ', 'ΝΗΣΙΔΑ', 'ΠΛΑΓΙΑ'];
const wordsAnimals = ['ΛΥΚΟΣ', 'ΤΙΓΡΗ', 'ΑΛΟΓΟ', 'ΓΑΤΑΚΙ', 'ΣΚΥΛΟΣ', 'ΠΙΘΗΚΟΣ', 'ΑΡΚΟΥΔΑ', 'ΔΕΛΦΙΝΙ', 'ΖΕΒΡΑ', 'ΛΑΓΟΣ', 'ΒΙΣΩΝ', 'ΦΩΚΙΑ', 'ΛΥΓΚΑΣ', 'ΚΟΡΑΚΙ', 'ΓΥΠΑΣ', 'ΙΠΠΟΣ', 'ΒΟΥΒΑΛΙ', 'ΤΑΥΡΟΣ', 'ΚΡΙΟΣ'];
const wordsCountries = ['ΙΤΑΛΙΑ', 'ΠΕΡΟΥ', 'ΓΚΑΝΑ', 'ΤΟΝΓΚΑ', 'ΙΝΔΙΑ', 'ΚΥΠΡΟΣ', 'ΜΑΛΤΑ', 'ΓΑΛΛΙΑ', 'ΒΕΛΓΙΟ', 'ΛΙΒΥΗ', 'ΜΑΡΟΚΟ', 'ΜΕΞΙΚΟ', 'ΣΕΡΒΙΑ', 'ΚΕΝΥΑ', 'ΑΓΓΛΙΑ', 'ΕΛΛΑΔΑ', 'ΚΑΤΑΡ', 'ΚΟΡΕΑ', 'ΣΥΡΙΑ', 'ΖΑΜΠΙΑ', 'ΣΟΥΔΑΝ', 'ΤΣΕΧΙΑ', 'ΝΕΠΑΛ', 'ΠΑΛΑΟΥ', 'ΜΟΝΑΚΟ', 'ΙΣΡΑΗΛ', 'ΣΟΜΑΛΙΑ'];

const maxTries = 5;
let randomWord; // ✅ ΔΙΟΡΘΩΣΗ: Χρήση let αντί για var (modern practice)
let totalTries = 0; // ✅ ΔΙΟΡΘΩΣΗ: Χρήση let αντί για var

guideButton.onclick = function(){
    guideButton.style.display = "none";
    guideDiv.style.display = "block";
    startButton.style.display = "inline-block";
};

startButton.onclick = function(){
    startButton.style.display = "none";
    guideDiv.style.display = "none";
    guideButton.style.display = "none"; // ✅ ΔΙΟΡΘΩΣΗ: Έλειπε semicolon
    dropdownDiv.style.display = "block"; 
    mainBoard.style.display = "none"; 
    userInputDiv.style.display = 'none';
    restartBTNDIV.style.display = 'none';
    clearBoard();
};

restartButton.onclick = function(){
    guideButton.style.display = 'inline-block';
    startButton.style.display = 'inline-block';
    mainBoard.style.display = 'none';
    userInputDiv.style.display = 'none'; // ✅ ΔΙΟΡΘΩΣΗ: Έλειπε semicolon
    restartBTNDIV.style.display = 'none'; // ✅ ΔΙΟΡΘΩΣΗ: Έλειπε semicolon
    totalTries = 0;
    clearBoard();
};

categories.forEach((link) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const categoryClicked = this.textContent; // ✅ ΔΙΟΡΘΩΣΗ: Χρήση const αντί για var
        dropdownDiv.style.display = "none";
        wordCategory(categoryClicked);
    });
});

const wordCategory = function(categoryClicked){
    let words; // ✅ ΔΙΟΡΘΩΣΗ: Χρήση let αντί για var
    if (categoryClicked === "Αθλήματα"){ // ✅ ΔΙΟΡΘΩΣΗ: Χρήση === αντί για ==
        words = wordsSports; // ✅ ΔΙΟΡΘΩΣΗ: Έλειπε semicolon
    } else if (categoryClicked === "Γεωγραφία"){ // ✅ ΔΙΟΡΘΩΣΗ: Χρήση === αντί για ==
        words = wordsGeo; // ✅ ΔΙΟΡΘΩΣΗ: Έλειπε semicolon
    } else if (categoryClicked === "Ζώα"){ // ✅ ΔΙΟΡΘΩΣΗ: Χρήση === αντί για ==
        words = wordsAnimals; // ✅ ΔΙΟΡΘΩΣΗ: Έλειπε semicolon
    } else if (categoryClicked === "Χώρες"){ // ✅ ΔΙΟΡΘΩΣΗ: Χρήση === αντί για ==
        words = wordsCountries; // ✅ ΔΙΟΡΘΩΣΗ: Έλειπε semicolon
    }
    startGame(words);
};

const startGame = function(words){
    const randomNumber = Math.floor(Math.random() * words.length); // ✅ ΔΙΟΡΘΩΣΗ: Χρήση const
    randomWord = words[randomNumber]; 
    
    console.log(randomWord, randomWord.length); // ✅ ΔΙΟΡΘΩΣΗ: Έλειπε semicolon
    const char = randomWord.length; // ✅ ΔΙΟΡΘΩΣΗ: Χρήση const αντί για var
    mainBoard.style.display = "flex";
    restartBTNDIV.style.display = "block";
    
    // Κρύψε όλα τα spans πρώτα
    for (let i = 1; i <= 5; i++){ // ✅ ΔΙΟΡΘΩΣΗ: Spaces γύρω από operators
        for (let j = 1; j <= 7; j++){ // ✅ ΔΙΟΡΘΩΣΗ: Spaces γύρω από operators
            document.getElementById(`word${i}span${j}`).style.display = "none";
        }
    }
    
    // Εμφάνισε μόνο τα spans που χρειάζονται
    for (let i = 1; i <= 5; i++){ // ✅ ΔΙΟΡΘΩΣΗ: Spaces γύρω από operators
        for (let j = 1; j <= char; j++){ // ✅ ΔΙΟΡΘΩΣΗ: Spaces γύρω από operators
            document.getElementById(`word${i}span${j}`).style.display = "inline-flex";
        }
    }
    
    userInputDiv.style.display = "block";
};

// Event listeners εκτός της startGame για να μην προστίθενται πολλές φορές
userInput.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        userWordFuncion();
    }
});

submitButton.onclick = function(){
    userWordFuncion();
};

const userWordFuncion = function(){
    let userWord = userInput.value.trim(); // ✅ ΔΙΟΡΘΩΣΗ: Χρήση let αντί για var
    
    // Έλεγχος αν το input είναι άδειο
    if (userWord === "") {
        alert("Παρακαλώ γράψε μια λέξη!");
        return;
    }
    
    userInput.value = "";
    
    if (userWord.includes(" ")){
        userWord = userWord.replace(/\s+/g, "");
    }
    
    userWord = userWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
    gameEngine(userWord, randomWord);
};

const gameEngine = function(userWord, randomWord){
    // Έλεγχος μήκους λέξης ΠΡΙΝ αυξήσεις το totalTries
    if (userWord.length !== randomWord.length){
        alert(`Προσοχή! Η λέξη που ψάχνεις να βρεις έχει ${randomWord.length} γράμματα, όχι ${userWord.length}.`); // ✅ ΔΙΟΡΘΩΣΗ: Έλειπε semicolon
        return;
    }
    
    totalTries++; // ✅ ΔΙΟΡΘΩΣΗ: Έλειπε semicolon
    
    if (userWord === randomWord){ // ✅ ΔΙΟΡΘΩΣΗ: Χρήση === αντί για ==
        alert(`Συγχαρητήρια! Βρήκες σωστά την λέξη. Συνολικές προσπάθεις: ${totalTries}`); // ✅ ΔΙΟΡΘΩΣΗ: Έλειπε semicolon
        resetGame();
    } else if (totalTries < maxTries){
        for (let i = 0; i < randomWord.length; i++){
            const spanId = `word${totalTries}span${i + 1}`; // ✅ ΒΕΛΤΙΩΣΗ: Αποθήκευσε το ID
            const span = document.getElementById(spanId); // ✅ ΒΕΛΤΙΩΣΗ: Πάρε το element μία φορά
            
            if (userWord.charAt(i) === randomWord.charAt(i)){
                span.style.backgroundColor = "green";
                span.textContent = userWord.charAt(i);
            } else if (randomWord.includes(userWord.charAt(i))){
                span.style.backgroundColor = "orange";
                span.textContent = userWord.charAt(i);
            } else {
                span.textContent = userWord.charAt(i);
            }
        }   
    } else {
        // Τελευταία προσπάθεια - δείξε τη λέξη και μετά τέλειωσε
        for (let i = 0; i < randomWord.length; i++){
            const spanId = `word${totalTries}span${i + 1}`; // ✅ ΒΕΛΤΙΩΣΗ: Αποθήκευσε το ID
            const span = document.getElementById(spanId); // ✅ ΒΕΛΤΙΩΣΗ: Πάρε το element μία φορά
            
            if (userWord.charAt(i) === randomWord.charAt(i)){
                span.style.backgroundColor = "green";
                span.textContent = userWord.charAt(i);
            } else if (randomWord.includes(userWord.charAt(i))){
                span.style.backgroundColor = "orange";
                span.textContent = userWord.charAt(i);
            } else {
                span.textContent = userWord.charAt(i);
            }
        }
        
        // Περίμενε λίγο πριν δείξεις το alert
        setTimeout(() => {
            alert(`Δεν έχεις άλλες προσπάθεις! Η λέξη που έψαχνες να βρεις ήταν ${randomWord}.`); // ✅ ΔΙΟΡΘΩΣΗ: Έλειπε semicolon
            resetGame();
        }, 500);
    }
};

// Νέα συνάρτηση για να αποφύγεις επανάληψη κώδικα
const resetGame = function(){
    clearBoard();
    totalTries = 0;
    guideButton.style.display = 'inline-block';
    startButton.style.display = 'inline-block';
    mainBoard.style.display = 'none';
    userInputDiv.style.display = 'none';
    restartBTNDIV.style.display = 'none';
};

const clearBoard = function(){
    for (let row = 1; row <= 5; row++){ // ✅ ΔΙΟΡΘΩΣΗ: Spaces γύρω από operators
        for (let col = 1; col <= 7; col++){ // ✅ ΔΙΟΡΘΩΣΗ: Spaces γύρω από operators
            const span = document.getElementById(`word${row}span${col}`);
            span.style.backgroundColor = "";
            span.textContent = "";
        }
    }
};
