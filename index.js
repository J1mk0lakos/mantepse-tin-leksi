const word1span1 = document.getElementById("word1span1");
const word1span2 = document.getElementById("word1span2");
const word1span3 = document.getElementById("word1span3");
const word1span4 = document.getElementById("word1span4");
const word1span5 = document.getElementById("word1span5");
const word1span6 = document.getElementById("word1span6");
const word1span7 = document.getElementById("word1span7");

const word2span1 = document.getElementById("word2span1");
const word2span2 = document.getElementById("word2span2");
const word2span3 = document.getElementById("word2span3");
const word2span4 = document.getElementById("word2span4");
const word2span5 = document.getElementById("word2span5");
const word2span6 = document.getElementById("word2span6");
const word2span7 = document.getElementById("word2span7");

const word3span1 = document.getElementById("word3span1");
const word3span2 = document.getElementById("word3span2");
const word3span3 = document.getElementById("word3span3");
const word3span4 = document.getElementById("word3span4");
const word3span5 = document.getElementById("word3span5");
const word3span6 = document.getElementById("word3span6");
const word3span7 = document.getElementById("word3span7");

const word4span1 = document.getElementById("word4span1");
const word4span2 = document.getElementById("word4span2");
const word4span3 = document.getElementById("word4span3");
const word4span4 = document.getElementById("word4span4");
const word4span5 = document.getElementById("word4span5");
const word4span6 = document.getElementById("word4span6");
const word4span7 = document.getElementById("word4span7");

const word5span1 = document.getElementById("word5span1");
const word5span2 = document.getElementById("word5span2");
const word5span3 = document.getElementById("word5span3");
const word5span4 = document.getElementById("word5span4");
const word5span5 = document.getElementById("word5span5");
const word5span6 = document.getElementById("word5span6");
const word5span7 = document.getElementById("word5span7");

const startButton = document.getElementById("startBTN");
const mainBoard = document.getElementById("mainBoard");
const userInputDiv = document.getElementById("userInputDiv");
const submitBTN = document.getElementById("submitBTN");
const userInput = document.getElementById("userInput");
const guideButton = document.getElementById("guideBTN");
const guideDIV = document.getElementById("guideDIV1");
const dropdownMenu = document.getElementById("dropdownDIV");
const categories = document.querySelectorAll('.categories');


const wordsSports = ['ΜΠΑΛΑ', 'ΑΘΛΗΤΗΣ', 'ΑΓΩΝΑΣ', 'ΣΤΟΧΟΣ', 'ΤΕΡΜΑ', 'ΟΜΑΔΑ', 'ΝΙΚΗΤΗΣ'];
const wordsGeo = ['ΒΟΥΝΟ', 'ΛΙΜΝΗ', 'ΠΟΤΑΜΙ', 'ΠΕΔΙΑΔΑ', 'ΘΑΛΑΣΣΑ', 'ΧΑΡΤΗΣ', 'ΚΟΣΜΟΣ', 'ΗΠΕΙΡΟΣ'];
const wordsAnimals = ['ΛΥΚΟΣ', 'ΤΙΓΡΗ', 'ΖΕΒΡΑ', 'ΑΛΟΓΟ', 'ΓΑΤΑΚΙ', 'ΣΚΥΛΟΣ', 'ΠΙΘΗΚΟΣ', 'ΑΡΚΟΥΔΑ', 'ΔΕΛΦΙΝΙ'];

startButton.onclick = function(){
    guideButton.style.display = 'none'
    startButton.style.display = 'none';
    guideDIV.style.display = 'none';
    dropdownMenu.style.display = 'block';
    categories.forEach(category => {
        category.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent link navigation
            const categoryId = event.target.id; // e.g. "categorySports"
            console.log('Clicked category ID:', categoryId);
            dropdownMenu.style.display = 'none';
            mainBoard.style.display = 'flex';
            userInputDiv.style.display = 'block';
            startGame(categoryId);
        });
    });


}

