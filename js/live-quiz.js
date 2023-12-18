const firebaseConfig = {
    apiKey: "AIzaSyAiIT7QmHfRcQnACWSrLdeoWs6k1Wv8c_U",
    authDomain: "it-finisher-training-centre.firebaseapp.com",
    databaseURL: "https://it-finisher-training-centre-default-rtdb.firebaseio.com",
    projectId: "it-finisher-training-centre",
    storageBucket: "it-finisher-training-centre.appspot.com",
    messagingSenderId: "288743415064",
    appId: "1:288743415064:web:24d1d8fa2f0806c69b526d",
    measurementId: "G-1Z4K8YX898"
  };
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();




  // Variables storing DOM elements and quiz-related data
  const options = document.querySelector(".options").children;
  const answerTrackerContainer = document.querySelector(".answers-tracker");
  const questionNumberSpan = document.querySelector(".question-num-value");
  const totalQuestionSpan = document.querySelector(".total-question");
  const correctAnswerSpan = document.querySelector(".correct-answers");
  const totalQuestionSpan2 = document.querySelector(".total-question2");
  const percentage = document.querySelector(".percentage");
  const question = document.querySelector(".question");
  const op1 = document.querySelector(".option1");
  const op2 = document.querySelector(".option2");
  const op3 = document.querySelector(".option3");
  const op4 = document.querySelector(".option4");
  let questionIndex;
  let index = 0;
  let myArray = [];
  let myArr = [];
  let score = 0;
  

    let questions = []; // Array to store the formatted quiz data from Firebase

//Get 10 random indices Set Question Number
async function fetchFirebaseData() {
    try {
      const snapshot = await firebase.database().ref('excelQuiz').once('value');
      const totalQuestions = snapshot.numChildren(); // Total number of questions in the database
      const randomIndices = getRandomIndices(totalQuestions, 10); // Get 10 random indices
      
      randomIndices.forEach((randomIndex) => {
        const childSnapshot = snapshot.child(randomIndex);
        const quizData = childSnapshot.val();
        const question = quizData.Question;
        const options = [
          quizData.Option_A,
          quizData.Option_B,
           quizData.Option_C,
          quizData.Option_D
        ];
        const answerText = quizData.Answer.toLowerCase();
        const answerIndex = options.findIndex(option => option.toLowerCase() === answerText);
  
        const formattedQuestion = {
          q: question,
          options: options,
          answer: answerIndex + 1
        };
  
        questions.push(formattedQuestion);
      });
  
      loadPage(); // Load the quiz page
    } catch (error) {
      console.error('Error fetching quiz data:', error);
    }
  }
  
  function getRandomIndices(total, count) {
    const indices = [];
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * total);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  }
  
  
  
  // Function to load the quiz page
  function loadPage() {
    totalQuestionSpan.innerHTML = questions.length;
    randomQuestion();
    answerTracker();
  }


  
// Function to load a question and its options
function load() {
    questionNumberSpan.innerHTML = index + 1;
    question.innerHTML = questions[questionIndex].q;
    op1.innerHTML = questions[questionIndex].options[0];
    op2.innerHTML = questions[questionIndex].options[1];
    op3.innerHTML = questions[questionIndex].options[2];
    op4.innerHTML = questions[questionIndex].options[3];
    index++;
  }
  
  
  function randomQuestion(){
      let randomNumber=Math.floor(Math.random()*questions.length);
      let hitDuplicate=0;
          if(index==questions.length){
           quizOver();
          }
          else{
            if(myArray.length>0){
                for(let i=0; i<myArray.length; i++){
                  if(myArray[i]==randomNumber){
                     hitDuplicate=1;
                     break;
                  }
                }
                if(hitDuplicate==1){
                 randomQuestion();
                }
                else{
                  questionIndex=randomNumber;   
                 load();
                 myArr.push(questionIndex);
                }
            }
            if(myArray.length==0){
              questionIndex=randomNumber;   
              load();
              myArr.push(questionIndex);
            }
     
          myArray.push(randomNumber);
          
         }
         questionNumberSpan.innerHTML = myArr.length;
         totalQuestionSpan.innerHTML = questions.length;
     }
    // Create answer tracker elements
    function answerTracker() {
      for (let i = 0; i < questions.length; i++) {
        const div = document.createElement("div");
        answerTrackerContainer.appendChild(div);
      }
    }
    
    // Update the answer tracker with correct or wrong answers
    function updateAnswerTracker(classNam) {
      answerTrackerContainer.children[index - 1].classList.add(classNam);
    }
    
    // Handle quiz completion
    function quizOver() {
      document.querySelector(".quiz-over").classList.add("show");
      correctAnswerSpan.innerHTML = score;
      totalQuestionSpan2.innerHTML = questions.length;
      const calculatedPercentage = Math.ceil((score / questions.length) * 100);
      percentage.innerHTML = `${calculatedPercentage}%`;
          }
    
    // Restart the quiz
    function tryAgain() {
      window.location.reload();
    }
    
    // Check the selected answer and update score
    function check(element) {
      if (element.id == questions[questionIndex].answer) {
        element.classList.add("correct");
        updateAnswerTracker("correct");
        score++;
        console.log("score: " + score);
      } else {
        element.classList.add("wrong");
        updateAnswerTracker("wrong");
    
        // Remove the highlighting of the correct answer
        for (let i = 0; i < options.length; i++) {
          if (options[i].id == questions[questionIndex].answer) {
            options[i].classList.remove("correct");
          }
        }
      }
      // Disable all options to prevent further selection
      disabledOptions();
    }
    
    // Disable options after an answer is selected
    function disabledOptions() {
      for (let i = 0; i < options.length; i++) {
        options[i].classList.add("disabled");
        if (options[i].id == questions[questionIndex].answer) {
          options[i].classList.add("correct");
        }
      }
    }
    
    // Enable options for the next question
    function enableOptions() {
      for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("disabled", "correct", "wrong");
      }
    }
    
    // Validate if an option is selected before proceeding
    function validate() {
      if (!options[0].classList.contains("disabled")) {
        alert("Please Select one option");
      } else {
        enableOptions();
        randomQuestion();
      }
    }
    
    // Move to the next question
    function next() {
      validate();
    }
    
  
    //  Function to hide the loading message and show the quiz elements
    function hideLoadingMessage() {
      const loadingMessage = document.getElementById("loadingMessage");
      loadingMessage.style.display = "none";
    
      document.querySelector(".options").style.display = "block";
      document.querySelector(".question-container").style.display = "block";
      document.querySelector(".quiz-over").style.display = "block";
    }
    
    // Fetch data from Firebase and load the page
    window.onload = function () {
      const loadingMessage = document.getElementById("loadingMessage");
      loadingMessage.style.display = "block";
    
      fetchFirebaseData()
        .then(() => {
          hideLoadingMessage();
          loadPage();
        })
        .catch(error => {
          console.error('Error fetching quiz data:', error);
          hideLoadingMessage();
        });
    };




    function closeQuiz() {
        // Display a confirmation dialog to the user
        const confirmation = confirm("Are you sure you want to close the quiz?");
        
        // If user confirms, redirect to itfinisher.com
        if (confirmation) {
          window.location.href = "https://itfinisher.com";
        }
      }
