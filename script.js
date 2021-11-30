let questions = [{ //Alle Fragen in einem Array

    "question": "An welcher Sprache orientieren sich die meisten Programmiersprachen?",
    "answer_1": "englisch",
    "answer_2": "deutsch",
    "answer_3": "spanisch",
    "answer_4": "französisch",
    "right_answer": 1
},

{

    "question": "Was bedeuten die Zahlen 1 und 0 in der Informatik?",
    "answer_1": "links/rechts",
    "answer_2": "oben/unten",
    "answer_3": "wahr/falsch",
    "answer_4": "ja/nein",
    "right_answer": 3
},


{

    "question": "Welche Textausgabe lernt man in den meisten Programmiersprachen als erstes?",
    "answer_1": "New Webseite",
    "answer_2": "Hello World",
    "answer_3": "Welcome",
    "answer_4": "Under construction",
    "right_answer": 2
},


{

    "question": "Wie lautete der Mädchenname von JavaScript kurz nach ihrer Geburt?",
    "answer_1": "Micha",
    "answer_2": "Mocha",
    "answer_3": "Mecha",
    "answer_4": "Mucha",
    "right_answer": 2
},


{

    "question": "Wie definiert man in JS eine Variable?",
    "answer_1": "let 100 = rate;",
    "answer_2": "100 = let rate;",
    "answer_3": "rate = 100;",
    "answer_4": "let rate = 100;",
    "right_answer": 4
},

];

let currentQuestion = 0; //Frage 1 = Stufe 0


function init(){
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();

}

function showQuestion(){
    let question = questions[currentQuestion]; //Fragen anzueigen lassen
    
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection){ // Richtige Antwort

    let question = questions[currentQuestion];
    console.log('Selected answer is', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is', selectedQuestionNumber);
    console.log('Current question is', question['right_answer']);

    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer'] ){  // Richtige/Falsche Antwort farbig unterlegt
      
        document.getElementById(selection).classList.add('bg-success');
    }

    else{                   
        console.log('Falsche Antwort!');
        document.getElementById(selection).classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;  // Button freigeben

}


function nextQuestion(){
    currentQuestion++; //z.B von 0 auf 1
    showQuestion();

    document.getElementById('next-button').disabled = true;

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');

}