guideButton.onclick = function(){
    guideButton.style.display = 'none'
    mainBoard.style.display = 'none';
    userInputDiv.style.display = 'none';
    guideDIV.style.display = 'block';
}

var startGame = function(categoryId){
    console.log("Game Started!")
    var words;
    if (categoryId == "categorySports"){
        words = 'ΜΠΑΛΑAA'
    } else if(categoryId == "categoryGeo"){
        words = wordsGeo
    } else if (categoryId == "categoryAnimals"){
        words = wordsAnimals
    }  
    var randomWordNumber = Math.ceil(words.length * Math.random());
    var randomWord = words[randomWordNumber];
    if (randomWord == undefined){
        randomWordNumber = Math.ceil(words.length * Math.random());
        randomWord = words[randomWordNumber];
    }
    if (randomWord.length == 5){
        word1span6.style.display = "none";
        word1span7.style.display = "none";
        word2span6.style.display = "none";
        word2span7.style.display = "none";
        word3span6.style.display = "none";
        word3span7.style.display = "none";
        word4span6.style.display = "none";
        word4span7.style.display = "none";
        word5span6.style.display = "none";
        word5span7.style.display = "none";
    } else if(randomWord.length == 6){
        word1span7.style.display = "none";
        word2span7.style.display = "none";
        word3span7.style.display = "none";
        word4span7.style.display = "none";
        word5span7.style.display = "none";
    }
    var tries = 0;
    var userWord = '';

    console.log(randomWord)
    submitBTN.onclick = function(){
            userWord = userInput.value
            userInput.value = "";
            if (userWord.includes(" ")){
                userWord = userWord.replace(/\s+/g, "");
            }
            userWord = userWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
            if (userWord.length == randomWord.length){
                    tries++;
                    if (userWord==randomWord){
                        alert(`Συγχαρητήρια! Βρήκες την λέξη ${randomWord} σωστά!`)
                        startButton.style.display = 'inline-block';
                        mainBoard.style.display = 'none';
                        userInputDiv.style.display = 'none';
                        cleartable();
                    } else {
                        wordLength = randomWord.length
                        if (tries == 1){
                            word1(randomWord, userWord, wordLength);
                        } else if (tries == 2){
                            word2(randomWord, userWord, wordLength);
                        } else if (tries == 3){
                            word3(randomWord, userWord, wordLength);
                        } else if (tries == 4){
                            word4(randomWord, userWord, wordLength);
                        } else if (tries == 5){
                            word5(randomWord, userWord, wordLength);
                        } else {
                            alert("Οι προσπάθειες τελείωσαν! Ξαναπροσπάθησε")
                            startButton.style.display = 'inline-block';
                            mainBoard.style.display = 'none';
                            userInputDiv.style.display = 'none';
                            cleartable();
                        }
                    }
                
            } else {
                alert("Η λέξη που θα δώσεις πρέπει να έχει 5 γράμματα")
                startButton.style.display = 'inline-block';
                mainBoard.style.display = 'none';
                userInputDiv.style.display = 'none';
                cleartable();
            }

    }
}

