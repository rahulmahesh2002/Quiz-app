const quizqs = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Rome",
        c: "Delhi",
        d: "Paris",
        answer: "d"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Sun",
        c: "Delhi",
        d: "Mars",
        answer: "d"
    },
    {
        question: "What is the largest mammal in the world?",
        a: "Elephant",
        b: "Blue Whale",
        c: "Giraffe",
        d: "Hippopotamus",
        answer: "b"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        a: "China",
        b: "India",
        c: "Japan",
        d: "Australia",
        answer: "c"
    },
    {
        question: "What is the chemical symbol for water?",
        a: "O",
        b: "H2O",
        c: "W",
        d: "H",
        answer: "b"
    },
    {
        question: "What is the tallest mountain in the world?",
        a: "K2",
        b: "Mount Everest",
        c: "Kangchenjunga",
        d: "Lhotse",
        answer: "b"
    },
    {
        question: "Which country is the largest by land area?",
        a: "Russia",
        b: "Canada",
        c: "China",
        d: "United States",
        answer: "a"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        a: "J.K. Rowling",
        b: "Mark Twain",
        c: "Harper Lee",
        d: "Charles Dickens",
        answer: "c"
    },
    {
        question: "What is the currency of Japan?",
        a: "Yuan",
        b: "Yen",
        c: "Euro",
        d: "Dollar",
        answer: "b"
    },
    {
        question: "Which element is represented by the chemical symbol 'Fe'?",
        a: "Iron",
        b: "Gold",
        c: "Silver",
        d: "Copper",
        answer: "a"
    },
    {
        question: "What is the largest ocean in the world?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        answer: "d"
    },
    {
        question: "Which famous scientist developed the theory of relativity?",
        a: "Isaac Newton",
        b: "Albert Einstein",
        c: "Stephen Hawking",
        d: "Galileo Galilei",
        answer: "b"
    },
    {
        question: "Which gas do plants absorb and release oxygen during photosynthesis?",
        a: "Nitrogen",
        b: "Oxygen",
        c: "Carbon Dioxide",
        d: "Helium",
        answer: "c"
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Leonardo da Vinci",
        c: "Pablo Picasso",
        d: "Michelangelo",
        answer: "b"
    },
    {
        question: "Which river is the longest in the world?",
        a: "Amazon River",
        b: "Nile River",
        c: "Yangtze River",
        d: "Mississippi River",
        answer: "b"
    },
    {
        question: "What is the chemical symbol for gold?",
        a: "Ag",
        b: "Au",
        c: "Hg",
        d: "Pb",
        answer: "b"
    },
    {
        question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
        a: "Mars",
        b: "Venus",
        c: "Mercury",
        d: "Saturn",
        answer: "b"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        a: "Marie Curie",
        b: "Mother Teresa",
        c: "Rosalind Franklin",
        d: "Jane Goodall",
        answer: "a"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        a: "Iron",
        b: "Diamond",
        c: "Gold",
        d: "Platinum",
        answer: "b"
    },
    {
        question: "What is the chemical symbol for silver?",
        a: "Si",
        b: "Ag",
        c: "Au",
        d: "Sr",
        answer: "b"
    },
    {
        question: "Who wrote '1984'?",
        a: "George Orwell",
        b: "Aldous Huxley",
        c: "F. Scott Fitzgerald",
        d: "Ray Bradbury",
        answer: "a"
    }
];


const atxt = document.getElementById("a-txt"); // connect the id to a const
const btxt = document.getElementById("b-txt"); // connect the id to a const
const ctxt = document.getElementById("c-txt");  // connect the id to a const
const dtxt = document.getElementById("d-txt");

const quizel = document.getElementById("Question");

const submit = document.getElementById("submit");

const quizz = document.getElementById("quizz");

let currentquiz = 0; // put zero so the qs start from begining

let score=0; // score start from zero


loadquiz();   // we have to load the quiz to get the html updation started

function loadquiz()  // func to load quiz
{
    const q = quizqs[currentquiz];

    quizel.innerHTML = q.question; /* connects the element frm html to the elements of obj question */
    atxt.innerHTML =q.a;   /* connects the element frm html to the elements of obj option A */
    btxt.innerHTML =q.b;
    ctxt.innerHTML =q.c;
    dtxt.innerHTML =q.d;

 
}

function getselected()
{
    const answers = document.querySelectorAll(".answer") // gets all the radio button with class name answer
    let answercheck = undefined;  // by default the ans are unchecked or undefined

    answers.forEach((answer) =>{  // checks the input if checked from the name answer in input
        if(answer.checked)  // if checked(property), answercheck changes to value of that input of id.
        {
            answercheck = answer.id;
        }
    });

    return answercheck;  // fuc returns the id val of checked radio btn
}



submit.addEventListener('click',()=> {


    const check = getselected();   // if click happens in submit getselected val of id stores in const check
     
    if(check)
    {   if(check === quizqs[currentquiz].answer) // checking val(id) of selected radio button === to val of correct id val
        {
            score++; // if it is score ++
        }
        currentquiz++; // current quiz also ++, to change next question
     if(currentquiz<quizqs.length) // while current val less than length of array
     {
        loadquiz();  // load quizz is loaded again
     }
     else
     {
       quizz.innerHTML = `<h2> Your score is: ${score} out of ${quizqs.length}</h2>`
       if(score>(quizqs.length)/2)
       {
        alert("Congrats u passed !");
       }
       else
       {
        alert(" Better luck next time !");
       }
     }
              
         // score is told
    
    }
    


})