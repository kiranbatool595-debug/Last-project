 // Array of questions
        const questions = [
            {
                jsquestion: "What does HTML stand for?",
                options: [
                    "High Tech Modern Language",
                    "Hyper Text Markup Language", 
                    "Hyper Transfer Markup Language",
                ],
                correct_index: 1
            },
            {
                jsquestion: "CSS is used for?",
                options: ["Styling", "Backend coding", "Database management"],
                correct_index: 0
            },
            {
                jsquestion: "How do you select an element with the ID header in CSS?",
                options: [".header","#header","element#header"],
                correct_index: 1
            },
            {
                jsquestion: "JavaScript is used for?",
                options: ["Structure", "Styling", "Interactivity"],
                correct_index: 2
            },
            {
                jsquestion: " Which method is used to add an element to the end of an array in JavaScript?",
                options: ["push()","unshift()","pop()"],
                correct_index: 0
            }
        ];

        // Variables
        let currentQuestion = 0;
        let score = 0;

        // declare function for Show current question on page.
        function showCurrentQuestion(){ 
            const currentQ = questions[currentQuestion];
            // get then ID "question" and chang the text to the current question text.
            document.getElementById("question").textContent = currentQ.jsquestion;
            // add all option in one variable.
            const alloption = document.getElementsByClassName("option");
            alloption[0].textContent = currentQ.options[0];
            alloption[1].textContent = currentQ.options[1];
            alloption[2].textContent = currentQ.options[2];

            // update progress display
            updateProgress();
        }

        // declare function for Update progress.
        function updateProgress(){
            const progress = ((currentQuestion) / questions.length) * 100;
            document.getElementById("progress").style.width = `${progress}%`;
             document.getElementById('question-counter').textContent = 
                `Question ${currentQuestion + 1} of ${questions.length}`;
            document.getElementById('score-display').textContent = `Score: ${score}`;
        }
        

        // after page lode show the js question on html.
        document.addEventListener('DOMContentLoaded', function(){
            showCurrentQuestion();
        });


        // use the declare functions.
        function selectAnswer(selectedIndex){
            // store the index of correct answer from 'correct_index' prorerty from the 'questions'.
            const correctIndex  = questions[currentQuestion].correct_index;

            // Compares with correctIndex to check answer.
            if(selectedIndex === correctIndex){
                // then add score.
                score++;
            } 
            // move to the next question.
            currentQuestion++;
            // if we have more question then move on if not then show the result.
            if (currentQuestion < questions.length){
                showCurrentQuestion();
            } else {
                showResult();
            }
        }

         // declare function to show result.
        function showResult(){
             // remove everthing in 'quiz-box'.
            document.getElementById("quiz-box").innerHTML = "";

            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "";

            let message = document.createElement("p");
            // 4-5 correct
            if(score >= 4){ 
                message.textContent = "🎉 Excellent, You're a quiz master.";
                message.style.color = "green";
            } 
            // 2-3 correct
            else if (score >= 2){ 
                message.textContent = "👍 Good job, You know your stuff.";
                message.style.color = "orange";
            }
            // 0-1 correct
             else { 
                message.textContent = "💪 Keep learning, You'll get better.";
                message.style.color = "red";
            }

            const heading = document.createElement("h2");
            heading.textContent = "Quiz Completed!";

            const scorePara = document.createElement("p");
            scorePara.textContent = `Your score: ${score} out of ${questions.length}`;

            const restartButton = document.createElement("button");
            restartButton.textContent = "Restart Quiz";
            restartButton.className = "option";
            restartButton.onclick = function() {
                location.reload();
            };
            resultDiv.appendChild(heading);
            resultDiv.appendChild(scorePara);
            resultDiv.appendChild(message);
            resultDiv.appendChild(restartButton);
            

            // Update progress to 100% at the end
            document.getElementById("progress").style.width = "100%";
        }

        