var word1 = function(randomWord, userWord, wordLength){
    var rightWord1 = randomWord.charAt(0)
    var rightWord2 = randomWord.charAt(1)
    var rightWord3 = randomWord.charAt(2)
    var rightWord4 = randomWord.charAt(3)
    var rightWord5 = randomWord.charAt(4)
    if (userWord.charAt(0) == rightWord1){
        word1span1.style.backgroundColor  = "green"
        word1span1.textContent = userWord.charAt(0)
    } else if(randomWord.includes(userWord.charAt(0))){
        word1span1.style.backgroundColor = "orange"
        word1span1.textContent = userWord.charAt(0)
    } else{
        word1span1.textContent = userWord.charAt(0)
    }
    if (userWord.charAt(1) == rightWord2){
        word1span2.style.backgroundColor = "green"
        word1span2.textContent = userWord.charAt(1)
    } else if(randomWord.includes(userWord.charAt(1))){
        word1span2.style.backgroundColor = "orange"
        word1span2.textContent = userWord.charAt(1)
    } else{
        word1span2.textContent = userWord.charAt(1)
    }
    if (userWord.charAt(2) == rightWord3){
        word1span3.style.backgroundColor = "green"
        word1span3.textContent = userWord.charAt(2)
    } else if(randomWord.includes(userWord.charAt(2))){
        word1span3.style.backgroundColor = "orange"
        word1span3.textContent = userWord.charAt(2)
    } else{
        word1span3.textContent = userWord.charAt(2)
    }
    if (userWord.charAt(3) == rightWord4){
        word1span4.style.backgroundColor = "green"
        word1span4.textContent = userWord.charAt(3)
    } else if(randomWord.includes(userWord.charAt(3))){
        word1span4.style.backgroundColor = "orange"
        word1span4.textContent = userWord.charAt(3)
    } else{
        word1span4.textContent = userWord.charAt(3)
    }
    if (userWord.charAt(4) == rightWord5){
        word1span5.style.backgroundColor = "green"
        word1span5.textContent = userWord.charAt(4)
    } else if(randomWord.includes(userWord.charAt(4))){
        word1span5.style.backgroundColor = "orange"
        word1span5.textContent = userWord.charAt(4)
    } else{
        word1span5.textContent = userWord.charAt(4)
    }
    if (wordLength == 6){
        if (userWord.charAt(5) == rightWord5){
            word1span6.style.backgroundColor = "green"
            word1span6.textContent = userWord.charAt(5)
        } else if(randomWord.includes(userWord.charAt(5))){
            word1span6.style.backgroundColor = "orange"
            word1span6.textContent = userWord.charAt(5)
        } else{
            word1span6.textContent = userWord.charAt(5)
        }
    } else if (wordLength == 7){
        if (userWord.charAt(5) == rightWord5){
            word1span6.style.backgroundColor = "green"
            word1span6.textContent = userWord.charAt(5)
        } else if(randomWord.includes(userWord.charAt(5))){
            word1span6.style.backgroundColor = "orange"
            word1span6.textContent = userWord.charAt(5)
        } else{
            word1span6.textContent = userWord.charAt(5)
        }
        if (userWord.charAt(6) == rightWord5){
            word1span7.style.backgroundColor = "green"
            word1span7.textContent = userWord.charAt(6)
        } else if(randomWord.includes(userWord.charAt(6))){
            word1span7.style.backgroundColor = "orange"
            word1span7.textContent = userWord.charAt(6)
        } else{
            word1span7.textContent = userWord.charAt(6)
        }

    }
}

