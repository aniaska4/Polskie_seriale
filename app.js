////////////////////////////// Quiz ////////////////////////////////////////////////
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    //pytania
    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
    // sprawdzamy czy jest koniec gry
    isEnded() {
        return this.questions.length === this.questionIndex;
    }
    //dodajemy pkt za dobrą odpowiedź
    guess(answer) {
        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }
}




/////////////////////////////////////// Questions //////////////////////////////////
class Questions {
    constructor(text, choices, answer) {
        this.text = text,
            this.choices = choices,
            this.answer = answer;
    }
    //czy udzielono prawidłowej odpowiedzi
    correctAnswer(choice) {
        return choice === this.answer;
    }
}



////////////////////////////////////////////////

function populate() {
    if(quiz.isEnded()){
        showScores()
    } else {
        //pokaż pytanie
        let element = document.querySelector('#question');
        element.innerHTML = quiz.getQuestionIndex().text;

        // pokaż możliwości odpowiedzi
        var choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let element = document.querySelector("#choice" + i);
            element.innerHTML = choices[i];
            element.style.fontSize="16px";
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let element = document.querySelector('#points');
    element.innerText = `Pytanie ${currentQuestionNumber}  z  ${quiz.questions.length}`;
    element.style.fontSize="20px"
}

function showScores() {
    let gameOverHTML = "<h1> Wynik </h1>";
    gameOverHTML += "<h2 id='score'> Twój wynik to: " + quiz.score + "</h2>";
    let element = document.querySelector("#quiz");
    element.innerHTML = gameOverHTML;
    element.style.padding = "35px";
    element.style.fontSize = "30px";
};

function startGame() {
    let start = "<nav class='title'><h2>Polskie seriale</h2></div></nav>";
        start += "<button type='submit'>START</button>";
        let element = document.querySelector('#startGame');
        element.innerHTML = start;
        let button = document.querySelector('button');
        button.onclick = function () {
            populate();
        }
};


const questions = [
    // 1
    new Questions("Jak się nazywała główna aktorka grająca w serialu Noce i Dnie?", ["Anna Dymna", "Irena Kwiatkowska", "Ewa Szykulska", "Jadwiga Barańska"], "Jadwiga Barańska"),
    // 2
    new Questions("Na podstawie czyjej powieści został nakręcony serial Hrabina Cosel?", ["Henryk Sienkiewicz", "Eliza Orzeszkowa", "Marii Krantz", "Jozefa Ignacego Kraszewskiego"], "Jozefa Ignacego Kraszewskiego"),
   // 3
    new Questions("Kim był tytułowy bohater Kariery Nikodema Dyzmy?", ["Taksówkarzem", "Hydraulikiem", "Grabarzem", "Sprzedawcą"], "Grabarzem"),
    // 4
    new Questions("Kto grał rolę Rzeckiego w serialu Lalka?", ["Andrzej Zaorski", "Jerzy Kamas", "Witold Pyrkosz", "Franciszek Pieczka"], "Jerzy Kamas"),
    // 5
    new Questions("Kim z zawodu był Zdzisław Kołek, postać grana przez Jerzego Kryszaka w serialu Alternatywy 4?", ["Budowlańcem", "Nauczycielem", "Lekarzem", "Inżynierem"], "Lekarzem"),
    // 6
    new Questions("Jaki stopień nosił Sławomir Borewicz, główny bohater serialu 07 zgłoś się?", ["Sierżant", "Porucznik", "Major", "Kapitan"], "Porucznik"),       
    // 7
    new Questions("Mieszkańcami której warszawskiej dzielnicy byli bohaterowie serialu Miodowe lata?", ["Ursus", "Wola", "Ochota", "Sródmieście"], "Wola"),
    // 8
    new Questions("JGdzie pracował Andrzej Talar, jedna z postaci serialu Dom?", ["PKP", "MPO", "FSO", "Ursus"], "FSO"),
    // 9
    new Questions("Serial Zmiennicy opowiada o perypetiach ...", ["Taksówkarzy", "Lekarzy", "Nauczycieli", "Aptekarzach"], "Taksówkarzy"),
    // 10
    new Questions("Jakie imiona noszą sąsiedzi państwa Kwiatkowskich z serialu Rodzina zastępcza?", ["Halinka i Lesio", "Alutka i Jędrula", "Maciej i Martula", "Madzia i Pawełek"], "Alutka i Jędrula"),
    // 11
    new Questions("Jak nazywał się policjant grany przez Cezarego Pazurę w serialu 13 posterunek?", ["Cezary Baryka", "Cezary Stępień", "Cezary Cezary", "Cezary Słoik"], "Cezary Baryka"),
    // 12
    new Questions("Co po polsku oznacza imię Szarik?", ["Rudy", "Łowca", "Kuleczka", "Czołgista"], "Rudy")
];

var quiz = new Quiz(questions);

populate()