var word2 = function(randomWord, userWord, wordLength){
    var rightWord1 = randomWord.charAt(0)
    var rightWord2 = randomWord.charAt(1)
    var rightWord3 = randomWord.charAt(2)
    var rightWord4 = randomWord.charAt(3)
    var rightWord5 = randomWord.charAt(4)
    if (userWord.charAt(0) == rightWord1){
        word2span1.style.backgroundColor = "green"
        word2span1.textContent = userWord.charAt(0)
    } else if(randomWord.includes(userWord.charAt(0))){
        word2span1.style.backgroundColor = "orange"
        word2span1.textContent = userWord.charAt(0)
    } else{
        word2span1.textContent = userWord.charAt(0)
    }
    if (userWord.charAt(1) == rightWord2){
        word2span2.style.backgroundColor = "green"
        word2span2.textContent = userWord.charAt(1)
    } else if(randomWord.includes(userWord.charAt(1))){
        word2span2.style.backgroundColor = "orange"
        word2span2.textContent = userWord.charAt(1)
    } else{
        word2span2.textContent = userWord.charAt(1)
    }
    if (userWord.charAt(2) == rightWord3){
        word2span3.style.backgroundColor = "green"
        word2span3.textContent = userWord.charAt(2)
    } else if(randomWord.includes(userWord.charAt(2))){
        word2span3.style.backgroundColor = "orange"
        word2span3.textContent = userWord.charAt(2)
    } else{
        word2span3.textContent = userWord.charAt(2)
    }
    if (userWord.charAt(3) == rightWord4){
        word2span4.style.backgroundColor = "green"
        word2span4.textContent = userWord.charAt(3)
    } else if(randomWord.includes(userWord.charAt(3))){
        word2span4.style.backgroundColor = "orange"
        word2span4.textContent = userWord.charAt(3)
    } else{
        word2span4.textContent = userWord.charAt(3)
    }
    if (userWord.charAt(4) == rightWord5){
        word2span5.style.backgroundColor = "green"
        word2span5.textContent = userWord.charAt(4)
    } else if(randomWord.includes(userWord.charAt(4))){
        word2span5.style.backgroundColor = "orange"
        word2span5.textContent = userWord.charAt(4)
    } else{
        word2span5.textContent = userWord.charAt(4)
    }   
    if (wordLength == 6){
        if (userWord.charAt(5) == rightWord5){
            word2span6.style.backgroundColor = "green"
            word2span6.textContent = userWord.charAt(5)
        } else if(randomWord.includes(userWord.charAt(5))){
            word2span6.style.backgroundColor = "orange"
            word2span6.textContent = userWord.charAt(5)
        } else{
            word2span6.textContent = userWord.charAt(5)
        }
    } else if (wordLength == 7){
        if (userWord.charAt(5) == rightWord5){
            word2span6.style.backgroundColor = "green"
            word2span6.textContent = userWord.charAt(5)
        } else if(randomWord.includes(userWord.charAt(5))){
            word2span6.style.backgroundColor = "orange"
            word2span6.textContent = userWord.charAt(5)
        } else{
            word2span6.textContent = userWord.charAt(5)
        }
        if (userWord.charAt(6) == rightWord5){
            word2span7.style.backgroundColor = "green"
            word2span7.textContent = userWord.charAt(6)
        } else if(randomWord.includes(userWord.charAt(6))){
            word2span7.style.backgroundColor = "orange"
            word2span7.textContent = userWord.charAt(6)
        } else{
            word2span7.textContent = userWord.charAt(6)
        }

    } 
}

var word3 = function(randomWord, userWord, wordLength){
    var rightWord1 = randomWord.charAt(0)
    var rightWord2 = randomWord.charAt(1)
    var rightWord3 = randomWord.charAt(2)
    var rightWord4 = randomWord.charAt(3)
    var rightWord5 = randomWord.charAt(4)
    if (userWord.charAt(0) == rightWord1){
        word3span1.style.backgroundColor = "green"
        word3span1.textContent = userWord.charAt(0)
    } else if(randomWord.includes(userWord.charAt(0))){
        word3span1.style.backgroundColor = "orange"
        word3span1.textContent = userWord.charAt(0)
    } else{
        word3span1.textContent = userWord.charAt(0)
    }
    if (userWord.charAt(1) == rightWord2){
        word3span2.style.backgroundColor = "green"
        word3span2.textContent = userWord.charAt(1)
    } else if(randomWord.includes(userWord.charAt(1))){
        word3span2.style.backgroundColor = "orange"
        word3span2.textContent = userWord.charAt(1)
    } else{
        word3span2.textContent = userWord.charAt(1)
    }
    if (userWord.charAt(2) == rightWord3){
        word3span3.style.backgroundColor = "green"
        word3span3.textContent = userWord.charAt(2)
    } else if(randomWord.includes(userWord.charAt(2))){
        word3span3.style.backgroundColor = "orange"
        word3span3.textContent = userWord.charAt(2)
    } else{
        word3span3.textContent = userWord.charAt(2)
    }
    if (userWord.charAt(3) == rightWord4){
        word3span4.style.backgroundColor = "green"
        word3span4.textContent = userWord.charAt(3)
    } else if(randomWord.includes(userWord.charAt(3))){
        word3span4.style.backgroundColor = "orange"
        word3span4.textContent = userWord.charAt(3)
    } else{
        word3span4.textContent = userWord.charAt(3)
    }
    if (userWord.charAt(4) == rightWord5){
        word3span5.style.backgroundColor = "green"
        word3span5.textContent = userWord.charAt(4)
    } else if(randomWord.includes(userWord.charAt(4))){
        word3span5.style.backgroundColor = "orange"
        word3span5.textContent = userWord.charAt(4)
    } else{
        word3span5.textContent = userWord.charAt(4)
    }   
    if (wordLength == 6){
        if (userWord.charAt(5) == rightWord5){
            word3span6.style.backgroundColor = "green"
            word3span6.textContent = userWord.charAt(5)
        } else if(randomWord.includes(userWord.charAt(5))){
            word3span6.style.backgroundColor = "orange"
            word3span6.textContent = userWord.charAt(5)
        } else{
            word3span6.textContent = userWord.charAt(5)
        }
    } else if (wordLength == 7){
        if (userWord.charAt(5) == rightWord5){
            word3span6.style.backgroundColor = "green"
            word3span6.textContent = userWord.charAt(5)
        } else if(randomWord.includes(userWord.charAt(5))){
            word3span6.style.backgroundColor = "orange"
            word3span6.textContent = userWord.charAt(5)
        } else{
            word3span6.textContent = userWord.charAt(5)
        }
        if (userWord.charAt(6) == rightWord5){
            word3span7.style.backgroundColor = "green"
            word3span7.textContent = userWord.charAt(6)
        } else if(randomWord.includes(userWord.charAt(6))){
            word3span7.style.backgroundColor = "orange"
            word3span7.textContent = userWord.charAt(6)
        } else{
            word3span7.textContent = userWord.charAt(6)
        }

    } 
}

var word4 = function(randomWord, userWord, wordLength){
    var rightWord1 = randomWord.charAt(0)
    var rightWord2 = randomWord.charAt(1)
    var rightWord3 = randomWord.charAt(2)
    var rightWord4 = randomWord.charAt(3)
    var rightWord5 = randomWord.charAt(4)
    if (userWord.charAt(0) == rightWord1){
        word4span1.style.backgroundColor = "green"
        word4span1.textContent = userWord.charAt(0)
    } else if(randomWord.includes(userWord.charAt(0))){
        word4span1.style.backgroundColor = "orange"
        word4span1.textContent = userWord.charAt(0)
    } else{
        word4span1.textContent = userWord.charAt(0)
    }
    if (userWord.charAt(1) == rightWord2){
        word4span2.style.backgroundColor = "green"
        word4span2.textContent = userWord.charAt(1)
    } else if(randomWord.includes(userWord.charAt(1))){
        word4span2.style.backgroundColor = "orange"
        word4span2.textContent = userWord.charAt(1)
    } else{
        word4span2.textContent = userWord.charAt(1)
    }
    if (userWord.charAt(2) == rightWord3){
        word4span3.style.backgroundColor = "green"
        word4span3.textContent = userWord.charAt(2)
    } else if(randomWord.includes(userWord.charAt(2))){
        word4span3.style.backgroundColor = "orange"
        word4span3.textContent = userWord.charAt(2)
    } else{
        word4span3.textContent = userWord.charAt(2)
    }
    if (userWord.charAt(3) == rightWord4){
        word4span4.style.backgroundColor = "green"
        word4span4.textContent = userWord.charAt(3)
    } else if(randomWord.includes(userWord.charAt(3))){
        word4span4.style.backgroundColor = "orange"
        word4span4.textContent = userWord.charAt(3)
    } else{
        word4span4.textContent = userWord.charAt(3)
    }
    if (userWord.charAt(4) == rightWord5){
        word4span5.style.backgroundColor = "green"
        word4span5.textContent = userWord.charAt(4)
    } else if(randomWord.includes(userWord.charAt(4))){
        word4span5.style.backgroundColor = "orange"
        word4span5.textContent = userWord.charAt(4)
    } else{
        word4span5.textContent = userWord.charAt(4)
    } 
    if (wordLength == 6){
        if (userWord.charAt(5) == rightWord5){
            word4span6.style.backgroundColor = "green"
            word4span6.textContent = userWord.charAt(5)
        } else if(randomWord.includes(userWord.charAt(5))){
            word4span6.style.backgroundColor = "orange"
            word4span6.textContent = userWord.charAt(5)
        } else{
            word4span6.textContent = userWord.charAt(5)
        }
    } else if (wordLength == 7){
        if (userWord.charAt(5) == rightWord5){
            word4span6.style.backgroundColor = "green"
            word4span6.textContent = userWord.charAt(5)
        } else if(randomWord.includes(userWord.charAt(5))){
            word4span6.style.backgroundColor = "orange"
            word4span6.textContent = userWord.charAt(5)
        } else{
            word4span6.textContent = userWord.charAt(5)
        }
        if (userWord.charAt(6) == rightWord5){
            word4span7.style.backgroundColor = "green"
            word4span7.textContent = userWord.charAt(6)
        } else if(randomWord.includes(userWord.charAt(6))){
            word4span7.style.backgroundColor = "orange"
            word4span7.textContent = userWord.charAt(6)
        } else{
            word4span7.textContent = userWord.charAt(6)
        }

    }   
}

var word5 = function(randomWord, userWord, wordLength){
    var rightWord1 = randomWord.charAt(0)
    var rightWord2 = randomWord.charAt(1)
    var rightWord3 = randomWord.charAt(2)
    var rightWord4 = randomWord.charAt(3)
    var rightWord5 = randomWord.charAt(4)
    if (userWord.charAt(0) == rightWord1){
        word5span1.style.backgroundColor = "green"
        word5span1.textContent = userWord.charAt(0)
    } else if(randomWord.includes(userWord.charAt(0))){
        word5span1.style.backgroundColor = "orange"
        word5span1.textContent = userWord.charAt(0)
    } else{
        word5span1.textContent = userWord.charAt(0)
    }
    if (userWord.charAt(1) == rightWord2){
        word5span2.style.backgroundColor = "green"
        word5span2.textContent = userWord.charAt(1)
    } else if(randomWord.includes(userWord.charAt(1))){
        word5span2.style.backgroundColor = "orange"
        word5span2.textContent = userWord.charAt(1)
    } else{
        word5span2.textContent = userWord.charAt(1)
    }
    if (userWord.charAt(2) == rightWord3){
        word5span3.style.backgroundColor = "green"
        word5span3.textContent = userWord.charAt(2)
    } else if(randomWord.includes(userWord.charAt(2))){
        word5span3.style.backgroundColor = "orange"
        word5span3.textContent = userWord.charAt(2)
    } else{
        word5span3.textContent = userWord.charAt(2)
    }
    if (userWord.charAt(3) == rightWord4){
        word5span4.style.backgroundColor = "green"
        word5span4.textContent = userWord.charAt(3)
    } else if(randomWord.includes(userWord.charAt(3))){
        word5span4.style.backgroundColor = "orange"
        word5span4.textContent = userWord.charAt(3)
    } else{
        word5span4.textContent = userWord.charAt(3)
    }
    if (userWord.charAt(4) == rightWord5){
        word5span5.style.backgroundColor = "green"
        word5span5.textContent = userWord.charAt(4)
    } else if(randomWord.includes(userWord.charAt(4))){
        word5span5.style.backgroundColor = "orange"
        word5span5.textContent = userWord.charAt(4)
    } else{
        word5span5.textContent = userWord.charAt(4)
    } 
        if (wordLength == 6){
        if (userWord.charAt(5) == rightWord5){
            word5span6.style.backgroundColor = "green"
            word5span6.textContent = userWord.charAt(5)
        } else if(randomWord.includes(userWord.charAt(5))){
            word5span6.style.backgroundColor = "orange"
            word5span6.textContent = userWord.charAt(5)
        } else{
            word5span6.textContent = userWord.charAt(5)
        }
    } else if (wordLength == 7){
        if (userWord.charAt(5) == rightWord5){
            word5span6.style.backgroundColor = "green"
            word5span6.textContent = userWord.charAt(5)
        } else if(randomWord.includes(userWord.charAt(5))){
            word5span6.style.backgroundColor = "orange"
            word5span6.textContent = userWord.charAt(5)
        } else{
            word5span6.textContent = userWord.charAt(5)
        }
        if (userWord.charAt(6) == rightWord5){
            word5span7.style.backgroundColor = "green"
            word5span7.textContent = userWord.charAt(6)
        } else if(randomWord.includes(userWord.charAt(6))){
            word5span7.style.backgroundColor = "orange"
            word5span7.textContent = userWord.charAt(6)
        } else{
            word5span7.textContent = userWord.charAt(6)
        }

    }   
}

var cleartable = function(){
    word1span1.textContent = '';
    word1span2.textContent = '';
    word1span3.textContent = '';
    word1span4.textContent = '';
    word1span5.textContent = '';
    word1span6.textContent = '';
    word1span7.textContent = '';
    word1span1.style.backgroundColor = "lightgray"
    word1span2.style.backgroundColor = "lightgray"
    word1span3.style.backgroundColor = "lightgray"
    word1span4.style.backgroundColor = "lightgray"
    word1span5.style.backgroundColor = "lightgray"
    word1span6.style.backgroundColor = "lightgray"
    word1span7.style.backgroundColor = "lightgray"

    word2span1.textContent = '';
    word2span2.textContent = '';
    word2span3.textContent = '';
    word2span4.textContent = '';
    word2span5.textContent = '';
    word2span6.textContent = '';
    word2span7.textContent = '';
    word2span1.style.backgroundColor = "lightgray"
    word2span2.style.backgroundColor = "lightgray"
    word2span3.style.backgroundColor = "lightgray"
    word2span4.style.backgroundColor = "lightgray"
    word2span5.style.backgroundColor = "lightgray"
    word2span6.style.backgroundColor = "lightgray"
    word2span7.style.backgroundColor = "lightgray"

    word3span1.textContent = '';
    word3span2.textContent = '';
    word3span3.textContent = '';
    word3span4.textContent = '';
    word3span5.textContent = '';
    word3span6.textContent = '';
    word3span7.textContent = '';
    word3span1.style.backgroundColor = "lightgray"
    word3span2.style.backgroundColor = "lightgray"
    word3span3.style.backgroundColor = "lightgray"
    word3span4.style.backgroundColor = "lightgray"
    word3span5.style.backgroundColor = "lightgray"
    word3span6.style.backgroundColor = "lightgray"
    word3span7.style.backgroundColor = "lightgray"

    word4span1.textContent = '';
    word4span2.textContent = '';
    word4span3.textContent = '';
    word4span4.textContent = '';
    word4span5.textContent = '';
    word4span6.textContent = '';
    word4span7.textContent = '';
    word4span1.style.backgroundColor = "lightgray"
    word4span2.style.backgroundColor = "lightgray"
    word4span3.style.backgroundColor = "lightgray"
    word4span4.style.backgroundColor = "lightgray"
    word4span5.style.backgroundColor = "lightgray"
    word4span6.style.backgroundColor = "lightgray"
    word4span7.style.backgroundColor = "lightgray"

    word5span1.textContent = '';
    word5span2.textContent = '';
    word5span3.textContent = '';
    word5span4.textContent = '';
    word5span5.textContent = '';
    word5span6.textContent = '';
    word5span7.textContent = '';
    word5span1.style.backgroundColor = "lightgray"
    word5span2.style.backgroundColor = "lightgray"
    word5span3.style.backgroundColor = "lightgray"
    word5span4.style.backgroundColor = "lightgray"
    word5span5.style.backgroundColor = "lightgray"
    word5span6.style.backgroundColor = "lightgray"
    word5span7.style.backgroundColor = "lightgray"
}

var word1char = words.charAt(1)
console.log(word1char)
